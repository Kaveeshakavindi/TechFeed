import { Article } from "@/types/types";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const fetchArticles = async(): Promise<Article[]> => {
    console.log("all api called")
    const response = await fetch(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com,bbc.co.uk&language=en&apiKey=${apiKey}`);
    const data = await response.json();
    return data.articles;
}

export const fetchSearchArticles = async (query: string) : Promise<Article[]>=>{
    console.log("query:", query)
    console.log("search api called")
    const response = await fetch(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com,bbc.co.uk&language=en&apiKey=${apiKey}&q=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.articles;
}