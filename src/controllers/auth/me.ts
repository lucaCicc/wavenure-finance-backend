import { NextFunction, Request, Response } from "express";
/*
 * Login
 *
 */
export const me = async (req: Request, res: Response, next: NextFunction) => {
  res.json(req?.user);
};
