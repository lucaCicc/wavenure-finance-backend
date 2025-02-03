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
  const { amount, category, startDate, endDate } = data;

  const wallet = await prismaCLient.wallet.findFirst({
    where: { id: walletId, userId },
  });

  if (!wallet) {
    throw new UnauthorizedException(
      `Cannot access expenses for Wallet (id: ${walletId})`,
      ErrorCodes.UNPROCESSABLE_ENTITY
    );
  }

  const filters: any = { walletId };

  if (category) {
    filters.category = category;
  }

  if (amount) {
    filters.amount = +amount;
  }

  if (startDate || endDate) {
    filters.date = {};
    if (startDate) filters.date.gte = startDate;
    if (endDate) filters.date.lte = endDate;
  }

  const expenses = await prismaCLient.expense.findMany({
    where: filters,
    orderBy: { date: "desc" },
  });

  return expenses;
};
