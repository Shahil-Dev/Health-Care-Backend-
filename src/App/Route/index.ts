import { Router } from "express";
import { SpecialtyRoutes } from "../modules/Specialty/specialty.route";
import { PatientRoutes } from "../modules/Patient/patient.route";

const router = Router();

router.use("/specialty", SpecialtyRoutes);
router.use("/auth",PatientRoutes)
export const IndexRouter = router;
