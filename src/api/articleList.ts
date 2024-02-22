import axios, { AxiosResponse } from "axios";
import request from "./axios";
import { Article } from "@/types/types";

export const getTechArticleList = async (): Promise<Article[]> => {
  try {
    const response: AxiosResponse = await request({
      method: "GET",
      url: "data/mockTechArticleList.json",
    });

    const data: Article[] = response.data.results;

    return data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      console.error(error.response?.data.message);
    }

    throw error;
  }
};

export const getDesignArticleList = async (): Promise<Article[]> => {
  try {
    const response: AxiosResponse = await request({
      method: "GET",
      url: "data/mockDesignArticleList.json",
    });

    const data: Article[] = await response.data.results;

    return data;
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      console.error(error.response?.data.message);
    }

    throw error;
  }
};
