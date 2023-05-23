import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPetsData = createAsyncThunk(
  '/pets',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get('/pets');
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.message);
    }
  }
);

export const addPetsData = createAsyncThunk(
  '/addPets',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/pets', data);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.message);
    }
  }
);

export const deletePetsData = createAsyncThunk(
  '/deletePets',
  async (data, { rejectWithValue }) => {
    try {
      await axios.delete(`/pets/${data}`);
      return { data };
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.message);
    }
  }
);
