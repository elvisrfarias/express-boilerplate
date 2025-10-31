import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../../../db/data-source";

export class UserRepository {
  private dataBaseRepository: Repository<User>;

  constructor() {
    this.dataBaseRepository = AppDataSource.getRepository(User);
  }

  create(data: Partial<User>): User {
    return this.dataBaseRepository.create(data);
  }

  save(user: User): Promise<User> {
    return this.dataBaseRepository.save(user);
  }

  findByEmail(email: string): Promise<User | null> {
    return this.dataBaseRepository.findOne({ where: { email } });
  }

  findAll(): Promise<User[]> {
    return this.dataBaseRepository.find();
  }

  findById(id: number): Promise<User | null> {
    return this.dataBaseRepository.findOne({ where: { id } });
  }
}
