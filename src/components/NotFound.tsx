import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/" className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            <Home size={18} className="mr-2" />
            Go Home
          </Link>
          <Link to="/search" className="flex items-center justify-center bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300">
            <Search size={18} className="mr-2" />
            Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;