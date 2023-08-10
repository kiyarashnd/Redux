import { useSelector, useDispatch } from 'react-redux';
import { log, selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { useState } from 'react';

const PostsList = () => {
  //wiht selectAllPosts if the shape of the state ever changes we will just need to change it in the slice not in every component
  const posts = useSelector(selectAllPosts);
  const [isHover, setIsHover] = useState(false);

  //for reverse order of posts
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  console.log(posts); //posts is initailState array in postsSlice
  const dispatch = useDispatch();

  //for show states(that object contains blogs)
  const renderedPosts = orderedPosts.map((post) => (
    <article
      key={post.id}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>

      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      {isHover && <ReactionButtons post={post} />}
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
