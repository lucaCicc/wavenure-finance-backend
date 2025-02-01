import { NextFunction, Request, Response } from "express";

/*
 * Login
 *
 */
export const me = async (req: any, res: Response, next: NextFunction) => {
  console.log("iii");
  res.json(req.user);
};
