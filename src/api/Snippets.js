// src/api/snippets.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/snippets/';

export const fetchSnippets = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addSnippet = async (snippet) => {
    const response = await axios.post(API_URL, snippet);
    return response.data;
};