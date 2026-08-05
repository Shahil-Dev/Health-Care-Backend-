import express, { Application, Request, Response } from "express";
import { IndexRouter } from "./App/Route";
import { globalErrorHandler } from "./App/middleware/globalErrorHandler";
import { not_Found } from "./App/middleware/notFound";

const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/v1", IndexRouter);

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express!");
});

app.use(globalErrorHandler);
app.use(not_Found);
export default app;
