import { NextFunction, Request, Response } from "express";
import { prismaCLient } from "../..";
import { NotFoundException } from "../../exceptions/not-found";
import { ErrorCodes } from "../../exceptions/http-execption";

/**
 * Get Wallet By Id
 *
 */
export const getWalletById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const walletId = +req.params.id;

  try {
    const wallet = await prismaCLient.wallet.findFirstOrThrow({
      where: { id: walletId },
    });

    res.json({
      message: "Wallet found",
      data: wallet,
    });
  } catch (error) {
    throw new NotFoundException(
      "Wallet not found",
      ErrorCodes.WALLER_NOT_FOUND
    );
  }
};
