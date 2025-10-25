import { z } from "zod";
import { User } from "./User";
import {
  Entity,
  Column,
  ManyToOne,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

// Schema de validação com Zod
export const ProductSchema = z.object({
  name: z.string().min(2).max(100),
  price: z.number().positive(),
  description: z.string().max(500).optional(),
  userId: z.number().int().positive(),
});

export type ProductInput = z.infer<typeof ProductSchema>;

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("decimal")
  price!: number;

  @Column({ type: "text", nullable: true })
  description?: string;

  @ManyToOne(() => User, (user) => user.products)
  user!: User;

  @Column()
  userId!: number;

  @CreateDateColumn()
  createdAt!: Date;

  // Método para validar com Zod
  static validate(input: unknown): ProductInput {
    return ProductSchema.parse(input);
  }
}
