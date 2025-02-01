import { Router } from "express";
import { errorHandler } from "../handlers/error-handler";

import { createWallet } from "../controllers/wallet/createWallet";
import { updateWallet } from "../controllers/wallet/updateWallet";
import { deleteWallet } from "../controllers/wallet/deleteWallet";
import { listWallets } from "../controllers/wallet/listWallets";
import { getWalletById } from "../controllers/wallet/getWalletById";
import authMiddleware from "../middelwares/auth";

const walletRouters: Router = Router();

walletRouters.post("/", [authMiddleware], errorHandler(createWallet));

walletRouters.put("/:id", [authMiddleware], errorHandler(updateWallet));

walletRouters.delete("/:id", [authMiddleware], errorHandler(deleteWallet));

walletRouters.get("/", [authMiddleware], errorHandler(listWallets));

walletRouters.get("/:id", [authMiddleware], errorHandler(getWalletById));

export default walletRouters;
