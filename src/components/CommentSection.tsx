import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Comment } from '../types';

interface CommentSectionProps {
  comments: Comment[];
  onAddComment: (comment: string) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Comments</h3>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-2 border rounded-lg resize-none"
          rows={3}
        ></textarea>
        <button type="submit" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          <Send size={18} className="mr-2" />
          Post Comment
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <img src={comment.author.image} alt={comment.author.name} className="w-8 h-8 rounded-full mr-2" />
              <span className="font-semibold">{comment.author.name}</span>
              <span className="text-sm text-gray-500 ml-2">
                {new Date(comment.createdAt).toLocaleString()}
              </span>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;