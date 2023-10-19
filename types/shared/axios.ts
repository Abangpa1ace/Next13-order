import { AxiosError, AxiosResponse } from "axios";

interface ApiResponseData<T> {
  message: string;
  data: T;
}

type ApiErrorData = {
  statusCode: number;
  message: string;
  error: string;
}

export type ApiResponse<T> = AxiosResponse<ApiResponseData<T>>;

export type ApiError = AxiosError<ApiErrorData>;