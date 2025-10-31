import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({ message: "O nome é obrigatório" })
    .trim()
    .min(2, "O nome deve ter pelo menos 2 caracteres")
    .max(100, "O nome deve ter no máximo 100 caracteres"),

  email: z.email("O email informado é inválido"),
  age: z
    .number({ message: "A idade deve ser um número" })
    .int({ message: "A idade deve ser um número inteiro" })
    .nonnegative({ message: "A idade deve ser positiva" })
    .optional(),
});
