import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/PatientsSlice/authSlice'
import thunkMiddleware from 'redux-thunk';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        // Add other reducers here
      },
      middleware: [thunkMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
