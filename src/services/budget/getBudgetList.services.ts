import { prismaCLient } from "../..";

interface Args {
  userId: number;
}

/**
 * Update Budget
 *
 */
export const getBudgetList = async ({ userId }: Args) => {
  const budgetUpdated = await prismaCLient.budget.findMany({
    where: { userId: userId },
  });

  return budgetUpdated;
};
