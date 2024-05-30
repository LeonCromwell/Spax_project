import axios from "axios";

interface getOptions {
  params?: object;
  headers?: object;
}

interface postOptions {
  headers?: object;
}

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const get = async (path: string, options: getOptions) => {
  const response = await request.get(path, options);
  return response.data;
};

const post = async (path: string, data: object, postOptions: postOptions) => {
  const response = await request.post(path, data, postOptions);
  return response.data;
};

export { request, get, post };
