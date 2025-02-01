/**
 *
 */
export class HttpExecption extends Error {
  message: string;
  errorCode: ErrorCodes;
  statusCode: number;
  erorrs: any;

  constructor(
    message: string,
    errorCode: ErrorCodes,
    statusCode: number,
    erorrs: any
  ) {
    super(message);

    this.erorrs = erorrs;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.message = message;
  }
}

export enum ErrorCodes {
  USER_NOT_FOUND = 1001,
  USER_ALREADY_EXISTS = 1002,
  INCORRECT_PASSWORD = 1003,
  UNPROCESSABLE_ENTITY = 2001,
  INTERNAL_EXCEPTION = 3001,
  UNAUTHORIZED = 4001,
  WALLER_NOT_FOUND = 5001,
}
