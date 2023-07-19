export interface ResponseDTO<T = unknown> {
  code: string;
  message: string;
  data?: T
}
