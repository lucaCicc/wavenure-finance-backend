import { z } from "zod";
import { CreateBudgetSchema } from "../../schemes/budget.schema";
import { prismaCLient } from "../..";

type BudgetData = z.infer<typeof CreateBudgetSchema>;

interface Args {
  data: BudgetData;
  userId: number;
}

/**
 * Create Budget
 *
 */
export const createBudget = async ({ data, userId }: Args) => {
  const budget = await prismaCLient.budget.create({
    data: {
      ...data,
      userId,
    },
  });

  return budget;
};
