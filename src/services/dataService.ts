import { Article } from "@/types/types";
import apiClient from "./apiClient";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const fetchArticles = async(): Promise<Article[]> => {
    const response = await apiClient.get(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com,bbc.co.uk&language=en&apiKey=${apiKey}`);
    return response.data.articles;
}