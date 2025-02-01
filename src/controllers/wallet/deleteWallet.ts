import { NextFunction, Request, Response } from "express";

/**
 * Delete Wallet
 *
 */
export const deleteWallet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TO DO
  res.json({ resp: "OK" });
};
