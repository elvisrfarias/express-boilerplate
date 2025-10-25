import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { HttpMethods } from "./infra/httpMethods";
import { errorMiddleware } from "./middleware/errorMiddleware";
import { BadRequest } from "./exceptions/BadRequest";

dotenv.config();

const app = express();
const PORT = 3000;
const BASE_URL = process.env.BASE_URL;

app.use(
  cors({
    origin: "https://meusite.com",
    methods: [HttpMethods.GET, HttpMethods.POST, HttpMethods.PUT],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  throw new BadRequest("Deu ruim");

  res.status(200).json({
    message: "Servidor está rodando",
  });
});

app.use(errorMiddleware);

app.listen("3000", () => {
  console.info(`🚀 Servidor rodando: ${BASE_URL}`);
});

export default app;
