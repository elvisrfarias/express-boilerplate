import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { HttpStatus } from "./exceptions/httpStatus";
import { errorMiddleware } from "./middleware/errorMiddleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const BASE_URL = process.env.BASE_URL || "";

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(HttpStatus.ACCEPTED).json({
    message: "Server is running",
  });
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.info(`🚀 Running on route: ${BASE_URL}`);
});

export default app;
