import { NextFunction, Request, Response } from "express";
import { prismaCLient } from "../..";
import { CreateWalletSchema } from "../../schema/wallet";

/**
 * Create Wallet
 *
 */
export const createWallet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validateData = CreateWalletSchema.parse(req?.body);
  const user = req?.user;

  const wallet = await prismaCLient.wallet.create({
    data: {
      ...validateData,
      userId: user.id,
    },
  });

  res.json({
    message: "Wallet created successfuly",
    data: wallet,
  });
};
