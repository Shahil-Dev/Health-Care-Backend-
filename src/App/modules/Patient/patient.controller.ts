import { Request, Response } from "express";
import { CatchAsync } from "../../Shared/CatchAsync";
import { PatientService } from "./patient.service";
import { sendResponse } from "../../Shared/sendResponse";

const registrationPatient=CatchAsync(async(req:Request,res:Response)=>{
        const payload = req.body;
        const result = await PatientService.registrationPatient(payload);
        sendResponse(res, {
           httpStatusCode: 200,
            success: true,
            message: "Patient registered successfully",
            data: result,
        });
});



export const PatientController = {
    // Add controller methods here
    registrationPatient
};