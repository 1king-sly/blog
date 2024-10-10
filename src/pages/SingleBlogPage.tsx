import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LatestBlogs from '../components/LatestBlogs';
import CommentSection from '../components/CommentSection';
import Skeleton from '../components/Skeleton';
import { Blog, Comment } from '../types';
import { fetchBlogById, fetchLatestBlogs, addComment } from '../api';

const SingleBlogPage: React.FC = () => {
  const { category, blogId } = useParams<{ category: string; blogId: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [latestBlogs, setLatestBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [blogData, latestBlogsData] = await Promise.all([
          fetchBlogById(blogId || ''),
          fetchLatestBlogs(category || '', 5)
        ]);
        setBlog(blogData);
        setLatestBlogs(latestBlogsData);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, blogId]);

  const handleAddComment = async (content: string) => {
    if (blog) {
      try {
        const newComment = await addComment(blog.id, content);
        setBlog({
          ...blog,
          comments: [...blog.comments, newComment]
        });
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Skeleton type="main" />
            <div className="mt-8 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-4 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} type="list" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
          <div className="flex items-center mb-6">
            <img src={blog.author.image} alt={blog.author.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-semibold text-gray-800">{blog.author.name}</p>
              <p className="text-sm text-gray-500">{new Date(blog.createdAt).toLocaleString()}</p>
            </div>
          </div>
          <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          <CommentSection comments={blog.comments} onAddComment={handleAddComment} />
        </div>
        <div className="hidden lg:block">
          <LatestBlogs blogs={latestBlogs} />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;