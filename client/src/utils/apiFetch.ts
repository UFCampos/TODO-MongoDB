import {type InterfaceTodo, type ApiResponse, type TodoProps} from '../types';

const baseUrl: URL = new URL(`${import.meta.env.API_URL}`);

/**
 * Retrieves todos from the API.
 *
 * @return {Promise<ApiResponse>} The response data from the API.
 */
export const getTodos = async (): Promise<ApiResponse> => {
	const response: Response = await fetch(baseUrl);
	const data: ApiResponse = await response.json() as ApiResponse;
	return data;
};

/**
 * Adds a new todo item to the API.
 *
 * @param {InterfaceTodo} todo - The todo item to be added.
 * @return {Promise<ApiResponse>} The response from the API.
 */
export const addTodo = async ({title, description, completed = false}: InterfaceTodo): Promise<ApiResponse> => {
	const response: Response = await fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({title, description, completed}),
	});

	const data: ApiResponse = await response.json() as ApiResponse;
	return data;
};

export const updateTodo = async ({_id, title, description, completed}: InterfaceTodo): Promise<ApiResponse> => {
	const response: Response = await fetch(`${baseUrl.pathname}/${_id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({title, description, completed}),
	});

	const data: ApiResponse = await response.json() as ApiResponse;
	return data;
};

export const deleteTodo = async (_id: string): Promise<ApiResponse> => {
	const response: Response = await fetch(`${baseUrl.pathname}/${_id}`, {
		method: 'DELETE',
	});

	const data: ApiResponse = await response.json() as ApiResponse;
	return data;
};
