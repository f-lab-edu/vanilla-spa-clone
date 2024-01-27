import request from "./axios";

export const getArticleList = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "data/mockArticleList.json",
    });
    const data = await response.data;

    return data;
  } catch (error) {
    console.error(error);
  }
};
