import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article, ArticlesState } from "@/types/types";

const initialBookMarkedArticlesState: ArticlesState = {
    articles: [],
    loading: false,
    error: false,
}

export const bookMarkedArticlesSlice = createSlice({
    name: "bookmarkedArticles",
    initialState: initialBookMarkedArticlesState,
    reducers: {
        addBookmarkedArticleSuccess: (state, action: PayloadAction<Article>) => {
            console.log("book mark added")
            const article = action.payload;
            if (!state.articles.find((a) => a.url === article.url)) {
                state.articles.push(article);
            }
        },
        removeBookmarkedArticleSuccess: (state, action: PayloadAction<string>) => {
            console.log("book mark removed")
            state.articles = state.articles.filter((article) => article.url !== action.payload);
        },
    },
    // extraReducers: (builder) => {
    //     //TO DO
    // },
});

export const {
    addBookmarkedArticleSuccess,
    removeBookmarkedArticleSuccess,
} = bookMarkedArticlesSlice.actions;
