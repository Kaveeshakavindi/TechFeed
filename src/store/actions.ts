import { Article } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addBookmarkedArticleSuccess, removeBookmarkedArticleSuccess } from "./reducers";

  export const addBookmarkedArticle = createAsyncThunk(
    "bookmarkedArticles/add",
    (article: Article, { dispatch }) => {
        dispatch(addBookmarkedArticleSuccess(article));
    }
);

export const removeBookmarkedArticle = createAsyncThunk(
    "bookmarkedArticles/remove",
    (url: string, { dispatch }) => {
        dispatch(removeBookmarkedArticleSuccess(url));
    }
);