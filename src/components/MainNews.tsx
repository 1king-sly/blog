import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { Blog } from '../types';

interface MainNewsProps {
  blog: Blog;
}

const MainNews: React.FC<MainNewsProps> = ({ blog }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <Link to={`/${blog.category}/${blog.id}`} className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">
          {blog.title}
        </Link>
        <p className="mt-2 text-gray-600 line-clamp-3">{blog.content}</p>
        <div className="mt-4 flex items-center">
          <img src={blog.author.image} alt={blog.author.name} className="w-10 h-10 rounded-full mr-4" />
          <div>
            <p className="font-semibold text-gray-800">{blog.author.name}</p>
            <p className="text-sm text-gray-500 flex items-center">
              <Clock size={14} className="mr-1" />
              {new Date(blog.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;