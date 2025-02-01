import { compareSync } from "bcrypt";
import { prismaCLient } from "../..";
import { ErrorCodes } from "../../exceptions/http-execption";
import { NotFoundException } from "../../exceptions/not-found";
import { BadRequestsException } from "../../exceptions/bad-requests";
import { TokenPayload } from "../../types/auth";
import { JWT_SECRET } from "../../secrets";
import * as jwt from "jsonwebtoken";

interface LoginArgs {
  password: string;
  email: string;
}

/**
 *
 *
 */
export const login = async ({ email, password }: LoginArgs) => {
  let user = await prismaCLient.user.findFirst({ where: { email } });

  if (!user) {
    throw new NotFoundException("User not found", ErrorCodes.USER_NOT_FOUND);
  }

  if (!compareSync(password, user.password)) {
    throw new BadRequestsException(
      "Incorrect password",
      ErrorCodes.INCORRECT_PASSWORD
    );
  }

  const tokenPayload: TokenPayload = {
    userId: user.id,
  };

  const token = jwt.sign(tokenPayload, JWT_SECRET);

  return {
    user,
    token,
  };
};
