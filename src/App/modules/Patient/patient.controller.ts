import { Request, Response } from "express";
import { CatchAsync } from "../../Shared/CatchAsync";
import { PatientService } from "./patient.service";
import { sendResponse } from "../../Shared/sendResponse";
import  { status } from "http-status";
//registration patient controller
const registrationPatient = CatchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await PatientService.registrationPatient(payload);
  sendResponse(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Patient registered successfully",
    data: result,
  });
});

//login patient controller
const loginUser = CatchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await PatientService.loginPatient(payload);
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Patient logged in successfully",
    data: result,
  });
});

export const PatientController = {
  // Add controller methods here
  registrationPatient,
  loginUser,
};
