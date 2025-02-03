import { prismaCLient } from "../..";
import { ErrorCodes } from "../../exceptions/http-execption";
import { UnauthorizedException } from "../../exceptions/unauthorized";
import { UpdateWalletSchema } from "../../schemes/wallet.schema";
import { z } from "zod";

type WalletData = z.infer<typeof UpdateWalletSchema>;

interface Args {
  data: WalletData;
  userId: number;
  walletId: number;
}

/**
 * Update
 *
 */
export const updateWallet = async ({ data, userId, walletId }: Args) => {
  const updatedWallet = await prismaCLient.wallet.updateMany({
    where: {
      id: walletId,
      userId,
    },
    data: data,
  });

  if (updatedWallet.count === 0) {
    throw new UnauthorizedException(
      `Cannot update this Wallet (id: ${walletId})`,
      ErrorCodes.UNPROCESSABLE_ENTITY
    );
  }

  return updatedWallet;
};
