import { AxiosResponse } from "axios";
import request from "./axios";
import { Article } from "@/types/types";

export const getTechArticleList = async (): Promise<Article[]> => {
  const response: AxiosResponse = await request({
    method: "GET",
    url: "data/mockTechArticleList.json",
  });

  const data: Article[] = response.data.results;

  return data;
};

export const getDesignArticleList = async (): Promise<Article[]> => {
  const response: AxiosResponse = await request({
    method: "GET",
    url: "data/mockDesignArticleList.json",
  });

  const data: Article[] = response.data.results;

  return data;
};
