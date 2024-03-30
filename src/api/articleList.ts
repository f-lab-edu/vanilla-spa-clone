import request from "./axios";
import { Article } from "@/types/types";

interface ResponseData<T> {
  results: T;
}

export const getTechArticleList = async (): Promise<Article[]> => {
  const response = await request<ResponseData<Article[]>>({
    method: "GET",
    url: "data/mockTechArticleList.json",
  });

  const data: Article[] = response.data.results;

  return data;
};

export const getDesignArticleList = async (): Promise<Article[]> => {
  const response = await request<ResponseData<Article[]>>({
    method: "GET",
    url: "data/mockDesignArticleList.json",
  });

  const data: Article[] = response.data.results;

  return data;
};
