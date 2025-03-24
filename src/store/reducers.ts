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

const initialBookMarkedArticlesState: ArticlesState = {
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
    extraReducers: (builder) => {
        //TO DO
    },
});

export const {
    addBookmarkedArticleSuccess,
    removeBookmarkedArticleSuccess,
} = bookMarkedArticlesSlice.actions;
