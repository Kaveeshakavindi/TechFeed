"use client"
import { configureStore } from "@reduxjs/toolkit";
import { articlesSlice, searchArticleSlice } from "./reducers";
export const store = configureStore({
    reducer: {
        articles: articlesSlice.reducer,
        searchArticles: searchArticleSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;