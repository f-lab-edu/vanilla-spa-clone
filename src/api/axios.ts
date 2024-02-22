import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface RequestOptions extends AxiosRequestConfig {
  method?: string;
  url: string;
  headers?: Record<string, string>;
  data?: Record<string, string>;
}

const request = (options: RequestOptions): Promise<AxiosResponse> => {
  const { method = "GET", url, headers = {}, data } = options;

  return axios({
    method,
    url,
    headers,
    data,
  });
};

export default request;
