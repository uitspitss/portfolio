import { configureStore } from '@reduxjs/toolkit';

import { githubSlice } from '@/features/github';

const store = configureStore({
  reducer: {
    github: githubSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
