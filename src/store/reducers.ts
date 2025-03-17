import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article, ArticlesState } from "@/types/types";
import { getArticles } from "./actions";

const initialState: ArticlesState = {
    articles: [],
    loading: false,
}
const articlesSlice = createSlice({
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
            console.error("Error fetching articles:", action.error)
        })
    }
})

export default articlesSlice.reducer