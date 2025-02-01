import { prismaCLient } from "../..";
import { ErrorCodes } from "../../exceptions/http-execption";
import { UnauthorizedException } from "../../exceptions/unauthorized";
import { UpdateExpenseSchema } from "../../schemes/expense.schema";
import { z } from "zod";

type ExpenseData = z.infer<typeof UpdateExpenseSchema>;

interface Args {
  data: ExpenseData;
  userId: number;
  walletId: number;
  expenseId: number;
}

/**
 * Update Expense
 *
 */
export const updateExpense = async ({
  data,
  userId,
  walletId,
  expenseId,
}: Args) => {
  const updatedExpense = await prismaCLient.expense.updateMany({
    where: {
      id: expenseId,
      walletId: walletId,
      wallet: {
        userId: userId,
      },
    },
    data: data,
  });

  if (updatedExpense.count === 0) {
    throw new UnauthorizedException(
      "Cannot update this Expense",
      ErrorCodes.UNAUTHORIZED
    );
  }

  return updatedExpense;
};
