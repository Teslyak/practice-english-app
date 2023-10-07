import { createSlice } from '@reduxjs/toolkit';

const wordSlice = createSlice({
  name: 'words',
  initialState: [],
  reducers: {
    addWord(state, action) {},
    deleteWord(state, action) {},
    changeWord(state, action) {},
  },
});

export const { addWord, deleteWord, changeWord } = wordSlice.actions;
export const wordsReducer = wordSlice.reducer;
