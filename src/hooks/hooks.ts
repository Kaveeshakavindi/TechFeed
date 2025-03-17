"use client"
import { fetchArticles } from "@/services/dataService";
import { useQuery } from "@tanstack/react-query";

//tanstack react query: https://tanstack.com/query/latest
export const useFetchAllEnglishArticles = () => {
    return useQuery({
        queryKey: ["articles"],
        queryFn: () => fetchArticles(), 
    })
} 