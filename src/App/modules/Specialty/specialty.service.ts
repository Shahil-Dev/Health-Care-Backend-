import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

//Create a new specialty
const CreateSpecialty = async (payload: Specialty): Promise<Specialty> => {
  const specialty = await prisma.specialty.create({
    data: payload,
  });
  return specialty;
};

//Get all specialties
const GetSpecialties = async (): Promise<Specialty[]> => {
  const specialties = await prisma.specialty.findMany();
  return specialties;
};

// Update a specialty
const UpdateSpecialty = async (
  id: string,
  payload: Partial<Specialty>,
): Promise<Specialty> => {
  const result = await prisma.specialty.update({
    where: { id },
    data: payload,
  });
  return result;
};

//Delete a specialty
const DeleteSpecialty = async (id: string): Promise<Specialty> => {
  const result = await prisma.specialty.delete({
    where: { id },
  });
  return result;
};

export const SpecialtyService = {
  CreateSpecialty,
  GetSpecialties,
  UpdateSpecialty,
  DeleteSpecialty,
};
