import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    underConstruction: (state) => ({
      ...state,
      status: 'Under construction',
    }),
  },
});

export const { underConstruction } = categorySlice.actions;
export default categorySlice.reducer;
