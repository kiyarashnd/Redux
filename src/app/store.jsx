import { configureStore } from '@reduxjs/toolkit';
// import counterReducer2 from '../features/counter/counterSlice';
//counterReducer in an optional name (named options)
import postReducer from '../features/posts/postsSlice';
import usersReducers from '../features/users/usersSlice';

export const store = configureStore({
  //now counterReducer is available to entire App when we wrap App in Provider and have store as <props></props>
  reducer: {
    // counter: counterReducer2,
    posts: postReducer,
    users: usersReducers,
  },
});
