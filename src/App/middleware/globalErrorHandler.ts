/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { envVars } from "../../Config/env";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (envVars.NODE_ENV === "development") {
    console.error("Error Form global error handler", err);
  }

  const statusCode = status.INTERNAL_SERVER_ERROR;
  const message = "Internal Server Error";
  res.status(err.status || statusCode).json({
    success: false,
    message: err.message || message,
    error: err.message,
  });
};
