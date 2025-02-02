import { NextFunction, Response, Request } from "express";
import { HttpExecption } from "../exceptions/http-execption";

export const errorMiddleware = (
  error: HttpExecption,
  req: any,
  res: Response,
  next: NextFunction
) => {
  res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
    errors: error.erorrs,
  });
};
