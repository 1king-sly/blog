import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainNews from '../components/MainNews';
import LatestBlogs from '../components/LatestBlogs';
import EmptyBlogContainer from '../components/EmptyBlogContainer';
import Skeleton from '../components/Skeleton';
import { Blog } from '../types';
import { fetchCategoryNews } from '../api';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchCategoryNews(category || '');
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching category news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Skeleton type="main" />
          </div>
          <div className="hidden lg:block">
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} type="list" />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} type="card" />
          ))}
        </div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return <EmptyBlogContainer message={`No blogs found in the ${category} category.`} />;
  }

  const mainBlog = blogs[0];
  const otherBlogs = blogs.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">{category} News</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MainNews blog={mainBlog} />
        </div>
        <div className="hidden lg:block">
          <LatestBlogs blogs={blogs.slice(0, 5)} />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Other {category} News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherBlogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.content}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <img src={blog.author.image} alt={blog.author.name} className="w-8 h-8 rounded-full mr-2" />
                  <span>{blog.author.name}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;