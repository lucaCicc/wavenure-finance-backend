import { prismaCLient } from "../..";
import { UnauthorizedException } from "../../exceptions/unauthorized";
import { ErrorCodes } from "../../exceptions/http-execption";
import { WalletExpensesSchema } from "../../schemes/expense.schema";
import { z } from "zod";

type Data = z.infer<typeof WalletExpensesSchema>;

interface Args {
  data: Data;
  userId: number;
  walletId: number;
}

/**
 * Expense List
 *
 */
export const getWalletExpenses = async ({ data, userId, walletId }: Args) => {
  const { type, startDate, endDate } = data;

  const wallet = await prismaCLient.wallet.findFirst({
    where: { id: walletId, userId },
  });

  if (!wallet) {
    throw new UnauthorizedException(
      `Cannot access expenses for Wallet (id: ${walletId})`,
      ErrorCodes.UNAUTHORIZED
    );
  }

  const expenses = await prismaCLient.expense.findMany({
    where: {
      walletId,
      type: type,
      date: {
        gte: startDate,
        lte: endDate,
      },
    },
    orderBy: { date: "desc" },
  });

  return expenses;
};
