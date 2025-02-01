import { HttpExecption } from "./http-execption";

/**
 *
 */
export class NotFoundException extends HttpExecption {
  constructor(message: string, errorCode: number) {
    super(message, errorCode, 404, null);
  }
}
