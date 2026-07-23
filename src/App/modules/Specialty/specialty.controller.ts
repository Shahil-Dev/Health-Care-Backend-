import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

//Create a new specialty
const CreateSpecialty = async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await SpecialtyService.CreateSpecialty(payload);
  res.status(201).json({
    success: true,
    message: "Specialty created successfully",
    data: result,
  });
};

//Get all specialties
const GetSpecialties = async (req: Request, res: Response) => {
  try {
    const result = await SpecialtyService.GetSpecialties();
    res.status(200).json({
      success: true,
      message: "Specialties fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching specialties",
      error: error,
    });
  }
};

//Deleted specialty
const DeletedSpecialty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await SpecialtyService.DeleteSpecialty(id as string);
    res.status(200).json({
      success: true,
      message: "Specialty deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting specialty",
      error: error,
    });
  }
};

//Update a specialty
// const UpdateSpecialty = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const result = await SpecialtyService.UpdateSpecialty(id as string);
//     res.status(200).json({
//       success: true,
//       message: "Specialty updated successfully",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error updating specialty",
//       error: error,
//     });
//   }
// };

export const SpecialtyController = {
  CreateSpecialty,
  GetSpecialties,
  DeletedSpecialty,
  // UpdateSpecialty,
};
