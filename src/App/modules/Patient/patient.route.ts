import express from "express";
import { PatientController } from "./patient.controller";

const router = express.Router();

router.post("/register", PatientController.registrationPatient);
router.post("/login", PatientController.loginUser);

export const PatientRoutes = router;
