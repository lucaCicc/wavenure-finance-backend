import { NextFunction, Request, Response } from "express";

import { LoginSchema, SignUpSchema } from "../schemes/users.schema";
import { AuthServices } from "../services/auth";

/**
 * Login
 *
 */
export const loginController = async (
  req: any,
  res: Response,
  _: NextFunction
) => {
  const validateData = LoginSchema.parse(req.body);
  const authInfo = await AuthServices.login(validateData);

  res.json(authInfo);
};

/**
 * Signup
 *
 */
export const signupController = async (
  req: any,
  res: Response,
  _: NextFunction
) => {
  const validateData = SignUpSchema.parse(req.body);
  const authInfo = await AuthServices.signup(validateData);

  res.json(authInfo);
};
