import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Express server...");
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

await dbConnect();
