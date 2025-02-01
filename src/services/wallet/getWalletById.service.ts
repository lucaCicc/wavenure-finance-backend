import { prismaCLient } from "../..";
import { NotFoundException } from "../../exceptions/not-found";
import { ErrorCodes } from "../../exceptions/http-execption";

interface Args {
  walletId: number;
}

/**
 * Get Wallet By Id
 *
 */
export const getWalletById = async ({ walletId }: Args) => {
  try {
    const wallet = await prismaCLient.wallet.findFirstOrThrow({
      where: { id: walletId },
    });

    return wallet;
  } catch (error) {
    throw new NotFoundException(
      "Wallet not found",
      ErrorCodes.WALLER_NOT_FOUND
    );
  }
};
