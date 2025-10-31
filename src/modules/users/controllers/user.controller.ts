import { Request, Response } from "express";
import { BadRequest } from "../../../exceptions/BadRequest";
import { HttpStatus } from "../../../exceptions/httpStatus";
import { UserRepository } from "../repositories/user.repository";
import { CreateUserUseCase } from "../usecases/create-user.use-case";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const userRepository = new UserRepository();
      const createUserUseCase = new CreateUserUseCase(userRepository);

      const user = await createUserUseCase.execute(req.body);

      return res.status(HttpStatus.CREATED).json({
        output: user,
      });
    } catch (error: any) {
      throw new BadRequest(error.message);
    }
  }
}
