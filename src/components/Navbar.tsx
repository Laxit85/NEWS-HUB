import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Newspaper } from 'lucide-react';
import { categories } from '../data/newsData';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Newspaper className="w-8 h-8 text-blue-600" />
              <span className="text-2xl text-gray-900">NewsHub</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => 
                  `hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/about"
                className={({ isActive }) => 
                  `hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/contact"
                className={({ isActive }) => 
                  `hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
              >
                Contact
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center gap-6 py-3 overflow-x-auto">
            {categories.map((category) => (
              <NavLink
                key={category.slug}
                to={`/category/${category.slug}`}
                className={({ isActive }) => 
                  `whitespace-nowrap text-sm hover:text-blue-600 transition-colors ${
                    isActive ? 'text-blue-600' : 'text-gray-600'
                  }`
                }
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => 
                `block py-2 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => 
                `block py-2 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700'}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => 
                `block py-2 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700'}`
              }
            >
              Contact
            </NavLink>
            
            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Categories</div>
              {categories.map((category) => (
                <NavLink
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `block py-2 text-sm hover:text-blue-600 transition-colors ${
                      isActive ? 'text-blue-600' : 'text-gray-600'
                    }`
                  }
                >
                  {category.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
