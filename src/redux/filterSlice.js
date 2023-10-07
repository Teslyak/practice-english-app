import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'words',
  initialState: '',
  reducers: {
    filterChange(state, action) {},
  },
});

export const { filterChange } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
