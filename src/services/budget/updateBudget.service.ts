import { prismaCLient } from "../..";
import { UpdateBudgetSchema } from "../../schemes/budget.schema";
import { z } from "zod";

type BudgetData = z.infer<typeof UpdateBudgetSchema>;

interface Args {
  data: BudgetData;
  budgetId: number;
}

/**
 * Update Budget
 *
 */
export const updateBudget = async ({ data, budgetId }: Args) => {
  const budgetUpdated = await prismaCLient.budget.update({
    where: {
      id: budgetId,
    },
    data,
  });

  return budgetUpdated;
};
