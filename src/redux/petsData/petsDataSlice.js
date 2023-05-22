import { createSlice } from '@reduxjs/toolkit';
import { getPetsData, addPetsData, deletePetsData } from './petsDataOperations';

const initialState = {
  user: null,
  pets: null,
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

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getPetsData.pending, store => {
        store.loading = true;
      })
      .addCase(getPetsData.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.user = payload.user;
        store.pets = payload.pets;
      })
      .addCase(getPetsData.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(deletePetsData.pending, store => {
        store.loading = true;
      })
      .addCase(deletePetsData.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.pets = store.pets.filter(item => item.id !== payload.id);
      })
      .addCase(deletePetsData.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export const petsReducer = petsSlice.reducer;
