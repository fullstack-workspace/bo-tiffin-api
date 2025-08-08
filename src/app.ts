import express, { Application } from "express";
import bookRoutes from "./routes/bookRoutes";

const app: Application = express();

app.use(express.json());

app.use("/api/books", bookRoutes);

export default app;