import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Product } from "../entities/Product";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "meubanco",
  username: "postgres",
  password: "password",
  entities: [Product, User],
  migrations: ["src/migrations/*.ts"],
  synchronize: true,
  logging: false,
});

(async () => {
  try {
    await AppDataSource.initialize();
    console.info("Data Source has been initialized!");
  } catch (error) {
    console.error("Error during Data Source initialization:", error);
  }
})();
