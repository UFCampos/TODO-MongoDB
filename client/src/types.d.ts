export type InterfaceTodo = {
	_id: string;
	title: string;
	description: string;
	completed: boolean;
};

export type TodoProps = {
	todo: ITodo;
};

export type ApiResponse = {
	message: string;
	status: string;
	todo?: InterfaceTodo;
	todos: InterfaceTodo[];
};
