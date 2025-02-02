import { NextFunction, Response, Request } from "express";
import { ErrorCodes } from "../exceptions/http-execption";
import { UnauthorizedException } from "../exceptions/unauthorized";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { prismaCLient } from "..";
import { TokenPayload } from "../../types/auth";

const authMiddleware = async (req: any, _: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token)
    return next(
      new UnauthorizedException("Unauthorize", ErrorCodes.UNAUTHORIZED)
    );

  try {
    const payload = jwt.verify(token, JWT_SECRET) as TokenPayload;

    let user = await prismaCLient.user.findFirst({
      where: { id: payload.userId },
    });

    if (!user) {
      return next(
        new UnauthorizedException("Unauthorize", ErrorCodes.UNAUTHORIZED)
      );
    }

    // To attach the user to the current request
    req.user = user;
    next();
  } catch (error) {
    next(new UnauthorizedException("Unauthorize", ErrorCodes.UNAUTHORIZED));
  }
};

export default authMiddleware;
