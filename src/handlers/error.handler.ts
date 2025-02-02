import { NextFunction, Request, Response } from "express";
import { ErrorCodes, HttpExecption } from "../exceptions/http-execption";
import { InternalException } from "../exceptions/internal-exception";
import { ZodError, ZodType } from "zod";
import { BadRequestsException } from "../exceptions/bad-requests";

/**
 *
 *
 */
export const errorHandler = (method: Function) => {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      await method(req, res, next);
    } catch (error: any) {
      let execption: HttpExecption;

      if (error instanceof HttpExecption) {
        execption = error;
      } else {
        if (error instanceof ZodError) {
          execption = new BadRequestsException(
            "Unprocessable entity.",
            ErrorCodes.UNPROCESSABLE_ENTITY,
            error
          );
        } else {
          execption = new InternalException(
            "Something went wrong!",
            error,
            ErrorCodes.INCORRECT_PASSWORD
          );
        }
      }

      next(execption);
    }
  };
};
