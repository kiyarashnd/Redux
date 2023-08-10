import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(), //toISOString convert to a timestamp string
  },
  {
    id: '2',
    title: 'Slices...',
    content: 'The more I say slice, the more I want pizza.',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      //action.payload is every thing that we send as argument when useDispatch
      // state.push(action.payload);
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
  //state must be first paramter and action must be second parameter
  log(state, action) {
    console.log(action.payload);
  },
});

//state.post because name of createSlice is 'post'
export const selectAllPosts = (state) => state.posts;
export const { log, postAdded } = postsSlice.actions;

export default postsSlice.reducer;
