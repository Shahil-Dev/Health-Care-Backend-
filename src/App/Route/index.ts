import { Router } from "express";
import { SpecialtyRoutes } from "../modules/Specialty/specialty.route";

const router = Router();

router.use("/specialty", SpecialtyRoutes);

export const IndexRouter = router;
