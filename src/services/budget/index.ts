import { createBudget } from "./createBudget.service";
import { deleteBudget } from "./deleteBudget.service";
import { updateBudget } from "./updateBudget.service";
import { getBudgetList } from "./getBudgetList.services";

export const BudgetServices = {
  createBudget,
  deleteBudget,
  updateBudget,
  getBudgetList,
};
