import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Index,
} from "typeorm";
import { z } from "zod";
import { Product } from "./Product";

// Schema de validação com Zod
export const UserSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email(),
  age: z.number().int().positive().optional(),
});

export type UserInput = z.infer<typeof UserSchema>;

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100 })
  name!: string;

  @Column({ type: "varchar", length: 255, unique: true })
  @Index("IDX_USER_EMAIL", { unique: true })
  email!: string;

  @Column({ type: "integer", nullable: true })
  age?: number;

  @CreateDateColumn({ type: "timestamptz" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  updatedAt!: Date;

  @OneToMany(() => Product, (product) => product.user)
  products!: Product[];

  // Método para validar com Zod
  static validate(input: unknown): UserInput {
    return UserSchema.parse(input);
  }

  // Método para validação parcial (update)
  static validatePartial(input: unknown): Partial<UserInput> {
    return UserSchema.partial().parse(input);
  }
}
