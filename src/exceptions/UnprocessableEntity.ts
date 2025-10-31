import { ZodError } from "zod";
import { AppError } from "./AppError";
import { HttpStatus } from "./httpStatus";

interface Issue {
  field: string;
  message: string;
}

export class UnprocessableEntity extends AppError {
  issues: Issue[];

  constructor(message: string, error: ZodError) {
    const issues = error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));

    super(message, HttpStatus.UNPROCESSABLE_ENTITY);
    this.issues = issues;
  }
}
