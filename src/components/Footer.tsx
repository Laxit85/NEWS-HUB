import { Link } from 'react-router-dom';
import { Newspaper, Instagram, Linkedin, Globe } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { categories } from '../data/newsData';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="w-8 h-8 text-blue-500" />
              <span className="text-2xl text-white">NewsHub</span>
            </div>

            <p className="text-sm mb-4">
              Your trusted source for the latest news and stories from around the world.
              Stay informed with comprehensive coverage across all major categories.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/thewebcraft25/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/laxit-jangid-8588a3257/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Website */}
              <a
                href="https://laxit-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>

              {/* WhatsApp (Font Awesome) */}
              <a
                href="https://wa.me/917878429752"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 4).map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/category/${category.slug}`}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Categories */}
          <div>
            <h3 className="text-white mb-4">More News</h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(4).map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/category/${category.slug}`}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} NewsHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
