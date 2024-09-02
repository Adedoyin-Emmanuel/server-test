import { NextFunction, Request, Response } from "express";
import { response } from "../utils";
import { INSUFFICIENT_PERMISSION } from "../constants/errors";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const useCheckRole = (_role: string) => {
  return (_req: Request, res: Response, _next: NextFunction) => {
    return response(res, 403, INSUFFICIENT_PERMISSION);
  };
};

export default useCheckRole;
