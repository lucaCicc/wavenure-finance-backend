import { createExpense } from "./createExpense.service";
import { deleteExpense } from "./deleteExpense.service";
import { getWalletExpenses } from "./getWalletExpenses.service";
import { updateExpense } from "./updateExpense.service";

export const ExpenseServices = {
  createExpense,
  deleteExpense,
  getWalletExpenses,
  updateExpense,
};
