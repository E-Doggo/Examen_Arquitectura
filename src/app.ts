import express from "express";
import dotenv from "dotenv";
import intentRouter from "./routes/IntentGenerationRoute";

dotenv.config();

const port = 3000; // Your desired port

const app = express();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use(express.json());
app.use("/api/intent", intentRouter);

export default app;
