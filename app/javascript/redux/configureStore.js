import { configureStore } from '@reduxjs/toolkit';

import greetingSlice from './greeting/greeting';

export const store = configureStore({
  reducer: {
    greeting: greetingSlice,
  },
});
