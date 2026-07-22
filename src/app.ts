import express, { Application, Request, Response } from "express";
import { prisma } from "./App/lib/prisma";

const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get("/", async (req: Request, res: Response) => {
  const specialty = await prisma.specialty.create({
    data: {
      title: "Geology",
    },
  });

  res.status(200).json({ message: "api working", specialty });
});

export default app;
