import { z } from "zod";
import { userSchema } from "./user.schema";

export const updateUserSchema = userSchema.pick({
  name: true,
  email: true,
});

export type UpdateUserDto = z.infer<typeof updateUserSchema>;
