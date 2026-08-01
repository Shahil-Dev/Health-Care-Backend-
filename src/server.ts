import app from "./app";
import { envVars } from "./Config/env";

const machina = () => {
  try {
    app.listen(envVars.PORT, () => {
      console.log(`Server is running on http://localhost:${envVars.PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

machina();
