import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/6d290eb3-5d32-4810-b7d1-f005f19637ff/60a232d0107a935eea7c481c4925add9.jpg";
  const instagramLink = "https://www.instagram.com/";
  const linkedinLink = "https://www.linkedin.com/in/tanmay-singh-parihar/";
  const { toast } = useToast();
  const navigate = useNavigate();

  const footerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const handlePhoneClick = (phoneNumber) => {
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        toast({
          title: "✅ Copied to Clipboard",
          description: `${phoneNumber} copied!`,
          className: "bg-green-500 text-white",
        });
      })
      .catch(err => {
        toast({
          title: "⚠️ Copy Failed",
          description: "Could not copy number. Please try manually.",
          variant: "destructive",
        });
        console.error('Failed to copy: ', err);
      });
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(`tel:${phoneNumber}`, '_self');
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <motion.div
            variants={footerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2"
          >
            <div className="flex items-center mb-6 space-x-3">
              <img src={logoUrl} alt="TrendPulse Media Logo" className="h-12 w-auto" />
              <span className="font-bold text-2xl text-white">Your Company</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-lg text-sm leading-relaxed">
              Igniting connections, amplifying creators. We are a premier marketing agency dedicated to fostering meaningful connections, driving engagement, and navigating the dynamic digital landscape with unparalleled creativity and expertise.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href={instagramLink} target="_blank" rel="noopener noreferrer" 
                className="bg-gray-800 p-3 rounded-lg hover:bg-pink-600 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </motion.a>
              <motion.a 
                href={linkedinLink} target="_blank" rel="noopener noreferrer" 
                className="bg-gray-800 p-3 rounded-lg hover:bg-pink-600 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={footerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-lg font-semibold text-white mb-6 block">Quick Links</span>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={(e) => { e.preventDefault(); navigate(link.path); window.scrollTo(0,0);}}
                    className="text-gray-400 hover:text-pink-400 transition-colors text-sm cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={footerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-lg font-semibold text-white mb-6 block">Contact Info</span>
            <div className="space-y-4">
              <a href="mailto:xyz@gmail.in" className="flex items-center space-x-3 group">
                <Mail className="h-4 w-4 text-pink-500" />
                <span className="text-gray-400 group-hover:text-pink-400 transition-colors text-sm">xyz@gmail.in</span>
              </a>
              <div 
                onClick={() => handlePhoneClick('+1555555555')} 
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <Phone className="h-4 w-4 text-pink-500" />
                <span className="text-gray-400 group-hover:text-pink-400 transition-colors text-sm">+1555555555</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-pink-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Random location, Country</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Created by Tanmay Singh Parihar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;