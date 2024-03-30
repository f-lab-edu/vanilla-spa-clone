import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface RequestOptions extends AxiosRequestConfig {
  method?: string;
  url: string;
  headers?: Record<string, string>;
  data?: Record<string, string>;
}

const request = async <T>(
  options: RequestOptions
): Promise<AxiosResponse<T>> => {
  const { method = "GET", url, headers = {}, data } = options;

  try {
    const response = await axios({
      method,
      url,
      headers,
      data,
    });
    return response;
  } catch (error) {
    throw new Error("Request Error");
  }
};

export default request;
