import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from '../auth/authOperations';

axios.defaults.baseURL = 'https://your-pet-backend-jfrs.onrender.com/';

export const addFavorite = createAsyncThunk(
    '/addFavorite',
    async (credentials, { rejectWithValue, getState }) => {
        try {
            const value = getState().auth.token;
            if (value) {
                token.set(value);
            }
            const { data } = await axios.patch(`/notices/my/favorite/${credentials}`);
            return data;
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.message);
        }
    }
);

export const removeFavorite = createAsyncThunk(
    '/removeFavorite',
    async (credentials, { rejectWithValue, getState }) => {
        try {
            const value = getState().auth.token;
            if (value) {
                token.set(value);
            }
            await axios.delete(`/notices/my/favorite/${credentials}`);
            return;
        } catch (error) {
            // console.log(error.response.data);
            return rejectWithValue(error.message);
        }
    }
);

export const getFavorite = createAsyncThunk(
    '/getFavorite',
    async (_, { rejectWithValue, getState }) => {
        try {
            const value = getState().auth.token;
            if (value) {
                token.set(value);
            }
            const { data } = await axios.get(`/notices/my/favorite`);
            return data;
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.message);
        }
    }
);

