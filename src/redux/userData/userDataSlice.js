import { createSlice } from '@reduxjs/toolkit';
import { userData, userUpdate } from './userDataOperations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userData.pending, store => {
        store.loading = true;
      })
      .addCase(userData.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(userData.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(userUpdate.pending, handlePending)
      .addCase(userUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          items => items.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
        console.log('contact has been successfully updated');
      })
      .addCase(userUpdate.rejected, handleRejected);
  },
});

export const userReducer = userSlice.reducer;
