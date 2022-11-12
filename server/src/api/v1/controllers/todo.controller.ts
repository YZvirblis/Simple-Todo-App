import { Request, Response, Router, NextFunction } from "express";
import * as handler from "../handlers/todo.handler";

const TodoController = () => {
  const router = Router();
  router.post("/create", createTodo);
  router.get("/gettodos", getAllTodos)
  router.put("/edit/:id", editTodo)
  router.delete("/delete/:id", delteTodo)
  return router;
};

const createTodo = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
    const {description} = request.body
  const res = await handler.createTodo(description);
  response.json(res)
};

const getAllTodos = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const res = await handler.getAllTodos();
  response.json(res)
};

const editTodo = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
    const {id} = request.params;
    const {description} = request.body
  const res = await handler.editTodo(id,description);
  response.json(res)
};

const delteTodo = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
    const {id} = request.params;
  const res = await handler.delteTodo(id);
  response.json(res)
};

export { TodoController };
