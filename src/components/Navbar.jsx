import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const logoUrl = "https://via.placeholder.com/150?text=Logo";

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleGetStarted = () => {
    navigate('/contact');
    setIsOpen(false);
     toast({
      title: "🚀 Let's Connect!",
      description: "Navigating to our Contact page.",
      className: "bg-pink-500 text-white"
    });
    window.scrollTo(0,0);
  };

  const handleNavLinkClick = (path) => {
    navigate(path);
    setIsOpen(false);
    window.scrollTo(0,0);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" onClick={() => window.scrollTo(0,0)} className="flex items-center space-x-1"> {/* Further reduced space-x */}
              <img src={logoUrl} alt="YourCompany Logo" className="h-10 md:h-12 w-auto" />
              <span className="font-semibold text-sm md:text-md text-white hidden sm:inline">YourCompany</span> {/* Further reduced font size and weight */}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <button
                  onClick={() => handleNavLinkClick(item.path)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    location.pathname === item.path
                      ? 'text-pink-400'
                      : 'text-gray-300 hover:text-pink-400'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
            <motion.div initial={{ opacity:0, y: -10}} animate={{opacity:1, y:0}} transition={{delay:0.4, duration:0.3}}>
              <Button onClick={handleGetStarted} className="button-primary px-6 py-2.5 text-sm">
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-pink-400 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-800/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-2xl absolute w-[calc(100%-2rem)] left-4 right-4"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`block w-full text-left px-3 py-3 text-base font-medium transition-colors rounded-md cursor-pointer ${
                  location.pathname === item.path
                    ? 'text-pink-400 bg-pink-500/10'
                    : 'text-gray-200 hover:text-pink-300 hover:bg-gray-700/50'
                }`}
                onClick={() => handleNavLinkClick(item.path)}
              >
                {item.name}
              </button>
            ))}
            <Button onClick={handleGetStarted} className="w-full mt-4 button-primary text-base py-3">
              Get Started
            </Button>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;