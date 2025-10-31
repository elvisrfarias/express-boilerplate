export class AppError extends Error {
  public readonly status: number;
  public readonly issues?: any[];

  constructor(message: string, status: number, issues?: any[]) {
    super(message);
    this.status = status;
    this.issues = issues;
  }
}
