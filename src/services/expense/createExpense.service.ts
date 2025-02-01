import { prismaCLient } from "../..";
import { UnauthorizedException } from "../../exceptions/unauthorized";
import { ErrorCodes } from "../../exceptions/http-execption";
import { CreateExpenseSchema } from "../../schemes/expense.schema";
import { z } from "zod";

type ExpenseData = z.infer<typeof CreateExpenseSchema>;

interface Args {
  data: ExpenseData;
  userId: number;
  walletId: number;
}

/**
 * Create Expense
 *
 */
export const createExpense = async ({ data, userId, walletId }: Args) => {
  const wallet = await prismaCLient.wallet.findFirst({
    where: { id: walletId, userId },
  });

  if (!wallet) {
    throw new UnauthorizedException(
      `Cannot create the Expense on Wallet (id: ${walletId})`,
      ErrorCodes.UNAUTHORIZED
    );
  }

  const newExpense = await prismaCLient.expense.create({
    data: {
      ...data,
      walletId,
    },
  });

  return newExpense;
};
