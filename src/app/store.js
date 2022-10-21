import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { apiSlice } from './api/apiSlice';



export const store = configureStore({
  reducer: {
    
  },
});
