import React from 'react'; 
import Blog from '../components/BlogListing/Blog';
import Sidebar from '../components/BlogListing/Sidebar';
const BlogPage = () => {
    return (
      <div className="blog-page">
        <div className="blog-content">
            <Blog />
        </div>
        <div className="Sidebar">
            <Sidebar />
        </div>
        </div>
    );
  };
  export default BlogPage;