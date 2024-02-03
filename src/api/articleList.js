import request from "./axios";

export const getTechArticleList = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "data/mockTechArticleList.json",
    });
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getDesignArticleList = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "data/mockDesignArticleList.json",
    });
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
