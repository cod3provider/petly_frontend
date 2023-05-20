import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-pet-backend-jfrs.onrender.com/',
});

export const userUpdate = createAsyncThunk(
  '/users/update',
  async (data, { rejectWithValue }) => {
    try {
      //   const { name, email, birthday, phone, city } = data;
      const response = await axios.patch('/users/update', data);
      // console.log(response);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.message);
    }
  }
);

export const userData = createAsyncThunk(
  '/users/current',
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get('/users/current');
      console.log(response);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.message);
    }
  }
);
