import { prismaCLient } from "../..";
import { UnauthorizedException } from "../../exceptions/unauthorized";
import { ErrorCodes } from "../../exceptions/http-execption";

interface Args {
  userId: number;
  expenseId: number;
  walletId: number;
}

/**
 * Delete Expense
 *
 */
export const deleteExpense = async ({ userId, expenseId, walletId }: Args) => {
  const deletedExpense = await prismaCLient.expense.deleteMany({
    where: {
      id: expenseId,
      walletId,
      wallet: {
        userId,
      },
    },
  });

  if (deletedExpense.count === 0) {
    throw new UnauthorizedException(
      `Cannot delete this Expense (id: ${expenseId})`,
      ErrorCodes.UNPROCESSABLE_ENTITY
    );
  }

  return true;
};
