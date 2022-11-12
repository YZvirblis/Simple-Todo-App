import { Request, Response, Router, NextFunction } from "express";
import { PingController } from "./controllers/ping.controller";
import { TodoController } from "./controllers/todo.controller";

const v1Routes = () => {
  console.log("V1");
  const router = Router();

  router.use("/ping", PingController());
  router.use("/todo", TodoController())

  return router;
};

export default v1Routes;
