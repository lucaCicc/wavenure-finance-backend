import { ErrorCodes, HttpExecption } from "./http-execption";

/**
 *
 */
export class BadRequestsException extends HttpExecption {
  constructor(message: string, errorCode: ErrorCodes) {
    super(message, errorCode, 400, null);
  }
}
