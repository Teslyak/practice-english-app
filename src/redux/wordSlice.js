import { createSlice } from '@reduxjs/toolkit';

const wordSlice = createSlice({
  name: 'words',
  initialState: [],
  reducers: {
    addWord(state, action) {
      state.push(action.payload);
    },
    deleteWord(state, action) {
      const delWordId = state.findIndex(el => el.id === action.payload);
      state.splice(delWordId, 1);
    },
    changeWord(state, action) {
      const index = state.findIndex(el => el.id === action.payload.id);
      state.splice(index, 1, action.payload);
    },
  },
});

export const { addWord, deleteWord, changeWord } = wordSlice.actions;
export const wordsReducer = wordSlice.reducer;
