import { NextFunction, Request, Response } from "express";
import {
  CreateBudgetSchema,
  UpdateBudgetSchema,
} from "../schemes/budget.schema";
import { BudgetServices } from "../services/budget";

/**
 * Create Budget
 *
 */
export const createBudgetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validatedData = CreateBudgetSchema.parse(req.body);
  const userId = +req?.user?.id;

  const budget = await BudgetServices.createBudget({
    data: validatedData,
    userId,
  });

  res.json(budget);
};

/**
 * Delete Budget
 *
 */
export const deleteBudgetController = async (
  req: Request,
  res: Response,
  _: NextFunction
) => {
  await BudgetServices.deleteBudget({
    userId: req?.user?.id,
    budgetId: +req.params.id,
  });

  res.json({
    message: "Budget deleted successfully",
  });
};

/**
 * Update Budget
 *
 */
export const updateBudgetController = async (
  req: Request,
  res: Response,
  _: NextFunction
) => {
  const validatedData = UpdateBudgetSchema.parse(req.body);

  const budget = await BudgetServices.updateBudget({
    data: validatedData,
    budgetId: +req.params.id,
  });

  res.json({
    message: "Budget updated successfuly",
    data: budget,
  });
};
