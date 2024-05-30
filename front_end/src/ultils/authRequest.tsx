import axios from "axios";

interface getOptions {
  params?: object;
  headers?: object;
}

interface postOptions {
  headers?: object;
}

const request = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL,
});

export const get = async (url: string, options?: getOptions) => {
  const response = await request.get(url, options);
  return response.data;
};

export const post = async (
  url: string,
  data: object,
  options?: postOptions
) => {
  const response = await request.post(url, data, options);
  return response.data;
};
