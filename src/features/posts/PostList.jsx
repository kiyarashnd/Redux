import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import { log } from './postsSlice';

const PostsList = () => {
  //wiht selectAllPosts if the shape of the state ever changes we will just need to change it in the slice not in every component.s
  const posts = useSelector(selectAllPosts);

  console.log(posts); //posts is initailState array in postsSlice
  const dispatch = useDispatch();

  //   const orderedPosts = posts
  //     .slice()
  //     .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
      <button onClick={() => dispatch(log('hiiii'))}>Click here</button>
    </section>
  );
};

export default PostsList;
