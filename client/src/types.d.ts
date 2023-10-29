export interface ITodo {
    _id: string;
    title: string;
    description: string;
    completed: boolean;
}

export interface TodoProps {
    todo: ITodo;
}

export type ResponseType = {
    message: string;
    status: string;
    todo?: ITodo;
    todos: ITodo[];
}