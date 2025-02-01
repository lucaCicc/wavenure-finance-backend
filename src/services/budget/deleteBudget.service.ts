import { prismaCLient } from "../..";

interface Args {
  userId: number;
  budgetId: number;
}

/**
 * Delete Budget
 *
 */
export const deleteBudget = async ({ userId, budgetId }: Args) => {
  await prismaCLient.budget.delete({
    where: {
      id: budgetId,
      userId: userId,
    },
  });

  return true;
};
