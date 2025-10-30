import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Product } from "../entities/Product";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "postgres",
  database: process.env.DB_NAME || "express_boilerplate",
  logging: process.env.NODE_ENV === "development",
  entities: [User, Product],
  // synchronize: true, // ⚠️ apenas para dev
});
