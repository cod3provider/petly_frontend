import { createAction, createSlice } from '@reduxjs/toolkit';
import {
  login,
  logout,
  register,
  getCurrentUser,
  updateAvatar,
} from './authOperations';

const authInitialState = {
  user: {},
  image: '',
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isNewUser: false,
};

function registerFulfilled(state) {
  state.isNewUser = true;
  state.isLoading = false;
  state.error = null;
}

function loginFulfilled(state, { payload }) {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
}

function logOutFulfilled(state) {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.user = {};
  state.token = null;
}

// function getUserFulfilled(state, { payload }) {
//   state.user = payload;
//   state.isLoading = false;
//   state.isLoggedIn = true;
//   state.error = null;
// }
//       .addCase(getCurrentUser.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(getCurrentUser.fulfilled, getUserFulfilled)
//       .addCase(getCurrentUser.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })

export const addAccessToken = createAction('auth/token');

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, registerFulfilled)
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, loginFulfilled)
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, logOutFulfilled)
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addAccessToken, (state, { payload }) => {
        state.token = payload;
      })

      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(getCurrentUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateAvatar.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateAvatar.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.image = payload.image;
        state.error = null;
      })
      .addCase(updateAvatar.rejected, state => {
        state.isLoading = false;
      });
  },
  reducers: {
    setIsNewUser: (state, { payload }) => {
      state.isNewUser = payload;
    },
  },
});

export const { setIsNewUser } =  authSlice.actions;
export const authReducer = authSlice.reducer;
