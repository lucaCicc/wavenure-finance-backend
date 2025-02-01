import { Router } from "express";
import { signup } from "../controllers/auth/signup";
import { login } from "../controllers/auth/login";
import { errorHandler } from "../handlers/error-handler";
import authMiddleware from "../middelwares/auth";
import { me } from "../controllers/auth/me";

const authRouters: Router = Router();

authRouters.post("/signup", errorHandler(signup));
authRouters.post("/login", errorHandler(login));
authRouters.get("/me", authMiddleware, me);

export default authRouters;
