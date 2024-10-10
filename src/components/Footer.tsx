import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'News', path: '/news' },
    { name: 'Sports', path: '/sports' },
    { name: 'Business', path: '/business' },
    { name: 'Entertainment', path: '/entertainment' },
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com' },
    { icon: Twitter, url: 'https://twitter.com' },
    { icon: Instagram, url: 'https://instagram.com' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-gray-300 transition duration-150 ease-in-out">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: info@blogapp.com</p>
          <p>Address: 123 Blog Street, City, Country</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-150 ease-in-out">
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Email</h3>
          <form className="space-y-2">
            <input type="email" placeholder="Your email" className="w-full p-2 rounded text-gray-800" required />
            <textarea placeholder="Your message" className="w-full p-2 rounded text-gray-800" rows={3} required></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center">
              <Send size={18} className="mr-2" />
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;