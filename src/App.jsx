// import Counter from './features/counter/Counter';
import PostsList from './features/posts/PostList';
import AddPostForm from './features/posts/AddPostForm';
import './App.css';

function App() {
  return (
    <main className='App'>
      {/* <Counter /> */}
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
