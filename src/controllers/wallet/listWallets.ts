import { NextFunction, Request, Response } from "express";
import { prismaCLient } from "../..";

/**
 * List
 *
 */
export const listWallets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req?.user?.id;
  const skip = req?.query?.skip ?? 0;

  const count = await prismaCLient.wallet.count();

  const wallets = await prismaCLient.wallet.findMany({
    where: { userId: userId },
    skip: +skip,
    take: 5,
  });

  res.json({
    message: "Wallet List",
    data: {
      count,
      wallets,
    },
  });
};
