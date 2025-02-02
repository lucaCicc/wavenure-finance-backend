import { NextFunction, Request, Response } from "express";
import {
  CreateWalletSchema,
  UpdateWalletSchema,
} from "../schemes/wallet.schema";
import { WalletServices } from "../services/wallet";

/**
 * Create Wallet Controller
 *
 */
export const createWalletController = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  console.log("[Controller] => createWalletController");

  const validatedData = CreateWalletSchema.parse(req?.body);

  const wallet = await WalletServices.createWallet({
    data: validatedData,
    userId: req?.user?.id,
  });

  res.json({
    message: "Wallet created successfuly",
    data: wallet,
  });
};

/**
 * Delete Wallet Controller
 *
 */
export const deleteWalletController = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  console.log("[Controller] => deleteWalletController");

  // TO DO
  WalletServices.deleteWallet();
};

/**
 * Get Wallet By Id Controller
 *
 */
export const getWalletByIdController = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  console.log("[Controller] => getWalletByIdController");

  const wallet = await WalletServices.getWalletById({
    walletId: +req.params.id,
  });

  res.json({
    message: "Wallet found",
    data: wallet,
  });
};

/**
 * Wallet List Controller
 *
 */
export const getWalletListController = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  console.log("[Controller] => getWalletListController");

  const wallet = await WalletServices.getWalletList({
    userId: req?.user?.id,
  });

  res.json({
    message: "Wallet List",
    data: wallet,
  });
};

/**
 * Update Controller
 *
 */
export const updateWalletController = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  console.log("[Controller] => updateWalletController");

  const validateData = UpdateWalletSchema.parse(req?.body);

  const updatedWallet = await WalletServices.updateWallet({
    data: validateData,
    userId: req?.user?.id,
    walletId: +req.params.id,
  });

  res.json({
    message: "Wallet updated successfuly",
    data: updatedWallet,
  });
};
