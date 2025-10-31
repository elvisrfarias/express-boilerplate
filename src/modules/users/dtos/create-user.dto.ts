import { z } from "zod";
import { userSchema } from "./user.schema";

export const createUserSchema = userSchema;

export type CreateUserDto = z.infer<typeof createUserSchema>;
