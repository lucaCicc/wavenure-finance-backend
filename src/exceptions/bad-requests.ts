import { ErrorCodes, HttpExecption } from "./http-execption";

/**
 *
 */
export class BadRequestsException extends HttpExecption {
  constructor(message: string, errorCode: ErrorCodes, errors?: any) {
    super(message, errorCode, 400, errors);
  }
}
