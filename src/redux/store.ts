// redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer, // Add the auth reducer
  },
});

export default store;
