import { Router } from "express";
import authRouters from "./auth.route";
import walletRouters from "./wallets.route";
import budgetRouters from "./budget.route";

const rootRouter: Router = Router();

rootRouter.use("/auth", authRouters);
rootRouter.use("/wallets", walletRouters);
rootRouter.use("/budgets", budgetRouters);

export default rootRouter;
