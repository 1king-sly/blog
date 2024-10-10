import React from 'react';
import { Newspaper, PlusCircle } from 'lucide-react';

interface EmptyCategoryProps {
  category: string;
}

const EmptyCategory: React.FC<EmptyCategoryProps> = ({ category }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-8 my-8 text-center">
      <Newspaper className="text-gray-300 mb-4" size={64} />
      <h2 className="text-2xl font-bold text-gray-700 mb-2">No {category} Posts Yet</h2>
      <p className="text-gray-500 mb-6 max-w-md">
        It looks like this category is waiting for some amazing content. Be the first to share your thoughts!
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center">
        <PlusCircle size={20} className="mr-2" />
        Create a New Post
      </button>
    </div>
  );
};

export default EmptyCategory;