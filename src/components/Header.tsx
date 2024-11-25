import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center">
            <img 
              src="https://i0.wp.com/dakenlogistics.com/wp-content/uploads/2023/05/Screenshot-85-PhotoRoom.png-PhotoRoom.png?resize=100%2C71&ssl=1" 
              alt="Daken Logistics" 
              className="h-12" 
            />
          </NavLink>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${
                    isScrolled
                      ? isActive
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                      : 'text-white hover:text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <button
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-2 px-4 text-lg ${
                      isActive
                        ? 'text-primary font-medium'
                        : 'text-gray-700 hover:text-primary'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}