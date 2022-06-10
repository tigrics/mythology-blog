import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {


  /*
    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }*/

  const { data: blogs, pending, error } = useFetch('http://localhost:8000/blogs');

  // send data using conditionals
  // if ok it will render  

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {pending && <div>Loading...</div>}
      {blogs && <BlogList blogData={blogs} />}
    </div>
  );
}

export default Home;