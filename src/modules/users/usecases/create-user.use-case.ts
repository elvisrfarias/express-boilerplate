import { User } from "../entities/user.entity";
import { createUserSchema } from "../dtos/create-user.dto";
import { UserRepository } from "../repositories/user.repository";
import { UnprocessableEntity } from "../../../exceptions/UnprocessableEntity";
import { BadRequest } from "../../../exceptions/BadRequest";

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: unknown): Promise<User> {
    const schema = createUserSchema.safeParse(input);

    if (!schema.success) {
      throw new UnprocessableEntity("Erro de validação", schema.error);
    }

    const data = schema.data;

    const userExists = await this.userRepository.findByEmail(data.email);
    if (userExists) {
      throw new BadRequest("Email já está em uso.");
    }

    const user = this.userRepository.create(data);
    return await this.userRepository.save(user);
  }
}
