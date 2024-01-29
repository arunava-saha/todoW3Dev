import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import todoRoutes from "./routes/routes";
import "dotenv/config";

// Initialize Express app
const app: Application = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
const mongoURI = <string>process.env.DB;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err: Error) => console.error(err));

// Define routes
app.get("/", (req: Request, res: Response) => {
  res.send("This is the todo server");
});

// Use the ToDo routes
app.use("/todos", todoRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on  http://localhost:${PORT}`)
);
