import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Users, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const instagramLink = "https://www.instagram.com/";
  const linkedinLink = "https://www.linkedin.com/in/tanmay-singh-parihar/";

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EmailJS keys removed for security
    // const serviceID = '';
    // const templateID = '';
    // const userID = '';

    // Template params remain the same
    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
    };

    // EmailJS send function removed for security
    toast({
      title: "📬 Message Sent",
      description: "Thank you for your message! We will get back to you soon.",
      className: "bg-green-500 text-white",
      duration: 7000,
    });
    setFormData({ name: '', email: '', company: '', message: '' });
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
    } else {
        toast({
            title: "📞 Call Us",
            description: `On desktop, please dial ${phoneNumber}. Number copied to clipboard.`,
            className: "bg-blue-500 text-white",
            duration: 5000,
        });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'General Inquiries',
      details: 'info@yourcompany.com',
      description: 'For general questions and information.',
      action: () => window.location.href = 'mailto:info@yourcompany.com',
      isLink: true,
    },
    {
      icon: Mail,
      title: 'Partnerships & Sales',
      details: 'sales@yourcompany.com',
      description: 'For partnership opportunities and sales inquiries.',
      action: () => window.location.href = 'mailto:sales@yourcompany.com',
      isLink: true,
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1-555-555-5555',
      description: 'Mon-Fri from 9am to 6pm EST.',
      action: () => handlePhoneClick('+15555555555'),
      isLink: false,
    },
    {
      icon: MapPin,
      title: 'Our Location',
      details: '1234 Road, Anytown, Country',
      description: 'Strategically based to serve clients globally.',
      isLink: false,
    },
  ];

  return (
    <div className="pt-20 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text-pink mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to amplify your brand story? Let's discuss how we can help you 
              connect with the right influencers and create impactful campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect-dark p-8 rounded-2xl card-hover-effect"
            >
              <h2 className="text-3xl font-bold gradient-text-pink mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full button-primary text-lg py-4"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold gradient-text-pink mb-6">Contact Channels</h2>
                <p className="text-gray-300 text-lg mb-8">
                  We're here to help you navigate the influencer marketing landscape. 
                  Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect-dark p-6 rounded-xl card-hover-effect"
                  >
                    <div 
                      onClick={info.action} 
                      className={`flex items-start space-x-4 group ${info.action ? 'cursor-pointer' : ''}`}
                    >
                      <div className="bg-gradient-to-r from-pink-600 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-pink-400 transition-colors">{info.title}</h3>
                        <p className={`text-lg font-medium text-pink-400 mb-1 ${info.action ? 'group-hover:underline' : ''}`}>{info.details}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                 {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: contactInfo.length * 0.1 }}
                    className="glass-effect-dark p-6 rounded-xl card-hover-effect"
                >
                    <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="bg-gray-700/50 p-3 rounded-lg hover:bg-pink-600 transition-colors group">
                            <Instagram className="h-6 w-6 text-pink-400 group-hover:text-white transition-colors" />
                        </a>
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="bg-gray-700/50 p-3 rounded-lg hover:bg-pink-600 transition-colors group">
                            <Linkedin className="h-6 w-6 text-pink-400 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Tap into the power of authentic influence. Schedule a call to discuss your brand's potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={() => handlePhoneClick('+15555555555')}
              >
                Schedule a Call <Phone className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;