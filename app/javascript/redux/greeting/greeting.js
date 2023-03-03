import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GETGREETING = 'hello-rails-react/GET_GREETING';

const BASE_URL = 'http://localhost:3000/messages';

export const getGreeting = createAsyncThunk(
  GETGREETING,
  async () => {
    const response = await fetch(BASE_URL);
    const item = await response.json();
    return (item);
  },
);

const initialState = {
  message: 'Error Message'
} 

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: {
    [getGreeting.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.message = action.payload;
    },
  },
});

export const { pushedGreeting } = greetingSlice.actions;
export default greetingSlice.reducer;
