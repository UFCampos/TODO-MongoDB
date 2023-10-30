import {useEffect, useState} from 'react';
import {type InterfaceTodo} from '../../types';
import {getTodos} from '../../utils/apiFetch';

const MyTodos: React.FC = (): React.JSX.Element => {
	const [todos, setTodos] = useState<InterfaceTodo[] | any>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = (): void => {
		getTodos()
			.then((todos: InterfaceTodo[] | any) => {
				setLoading(false);
				if (todos.length !== 0) {
					setTodos(todos);
				}
			})
			.catch((err: Error) => {
				setLoading(false);
				console.log(err);
			});
	};

	return (
		<div>
			{loading && <div>Loading...</div>}
			{todos.length > 0 ? todos.map((todo: InterfaceTodo) => (
				<div key={todo._id}>
					<h1>{todo.title}</h1>
					<p>{todo.description}</p>
					{todo.completed ? <p>&#10003;</p> : <p>&#10007;</p>}
				</div>
			)) : (
				<div>No todos</div>
			)}
		</div>
	);
};

export default MyTodos;
