import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  //now counterReducer is available to entire App when we wrap App in Provider and have store as props
  reducer: {
    counter: counterReducer,
  },
});
