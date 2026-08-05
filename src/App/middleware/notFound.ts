import { Request, Response } from "express";
import status from "http-status";

export const not_Found = (req: Request, res: Response) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: `your entire Route is ${req.originalUrl} not found`,
  });
};
