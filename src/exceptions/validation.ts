import { ErrorCodes, HttpExecption } from "./http-execption";

/**
 *
 */
export class UnprocessableEntity extends HttpExecption {
  constructor(error: any, message: string, errorCode: ErrorCodes) {
    super(message, errorCode, 422, error);
  }
}
