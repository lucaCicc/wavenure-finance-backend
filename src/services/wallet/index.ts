import { createWallet } from "./createWallet.service";
import { deleteWallet } from "./deleteWallet.service";
import { getWalletById } from "./getWalletById.service";
import { getWalletList } from "./getWalletList.service";
import { updateWallet } from "./updateWallet.service";

export const WalletServices = {
  createWallet,
  deleteWallet,
  getWalletById,
  getWalletList,
  updateWallet,
};
