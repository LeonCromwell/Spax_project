import * as authRequest from "../ultils/authRequest";

export const getUser = async (access_token: string) => {
  try {
    const response = await authRequest.get("/get_user", {
      headers: {
        "Content-Type": "application/json",
        "Access-Token": access_token,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const RefreshToken = async (refresh_token: string) => {
  try {
    const response = await authRequest.get("/refresh_token", {
      headers: {
        "Content-Type": "application/json",
        "Refresh-token": refresh_token,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
