import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article, ArticlesState } from "@/types/types";
import { getArticles, getSearchArticles } from "./actions";

const initialState: ArticlesState = {
    articles: [],
    loading: false,
    error: false,
}
const initialSearchState: ArticlesState = {
    articles: [],
    loading: false,
    error: false,
}
export const articlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getArticles.pending, (state) => {
            state.loading = true
        })
        .addCase(getArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.loading = false;
            state.articles = action.payload;
        })
        .addCase(getArticles.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            console.error("Error fetching articles:", action.error)
        })
    }
})

export const searchArticleSlice = createSlice({
    name: "searchArticles",
    initialState: initialSearchState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getSearchArticles.pending, (state) => {
            state.loading = true
        })
        .addCase(getSearchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.loading = false;
            state.articles = action.payload;
        })
        .addCase(getSearchArticles.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            console.error("Error fetching articles:", action.error)
        })
    }
})