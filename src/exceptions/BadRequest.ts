import { AppError } from "./AppError";
import { HttpStatus } from "./httpStatus";

export class BadRequest extends AppError {
  constructor(message: string) {
    super(message, HttpStatus.BadRequest);
  }
}
