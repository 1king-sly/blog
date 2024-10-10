export interface Author {
  id: string;
  name: string;
  image: string;
}

export interface Comment {
  id: string;
  content: string;
  author: Author;
  createdAt: string;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  author: Author;
  createdAt: string;
  comments: Comment[];
}