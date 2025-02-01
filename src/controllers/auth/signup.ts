import { NextFunction, Request, Response } from "express";
import { prismaCLient } from "../..";
import { hashSync } from "bcrypt";

import { BadRequestsException } from "../../exceptions/bad-requests";
import { ErrorCodes } from "../../exceptions/http-execption";
import { SignUpSchema } from "../../schema/users";

/**

/**
 * Signup
 *
 */
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validateData = SignUpSchema.parse(req.body);

  const { email, password, name } = validateData;

  let user = await prismaCLient.user.findFirst({ where: { email } });

  if (user) {
    throw new BadRequestsException(
      "User already exists",
      ErrorCodes.USER_ALREADY_EXISTS
    );
  }

  user = await prismaCLient.user.create({
    data: {
      name,
      password: hashSync(password, 10),
      email,
    },
  });

  res.json(user);
};
