"use client"
import { configureStore } from "@reduxjs/toolkit";
import { articlesSlice, bookMarkedArticlesSlice, searchArticleSlice } from "./reducers";
export const store = configureStore({
    reducer: {
        articles: articlesSlice.reducer,
        searchArticles: searchArticleSlice.reducer,
        bookmarkedArticles: bookMarkedArticlesSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;