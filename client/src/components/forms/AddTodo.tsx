import { Button } from '@nextui-org/react';
import {useState} from 'react';

const AddTodo: React.FC = (): React.JSX.Element => {
	const [todo, setTodo] = useState({
		title: '',
		description: '',
		completed: false,
	});

	return (
		<form method='POST' onSubmit={e => {
			e.preventDefault();
		}}>
			<input
				type='text'
				name='title'
				placeholder='Title'
				value={todo.title}
				onChange={e => {
					setTodo({...todo, title: e.target.value});
				}}
			/>
			<input
				type='text'
				name='description'
				placeholder='Description'
				value={todo.description}
				onChange={e => {
					setTodo({...todo, description: e.target.value});
				}}
			/>
			<input
				type='checkbox'
				name='completed'
				checked={todo.completed}
				onChange={e => {
					setTodo({...todo, completed: e.target.checked});
				}}
			/>
			<Button type='submit'>Add Todo</Button>
		</form>
	);
};

export default AddTodo;
