import * as authRequest from "../ultils/authRequest";

export const login = async (email: string, hashpassword: string) => {
  try {
    const response = await authRequest.post("/login", { email, hashpassword });
    return response;
  } catch (error) {
    throw error;
  }
};

export const register = async (
  email: string,
  name: string,
  hashpassword: string
) => {
  try {
    const response = await authRequest.post("/register", {
      email,
      name,
      hashpassword,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const accuracy = async (data: object) => {
  try {
    const response = await authRequest.post("/vertify", data);
    return response;
  } catch (error) {
    throw error;
  }
};
