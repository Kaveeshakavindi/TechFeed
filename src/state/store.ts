"use client"
import { configureStore } from "@reduxjs/toolkit";
import {  bookMarkedArticlesSlice } from "./reducers";
import { authApi, fetchArticlesApi } from "@/services/dataService";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
    reducer: {
        bookmarkedArticles: bookMarkedArticlesSlice.reducer,
        [fetchArticlesApi.reducerPath]: fetchArticlesApi.reducer,
        [authApi.reducerPath] : authApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
    .concat(fetchArticlesApi.middleware)
    .concat(authApi.middleware)
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;