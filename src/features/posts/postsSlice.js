import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",
  },
  {
    id: '2',
    title: 'Slices...',
    content: 'The more I say slice, the more I want pizza.',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      //action.payload is every thing that we send as argument when useDispatch
      state.push(action.payload);
    },
    log(state, action) {
      console.log(action.payload);
    },
  },
});

//state.post because name of createSlice is 'post'
export const selectAllPosts = (state) => state.posts;
export const { log, postAdded } = postsSlice.actions;

export default postsSlice.reducer;
