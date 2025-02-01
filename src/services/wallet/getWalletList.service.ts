import { prismaCLient } from "../..";

interface Args {
  userId: number;
}

/**
 * Wallet List
 *
 */
export const getWalletList = async ({ userId }: Args) => {
  const count = await prismaCLient.wallet.count();

  const wallets = await prismaCLient.wallet.findMany({
    where: { userId: userId },
  });

  return {
    count,
    wallets,
  };
};
