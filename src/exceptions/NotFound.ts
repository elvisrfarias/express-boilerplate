import { AppError } from "./AppError";
import { HttpStatus } from "./httpStatus";

export class NotFound extends AppError {
  constructor(message: string) {
    super(message, HttpStatus.NotFound);
  }
}
