import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from "react-toastify"
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
            toast.error(error.response.data);
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
            toast.error(error.message);
            return rejectWithValue(error.message);
        }
    }
);

export const getNoticesByPrivateCategory = createAsyncThunk(
    '/getNoticesByPrivateCategory',
    async (credentials, { rejectWithValue, getState }) => {
        try {
            const value = getState().auth.token;
            if (value) {
                token.set(value);
            }
            const response = await axios.get(`/notices/my/${credentials.category}`, {});
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteNotice = createAsyncThunk(
    '/deleteNotice',
    async (credentials, { rejectWithValue, getState }) => {
        try {
            const value = getState().auth.token;
            if (value) {
                token.set(value);
            }
            const response = await axios.delete(`/notices/${credentials}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

