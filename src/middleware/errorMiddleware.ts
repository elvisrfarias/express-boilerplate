import { AppError } from "../exceptions/AppError";
import { HttpStatus } from "../exceptions/httpStatus";
import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({ message: err.message });
  }

  res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .json({ message: "Internal server error" });
};
