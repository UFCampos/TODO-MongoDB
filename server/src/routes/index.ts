import { Request, Response, Router } from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todos";
import { ITodo } from "../types/todo";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const todos: ITodo[] = await getTodos();
        res.status(200).json(todos)
    } catch (error: any) {
        res.status(400).json(error.message)
    }
})

router.post("/", async (req: Request, res: Response) => {
    try {
        const todo: ITodo = req.body as ITodo;
        const newTodo: ITodo = await addTodo(todo);
        res.status(201).json({ message: "Todo added successfully", todo: newTodo })
    } catch (error: any) {
        res.status(400).json(error.message)
    }
})

router.put("/:id", async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const todo: ITodo = req.body as ITodo;
        const updatedTodo: ITodo = await updateTodo(id, todo);
        res.status(200).json({ message: "Todo updated successfully", todo: updatedTodo })
    } catch (error: any) {
        res.status(400).json(error.message)
    }
})

router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const deletedTodo: ITodo = await deleteTodo(id);
        res.status(200).json({ message: "Todo deleted successfully", todo: deletedTodo })
    } catch (error: any) {
        res.status(400).json(error.message)
    }
})

export default router
