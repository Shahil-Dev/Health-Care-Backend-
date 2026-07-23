import express from "express";
import { SpecialtyController } from "./specialty.controller";

const router = express.Router();
router.post("/", SpecialtyController.CreateSpecialty);
router.get("/", SpecialtyController.GetSpecialties);
router.delete("/:id", SpecialtyController.DeletedSpecialty);
// router.put("/:id", SpecialtyController.UpdateSpecialty);

export const SpecialtyRoutes = router;
