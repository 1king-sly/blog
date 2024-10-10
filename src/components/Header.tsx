import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'News', path: '/news' },
    { name: 'Sports', path: '/sports' },
    { name: 'Business', path: '/business' },
    { name: 'Entertainment', path: '/entertainment' },
  ];

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Newspaper size={32} />
          <span className="text-xl font-bold">BlogApp</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-gray-300 transition duration-150 ease-in-out">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;