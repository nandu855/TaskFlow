import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import taskRoutes from "./routes/task.routes";

import authRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());
app.use("/api/tasks", taskRoutes);
app.get("/", (req, res) => {
  res.send("🚀 TaskFlow API Running");
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
  });
});

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});