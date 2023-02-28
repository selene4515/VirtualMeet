import axios from "axios";

//데이터 숨김 필요
// const secretKey: string =
//   "Basic dGVzdF9za19PeUwwcVo0RzFWT29reXlKbGFvVm9XYjJNUVlnOjo="; //fluentt
// const secretKey: string =
//   "Basic dGVzdF9za19MZXg2QkpHUU9WRDRZR3luYkdrVlc0dzJ6TmJnOg=="; //test

export const tossapi = axios.create({
  withCredentials: true,
  baseURL: "https://api.tosspayments.com/v1/payments/confirm",
  headers: {
    Authorization: "Basic dGVzdF9za19PeUwwcVo0RzFWT29reXlKbGFvVm9XYjJNUVlnOjo=",
    "Content-Type": "application/json",
  },
});

const errorHandler = (error: any) => {
  const statusCode = error.response?.status;

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

tossapi.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
