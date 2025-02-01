import { NextFunction, Response, Request } from "express";
import { ErrorCodes, HttpExecption } from "../exceptions/http-execption";
import { UnauthorizedException } from "../exceptions/unauthorized";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { prismaCLient } from "..";

export const authMiddleware = async (
  error: HttpExecption,
  req: any,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      const payload = jwt.verify(token, JWT_SECRET) as any;

      let user = await prismaCLient.user.findFirst({
        where: { id: payload.userId },
      });

      if (!user) {
        next(new UnauthorizedException("Unauthorize", ErrorCodes.UNAUTHORIZED));
      }

      // To attach the user to the current request
      req.user = user;
    } catch (error) {}
  }

  next(new UnauthorizedException("Unauthorize", ErrorCodes.UNAUTHORIZED));
};
