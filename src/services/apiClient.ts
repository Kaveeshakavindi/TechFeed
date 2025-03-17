"use client"
import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com,bbc.co.uk",
    timeout: 10000,
})

export default apiClient;