import { fetchArticles, fetchSearchArticles } from "@/services/dataService";
import { Article } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addBookmarkedArticleSuccess, removeBookmarkedArticleSuccess } from "./reducers";

export const getArticles = createAsyncThunk<Article[], void>(
    "data/getArticles",
    async () => {
      return await fetchArticles(); 
    }
  );

  export const getSearchArticles = createAsyncThunk<Article[], string>(
    "data/getSearchArticles",
    async(query) => {
      return await fetchSearchArticles(query);
    }
  )

  export const addBookmarkedArticle = createAsyncThunk(
    "bookmarkedArticles/add",
    (article: Article, { getState, dispatch }) => {
        dispatch(addBookmarkedArticleSuccess(article));
    }
);

export const removeBookmarkedArticle = createAsyncThunk(
    "bookmarkedArticles/remove",
    (url: string, { getState, dispatch }) => {
        dispatch(removeBookmarkedArticleSuccess(url));
    }
);