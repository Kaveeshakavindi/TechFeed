import { fetchArticles } from "@/services/dataService";
import { Article } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getArticles = createAsyncThunk<Article[], void>(
    "data/getArticles",
    async () => {
      return await fetchArticles(); 
    }
  );