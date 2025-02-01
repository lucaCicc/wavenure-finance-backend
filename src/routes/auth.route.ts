import { Router } from "express";
import { errorHandler } from "../handlers/error.handler";
import {
  loginController,
  signupController,
} from "../controllers/auth.controller";

const authRouters: Router = Router();

authRouters.post("/signup", errorHandler(signupController));
authRouters.post("/login", errorHandler(loginController));

export default authRouters;
