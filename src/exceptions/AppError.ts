export abstract class AppError extends Error {
  public readonly status: number;

  constructor(message: string, status: number) {
    super(message || "Internal server error");
    this.status = status || 500;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
