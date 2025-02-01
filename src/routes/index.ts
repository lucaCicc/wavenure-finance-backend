import { Router } from "express";
import authRouters from "./auth";
import walletRouters from "./wallets";

const rootRouter: Router = Router();

rootRouter.use("/auth", authRouters);
rootRouter.use("/wallets", walletRouters);

export default rootRouter;
