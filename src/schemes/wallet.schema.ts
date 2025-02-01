import { z } from "zod";

export const CreateWalletSchema = z.object({
  name: z.string(),
  initialBalance: z.number(),
  currency: z.string(),
});

export const UpdateWalletSchema = z.object({
  name: z.string(),
  initialBalance: z.number(),
  currency: z.string(),
});
