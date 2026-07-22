import app from "./app";

const machina = () => {
  try {
    app.listen(5000, () => {
      console.log(`Server is running on http://localhost:5000`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

machina();
