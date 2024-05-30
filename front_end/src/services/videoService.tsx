import * as httpRequest from "../ultils/httpRequest";

export const getVideoList = async () => {
  try {
    const response = await httpRequest.get("/", {});
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const getVideoDetail = async (id: string) => {
  try {
    const response = await httpRequest.get(`/${id}`, {});
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const getUrlVideo = async (id: string, resolution: string) => {
  try {
    const response = await httpRequest.get(
      `/getvideo?id=${id}&resolution=${resolution}`,
      {}
    );
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const uploadVideo = async (file: File, title: string) => {
  try {
    const formData = new FormData();
    formData.append("video", file);
    formData.append("title", title);
    formData.append("author", "admin");
    const response = await httpRequest.post("/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    console.log("error", error);
  }
};
