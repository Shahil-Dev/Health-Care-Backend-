import express from 'express';
import { PatientController } from './patient.controller';

const router = express.Router();

router.post('/register', PatientController.registrationPatient);    


export const PatientRoutes = router;
