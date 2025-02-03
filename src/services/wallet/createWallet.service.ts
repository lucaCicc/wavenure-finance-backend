import { prismaCLient } from "../..";
import { CreateWalletSchema } from "../../schemes/wallet.schema";
import { z } from "zod";

type WalletData = z.infer<typeof CreateWalletSchema>;

interface Args {
  data: WalletData;
  userId: number;
}

/**
 * Create Wallet
 *
 */
export const createWallet = async ({ data, userId }: Args) => {
  const wallet = await prismaCLient.wallet.create({
    data: {
      ...data,
      currentBalance: data.initialBalance,
      userId,
    },
  });

  return wallet;
};
