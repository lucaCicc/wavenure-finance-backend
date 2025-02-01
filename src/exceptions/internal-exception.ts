import { HttpExecption } from "./http-execption";

/**
 *
 */
export class InternalException extends HttpExecption {
  constructor(message: string, errors: any, errorCode: number) {
    super(message, errorCode, 500, errors);
  }
}
