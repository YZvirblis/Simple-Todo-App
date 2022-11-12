import { Request, Response, Router } from "express";
import v1Routes from "./v1/v1.routes";

const initializeApiRoutes = () => {
  const router = Router();

  console.log(`initializeRoutes...`);
  router.use("/v1/", v1Routes());

  console.log(`initializeRoutes done`);
  return router;
};
export default initializeApiRoutes;
