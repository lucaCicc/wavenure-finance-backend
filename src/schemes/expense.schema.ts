import { ExpenseCategory, ExpenseType } from "@prisma/client";
import { z } from "zod";

const iso8601Regex =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?(Z|([+-])(\d{2}):(\d{2}))?$/;

export const CreateExpenseSchema = z.object({
  amount: z.number(),
  date: z
    .string()
    .regex(iso8601Regex, "Invalid date format. Expected ISO 8601"),
  note: z.string().optional(),
  type: z.nativeEnum(ExpenseType),
  category: z.nativeEnum(ExpenseCategory),
});

export const UpdateExpenseSchema = z.object({
  amount: z.number(),
  date: z
    .string()
    .regex(iso8601Regex, "Invalid date format. Expected ISO 8601"),
  note: z.string().optional(),
  type: z.nativeEnum(ExpenseType),
  category: z.nativeEnum(ExpenseCategory),
});

export const WalletExpensesSchema = z.object({
  startDate: z
    .string()
    .regex(iso8601Regex, "Invalid date format. Expected ISO 8601")
    .optional(),
  endDate: z
    .string()
    .regex(iso8601Regex, "Invalid date format. Expected ISO 8601")
    .optional(),
  type: z.nativeEnum(ExpenseType).optional(),
});
