import { ExpenseCategory } from "@prisma/client";
import { z } from "zod";

export const CreateBudgetSchema = z.object({
  amount: z.number(),
  name: z.string(),
  currency: z.string(),
  category: z.nativeEnum(ExpenseCategory),
});

export const UpdateBudgetSchema = z.object({
  amount: z.number(),
  name: z.string(),
  currency: z.string(),
  category: z.nativeEnum(ExpenseCategory),
});
