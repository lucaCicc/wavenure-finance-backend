import { Router } from "express";

import { errorHandler } from "../handlers/error.handler";
import authMiddleware from "../middelwares/auth";
import {
  createBudgetController,
  deleteBudgetController,
  updateBudgetController,
} from "../controllers/budget.controller";

const budgetRouters: Router = Router();

budgetRouters.post("/", [authMiddleware], errorHandler(createBudgetController));

budgetRouters.delete(
  "/:id",
  [authMiddleware],
  errorHandler(deleteBudgetController)
);

budgetRouters.put(
  "/:id",
  [authMiddleware],
  errorHandler(updateBudgetController)
);

export default budgetRouters;
