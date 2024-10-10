import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { Blog } from '../types';

interface LatestBlogsProps {
  blogs: Blog[];
}

const LatestBlogs: React.FC<LatestBlogsProps> = ({ blogs }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Latest Blogs</h2>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex items-center space-x-4">
            <img src={blog.image} alt={blog.title} className="w-20 h-20 object-cover rounded" />
            <div>
              <Link to={`/${blog.category}/${blog.id}`} className="font-semibold text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">
                {blog.title}
              </Link>
              <p className="text-sm text-gray-500 flex items-center mt-1">
                <Clock size={14} className="mr-1" />
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;