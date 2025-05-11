import { Article } from "@/types/types";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

//define service using base URL and expected endpoints
export const fetchArticlesApi = createApi({
    reducerPath: 'allArticles',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://newsapi.org/v2/everything'
    }),
    endpoints: (build) => ({
        getAllArticles: build.query<Article[], unknown> ({
            query: () => `?domains=techcrunch.com,thenextweb.com,bbc.co.uk&language=en&apiKey=${apiKey}`,
            transformResponse: (response: { articles: Article[] }) => response.articles
        }),
        getSearchArticles: build.query<Article[], unknown>({
            query: (query: string) => `?domains=techcrunch.com,thenextweb.com,bbc.co.uk&language=en&apiKey=${apiKey}&q=${encodeURIComponent(query)}`,
            transformResponse: (response: { articles: Article[] }) => response.articles
        })
    })
})
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ 
      baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000/api', 
      credentials: 'include' //important for http only cookie
    }),

    endpoints: (build) => ({
      login: build.mutation<{ token: string }, { email: string; password: string }>({
        query: (credentials) => ({
          url: '/auth/login',
          method: 'POST',
          body: credentials
        })
      }),
      signup: build.mutation<{ message: string }, { email: string; password: string }>({
        query: (user) => ({
          url: '/signup',
          method: 'POST',
          body: user
        })
      })
    })
  })
  

export const { useGetAllArticlesQuery, useGetSearchArticlesQuery } = fetchArticlesApi
export const{ useLoginMutation, useSignupMutation } = authApi