import { Blog, Comment } from './types';

// Simulated API calls
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchMainNews = async (): Promise<Blog> => {
  await delay(1000);
  // Simulated main news data
  return {
    id: '1',
    title: 'Breaking News: Major Scientific Discovery',
    content: 'Scientists have made a groundbreaking discovery that could revolutionizeour understanding of the universe...',
    image: 'https://source.unsplash.com/random/800x600?science',
    category: 'News',
    author: {
      id: 'a1',
      name: 'Dr. Jane Smith',
      image: 'https://source.unsplash.com/random/100x100?portrait'
    },
    createdAt: new Date().toISOString(),
    comments: []
  };
};

export const fetchCategoryNews = async (category: string): Promise<Blog[]> => {
  await delay(1000);
  // Simulated category news data
  return Array(6).fill(null).map((_, index) => ({
    id: `${category.toLowerCase()}-${index + 1}`,
    title: `${category} News ${index + 1}`,
    content: `This is a sample content for ${category} news article ${index + 1}...`,
    image: `https://source.unsplash.com/random/800x600?${category.toLowerCase()}`,
    category,
    author: {
      id: `a${index + 2}`,
      name: `Author ${index + 2}`,
      image: `https://source.unsplash.com/random/100x100?portrait${index + 2}`
    },
    createdAt: new Date().toISOString(),
    comments: []
  }));
};

export const fetchBlogById = async (id: string): Promise<Blog> => {
  await delay(1000);
  // Simulated blog data
  return {
    id,
    title: 'Sample Blog Post',
    content: '<p>This is a sample blog post content. It can contain <strong>HTML</strong> formatting.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.</p>',
    image: 'https://source.unsplash.com/random/800x600?blog',
    category: 'News',
    author: {
      id: 'a1',
      name: 'John Doe',
      image: 'https://source.unsplash.com/random/100x100?portrait'
    },
    createdAt: new Date().toISOString(),
    comments: [
      {
        id: 'c1',
        content: 'Great article!',
        author: {
          id: 'a2',
          name: 'Jane Smith',
          image: 'https://source.unsplash.com/random/100x100?portrait2'
        },
        createdAt: new Date().toISOString()
      }
    ]
  };
};

export const fetchLatestBlogs = async (category: string, limit: number): Promise<Blog[]> => {
  await delay(1000);
  // Simulated latest blogs data
  return Array(limit).fill(null).map((_, index) => ({
    id: `latest-${index + 1}`,
    title: `Latest ${category} News ${index + 1}`,
    content: `This is a sample content for the latest ${category} news article ${index + 1}...`,
    image: `https://source.unsplash.com/random/800x600?${category.toLowerCase()}${index + 1}`,
    category,
    author: {
      id: `a${index + 2}`,
      name: `Author ${index + 2}`,
      image: `https://source.unsplash.com/random/100x100?portrait${index + 2}`
    },
    createdAt: new Date().toISOString(),
    comments: []
  }));
};

export const addComment = async (blogId: string, content: string): Promise<Comment> => {
  await delay(500);
  // Simulated comment creation
  return {
    id: `c${Date.now()}`,
    content,
    author: {
      id: 'current-user',
      name: 'Current User',
      image: 'https://source.unsplash.com/random/100x100?portrait-user'
    },
    createdAt: new Date().toISOString()
  };
};