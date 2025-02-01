import { prismaCLient } from "../..";
import { ErrorCodes } from "../../exceptions/http-execption";
import { BadRequestsException } from "../../exceptions/bad-requests";
import { hashSync } from "bcrypt";

interface SignupArgs {
  password: string;
  email: string;
  name: string;
}

/**
 *
 *
 */
export const signup = async ({ email, password, name }: SignupArgs) => {
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

  return user;
};
