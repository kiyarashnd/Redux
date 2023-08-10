import { useSelector, useDispatch } from 'react-redux';
import { log, selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

const PostsList = () => {
  //wiht selectAllPosts if the shape of the state ever changes we will just need to change it in the slice not in every component
  const posts = useSelector(selectAllPosts);

  console.log(posts); //posts is initailState array in postsSlice
  const dispatch = useDispatch();

  //for show states(that object contains blogs)
  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>

      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
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
