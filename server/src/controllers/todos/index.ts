import { ITodo } from "../../types/todo";
import Todo from "../../models/todo";

/**
 * Retrieves all todos from the database.
 *
 * @return {Promise<ITodo[]>} An array of todos.
 */
export const getTodos = async (): Promise<ITodo[]> => {
    const todos: ITodo[] = await Todo.find();

    if(!todos) throw new Error("No todos found");

    return todos
}

/**
 * Adds a new todo item to the database. 
 *
 * @param {ITodo} todo - The todo item to be added.
 * @return {Promise<ITodo>} The saved todo item.
 */
export const addTodo = async ({ title, description, completed }: ITodo): Promise<ITodo> => {
    if (!title) throw new Error("Title is required");
    if (!description) throw new Error("Description is required");
    if (typeof completed !== "boolean") throw new Error("Completed must be a boolean");

    const newTodo: ITodo = new Todo({
        title,
        description,
        completed
    });

    const savedTodo: ITodo = await newTodo.save();

    return savedTodo
}

export const updateTodo = async (id: string, { title, description, completed }: ITodo): Promise<ITodo> => {
    if (!id) throw new Error("Id is required");
    if (!title) throw new Error("Title is required");
    if (!description) throw new Error("Description is required");
    if (typeof completed !== "boolean") throw new Error("Completed must be a boolean");

    const updatedTodo: ITodo | null = await Todo.findByIdAndUpdate(id, {
        title,
        description,
        completed
    });

    const savedTodo = await updatedTodo?.save();

    if (!savedTodo) throw new Error("Todo not found");

    return savedTodo
}

export const deleteTodo = async (id: string): Promise<ITodo> => {
    if (!id) throw new Error("Id is required");

    const deletedTodo: ITodo | null = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) throw new Error("Todo not found");

    return deletedTodo
}
