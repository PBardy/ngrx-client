export interface IApiResponse<T> {
  data: T;
  message?: string;
}

export type A<T> = IApiResponse<T>;
