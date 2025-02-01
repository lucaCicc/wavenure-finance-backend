import { Router } from "express";
import { errorHandler } from "../handlers/error.handler";
import authMiddleware from "../middelwares/auth";
import {
  createWalletController,
  deleteWalletController,
  getWalletByIdController,
  getWalletListController,
  updateWalletController,
} from "../controllers/wallet.controller";
import {
  createExpenseController,
  deleteExpenseController,
  getWalletExpensesController,
  updateExpenseContainer,
} from "../controllers/expense.controller";

const walletRouters: Router = Router();

/**********
 * Roures
 *********/

walletRouters.post("/", [authMiddleware], errorHandler(createWalletController));
walletRouters.get("/", [authMiddleware], errorHandler(getWalletListController));

walletRouters.put(
  "/:id",
  [authMiddleware],
  errorHandler(updateWalletController)
);

walletRouters.get(
  "/:id",
  [authMiddleware],
  errorHandler(getWalletByIdController)
);

walletRouters.delete(
  "/:id",
  [authMiddleware],
  errorHandler(deleteWalletController)
);

walletRouters.post(
  "/:id/expenses",
  [authMiddleware],
  errorHandler(createExpenseController)
);

walletRouters.put(
  "/:walletId/expenses/:id",
  [authMiddleware],
  errorHandler(updateExpenseContainer)
);

walletRouters.delete(
  "/:walletId/expenses/:id",
  [authMiddleware],
  errorHandler(deleteExpenseController)
);

walletRouters.get(
  "/:id/expenses",
  [authMiddleware],
  errorHandler(getWalletExpensesController)
);

export default walletRouters;
