import { NextFunction, Request, Response } from "express";
import { prismaCLient } from "../..";
import { ErrorCodes } from "../../exceptions/http-execption";
import { UnauthorizedException } from "../../exceptions/unauthorized";
import { UpdateWalletSchema } from "../../schema/wallet";

/**
 * Update
 *
 */
export const updateWallet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validateData = UpdateWalletSchema.parse(req?.body);

  const userId = req?.user?.id;
  const walletId = +req.params.id;

  const { name, initialBalance, currency } = validateData;

  const wallet = await prismaCLient.wallet.findFirst({
    where: { id: walletId, userId },
  });

  if (!wallet) {
    throw new UnauthorizedException(
      `Cannot update this Wallet (id: ${walletId})`,
      ErrorCodes.UNAUTHORIZED
    );
  }

  const updateWallet = await prismaCLient.wallet.update({
    where: {
      id: walletId,
    },
    data: {
      name,
      initialBalance,
      currency,
    },
  });

  res.json({
    message: "Wallet updated successfuly",
    data: updateWallet,
  });
};
