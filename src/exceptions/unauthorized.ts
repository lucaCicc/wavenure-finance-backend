import { ErrorCodes, HttpExecption } from "./http-execption";

/**
 *
 */
export class UnauthorizedException extends HttpExecption {
  constructor(message: string, errorCode: ErrorCodes) {
    super(message, errorCode, 403, null);
  }
}
