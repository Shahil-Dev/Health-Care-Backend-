import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";
import { CatchAsync } from "../../Shared/CatchAsync";

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
  return res.status(200).json({
    success: true,
    message: "Specialties retrieved successfully",
    data: result,
  });
});

const DeletedSpecialty = CatchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SpecialtyService.DeleteSpecialty(id as string);
  return res.status(200).json({
    success: true,
    message: "Specialty deleted successfully",
    data: result,
  });
});

export const SpecialtyController = {
  CreateSpecialty,
  GetSpecialties,
  DeletedSpecialty,
  // UpdateSpecialty,
};
