import { auth } from "../../lib/auth";

interface IRegistrationPatient {
  name: string;
  email: string;
  password: string;
}

const registrationPatient = async (payload: IRegistrationPatient) => {
  const { name, email, password } = payload;
  const Data = await auth.api.signUpEmail({
    body: { name, email, password },
  });
  if (!Data) {
    throw new Error("Failed to register patient");
  }
  return Data;
};

export const PatientService = {
  // Add service methods here
  registrationPatient,
};
