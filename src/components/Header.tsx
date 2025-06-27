import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-900">
            Daniel Kioko
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-900 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex space-x-4">
            <a href="https://github.com/dkkiooko" className="text-gray-600 hover:text-blue-900 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/kithekadankioko" className="text-gray-600 hover:text-blue-900 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:kithekadankioko@gmail.com" className="text-gray-600 hover:text-blue-900 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-gray-200">
              <a href="https://github.com/dkkiooko" className="text-gray-600 hover:text-blue-900 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/kithekadankioko" className="text-gray-600 hover:text-blue-900 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kithekadankioko@gmail.com" className="text-gray-600 hover:text-blue-900 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;