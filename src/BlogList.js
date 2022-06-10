import React from 'react';

const BlogList = ({ blogData }) => {
    return (
        <div className="blog-list">
            {blogData.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;