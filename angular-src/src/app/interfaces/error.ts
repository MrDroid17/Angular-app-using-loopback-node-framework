export interface ErrorResponse {
  error?: Error;
}

export interface Error {
  name?: string;
  status?: number;
  message?: string;
}
