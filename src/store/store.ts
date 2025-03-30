"use client"
import { configureStore } from "@reduxjs/toolkit";
import {  bookMarkedArticlesSlice } from "./reducers";
import { fetchArticlesApi } from "@/services/dataService";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
    reducer: {
        bookmarkedArticles: bookMarkedArticlesSlice.reducer,
        [fetchArticlesApi.reducerPath]: fetchArticlesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(fetchArticlesApi.middleware)
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;