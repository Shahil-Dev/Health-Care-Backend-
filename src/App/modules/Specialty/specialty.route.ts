import express from "express";
import { SpecialtyController } from "./specialty.controller";

const router = express.Router();
router.post("/", SpecialtyController.CreateSpecialty);
export const SpecialtyRoutes = router;
