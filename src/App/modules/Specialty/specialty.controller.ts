import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";
import { CatchAsync } from "../../Shared/CatchAsync";
import { sendResponse } from "../../Shared/sendResponse";
import status from "http-status";

//Create a new specialty
const CreateSpecialty = CatchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await SpecialtyService.CreateSpecialty(payload);
  return res.status(200).json({
    success: true,
    message: "Specialty created successfully",
    data: result,
  });
});

//Get all specialties
const GetSpecialties = CatchAsync(async (req: Request, res: Response) => {
  const result = await SpecialtyService.GetSpecialties();
  return sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "SuccessFully get all data",
    data: result,
  });
});

//update SpecialtyController
const UpdateSpecialty = CatchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await SpecialtyService.UpdateSpecialty(id as string, payload);
  return sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "specialty updated successfully",
    data: result,
  });
});

//delete specialties
const DeletedSpecialty = CatchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SpecialtyService.DeleteSpecialty(id as string);
  return sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Specialty deleted successfully",
    data: result,
  });
});

export const SpecialtyController = {
  CreateSpecialty,
  GetSpecialties,
  DeletedSpecialty,
  UpdateSpecialty,
};
