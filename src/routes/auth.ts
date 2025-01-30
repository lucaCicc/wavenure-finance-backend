import { Router } from "express";
import { loginController } from "../controllers/auth";

const authRouters: Router = Router();

authRouters.get("/login", loginController);

export default authRouters;
