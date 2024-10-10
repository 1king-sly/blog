import React from 'react';
import { MessageSquare, PlusCircle } from 'lucide-react';

const EmptyChatContainer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <MessageSquare className="mx-auto text-blue-500 mb-4" size={64} />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">No Chats Yet</h2>
        <p className="text-gray-600 mb-6">
          Start a conversation and connect with others. Your chats will appear here.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center justify-center mx-auto">
          <PlusCircle size={20} className="mr-2" />
          Start a New Chat
        </button>
      </div>
    </div>
  );
};

export default EmptyChatContainer;