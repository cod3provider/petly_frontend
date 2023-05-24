import { createSlice } from '@reduxjs/toolkit';
import { getFavorite, addFavorite, removeFavorite } from './noticesOperations';

const initialState = {
  notices: [],
  loading: false,
  error: null,
  message: "",
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getFavorite.pending, store => {
        store.loading = true;
      })
      .addCase(getFavorite.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.notices = payload;
      })
      .addCase(getFavorite.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(addFavorite.pending, store => {
        store.loading = true;
      })
      .addCase(addFavorite.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.message = payload;
      })
      .addCase(addFavorite.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(removeFavorite.pending, store => {
        store.loading = true;
      })
      .addCase(removeFavorite.fulfilled, (store) => {
        store.loading = false;
      })
      .addCase(removeFavorite.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
  },
});

export const noticesReducer = noticesSlice.reducer;