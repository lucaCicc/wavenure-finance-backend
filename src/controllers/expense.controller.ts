import { NextFunction, Request, Response } from "express";
import {
  CreateExpenseSchema,
  UpdateExpenseSchema,
  WalletExpensesSchema,
} from "../schemes/expense.schema";
import { ExpenseServices } from "../services/expense";

/**
 * Create Expense
 *
 */
export const createExpenseController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validatedData = CreateExpenseSchema.parse(req.body);

  const newExpense = await ExpenseServices.createExpense({
    data: validatedData,
    userId: req?.user?.id,
    walletId: +req.params.id,
  });

  res.json(newExpense);
};

/**
 * Delete Expense
 *
 */
export const deleteExpenseController = async (
  req: Request,
  res: Response,
  _: NextFunction
) => {
  await ExpenseServices.deleteExpense({
    userId: req?.user?.id,
    walletId: +req.params.walletId,
    expenseId: +req.params.id,
  });

  res.json({
    message: "Expense deleted successfully",
  });
};

/**
 * Expense List
 *
 */
export const getWalletExpensesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validatedData = WalletExpensesSchema.parse(req.query);

  const expenses = await ExpenseServices.getWalletExpenses({
    userId: req?.user?.id,
    walletId: +req.params.id,
    data: validatedData,
  });

  res.json({
    message: "Expense list retrieved successfully",
    data: expenses,
  });
};

/**
 * Update Expense
 *
 */
export const updateExpenseContainer = async (
  req: Request,
  res: Response,
  _: NextFunction
) => {
  const validatedData = UpdateExpenseSchema.parse(req?.body);

  const updatedExpense = await ExpenseServices.updateExpense({
    userId: req?.user?.id,
    walletId: +req.params.walletId,
    expenseId: +req.params.id,
    data: validatedData,
  });

  res.json({
    message: "Exception updated successfuly",
    data: updatedExpense,
  });
};
