import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://your-pet-backend-jfrs.onrender.com/';

// {
//   "_id": "645d579dfedbaba1c5473ef2",
//   "name": "Some name",
//   "email": "some-mail@mail.com",
//   "birthday": "2011-10-05T14:48:00.000Z",
//   "phone": "+380123456789",
//   "city": "Melitopol",
//   "avatarUrl": "//www.gravatar.com/avatar/eac541bd8d2d8b41da78fbdee0b1cf24",
//   "verify": false,
//   "pets": [
//     "645d4191c7c53eb02fac410c",
//     "645d4191c7c53eb02fac410c"
//   ],
//   "notices": [
//     "645d4191c7c53eb02fac410c",
//     "645d4191c7c53eb02fac410c"
//   ],
//   "favorite": [
//     "645d4191c7c53eb02fac410c",
//     "645d4191c7c53eb02fac410c"
//   ]
// }

export const userUpdate = createAsyncThunk(
  '/users/update',
  async (data, { rejectWithValue }) => {
    try {
      //   const { name, email, birthday, phone, city } = data;
      const response = await axios.patch('/users/update', data);
      console.log(response);
      console.log(response.data);
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
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.message);
    }
  }
);
