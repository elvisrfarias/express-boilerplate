import { AppError } from "./AppError";
import { HttpStatus } from "./httpStatus";

export class InternalServerError extends AppError {
  constructor(message: string) {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
