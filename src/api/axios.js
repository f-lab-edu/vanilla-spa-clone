import axios from "axios";

const request = (options) => {
  const { method = "GET", url, headers = {}, data } = options;

  return axios({
    method,
    url,
    headers,
    data,
  });
};

export default request;
