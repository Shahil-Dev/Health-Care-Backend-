import { auth } from "../../lib/auth";

interface IRegistrationPatient {
  name: string;
  email: string;
  password: string;
}
//registration patient service
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

interface ILoginPatient {
  email: string;
  password: string;
}

//login patient service
const loginPatient = async (payload: ILoginPatient) => {
  const { email, password } = payload;
  const Data = await auth.api.signInEmail({
    body: { email, password },
  });
  if (!Data) {
    throw new Error("Failed to login patient");
  }
  if (Data.user.status === "BLOCKED") {
    throw new Error("Your account is BLOCKED. Please contact support.");
  }
  if (Data.user.isDeleted || Data.user.status === "DELETED") {
    throw new Error("Your account is deleted. Please create a new account.");
  }
  return Data;
};

export const PatientService = {
  // Add service methods here
  registrationPatient,
  loginPatient,
};
