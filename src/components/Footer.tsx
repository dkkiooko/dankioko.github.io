import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-gray-400">
            Made with <Heart size={16} className="text-red-500" fill="currentColor" /> by Daniel Kioko
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2025 Daniel Kioko. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;