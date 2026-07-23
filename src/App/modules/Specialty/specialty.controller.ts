import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const CreateSpecialty = async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await SpecialtyService.CreateSpecialty(payload);
  res.status(201).json({
    success: true,
    message: "Specialty created successfully",
    data: result,
  });
};

export const SpecialtyController = {
  CreateSpecialty,
};
