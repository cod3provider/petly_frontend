import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getCurrentUser } from 'redux/user/userOperations';
import { toast } from 'react-toast';

axios.defaults.baseURL = 'https://your-pet-backend-jfrs.onrender.com/';

export const token = {
  set(accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'users/register',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      await axios.post('users/register', credentials);
      const { email, password } = credentials;
      await dispatch(
        login({
          email,
          password,
        })
      );
      console.log(credentials);
    } catch (error) {
      toast.error('Email is invalid or it is used');
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'users/login',
  async (credentials, { rejectWithValue,   }) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      console.log(data);
      token.set(data.accessToken);
      // dispatch(getCurrentUser());
      return data;
    } catch (error) {
      console.log(error.response.data);
      toast.error('Email or password is wrong');
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.token;
      token.set(value);
      await axios.post('users/logout');
      token.unset();
    } catch (error) {
      toast.error(error.response.data);
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.accessToken;
      if (value === null) {
        return rejectWithValue('Unable to fetch user');
      }
      token.set(value);
      const { data } = await axios.get('users/current');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

//
export const refreshToken = createAsyncThunk(
  'users/refresh',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('users/refresh', credentials);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      token.unset();
      return rejectWithValue(error.message);
    }
  }
);