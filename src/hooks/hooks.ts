"use client"
import { fetchArticles, fetchSearchArticles } from "@/services/dataService";
import { useQuery } from "@tanstack/react-query";

//tanstack react query: https://tanstack.com/query/latest
export const useFetchAllEnglishArticles = () => {
    return useQuery({
        queryKey: ["articles"],
        queryFn: () => fetchArticles(), 
    })
} 
//fetch searched articles
export const useFetchAllSearchedArticles = (query: string) => {
    return useQuery({
        queryKey: ["articles", query],
        queryFn: () => fetchSearchArticles(query),
        enabled: !!query,
    })
}