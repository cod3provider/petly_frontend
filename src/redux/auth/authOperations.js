import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import localStorage from 'redux-persist/es/storage';
// import { getCurrentUser } from 'redux/user/userOperations';

// axios.defaults.baseURL = 'https://your-pet-backend-jfrs.onrender.com/';
axios.defaults.baseURL = 'http://localhost:8989';

axios.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      // нужно получить рефреш токен из стейта
      const refreshToken = await localStorage.getItem('refreshToken');
      try {
        const { data } = await axios.post('users/refresh', { refreshToken });

        console.log('data: ', data);

        token.set(data.accesToken);

        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('accesToken', data.accesToken);
        //тут обновить стейт с новыми токенами
        return axios(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const token = {
  set(accesToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accesToken}`;
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
      console.log(error.response.data);
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'users/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      console.log(data);
      token.set(data.accesToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      return data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.accesToken;
      token.set(value);
      await axios.post('users/logout');
      token.unset();
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    const value = await localStorage.getItem('accesToken');
    if (value) {
      token.set(value);
    }
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.message);
    }
  }
);

// export const refreshThunk = createAsyncThunk(
//   'users/refresh',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('users/', credentials);
//       token.set(data.data.user.token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
