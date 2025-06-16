import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, ArrowRight, Briefcase, TrendingUp, KeyRound as UsersRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';


const About = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handlePartnerWithUs = () => {
    navigate('/contact');
    toast({
      title: "🤝 Let's Collaborate!",
      description: "Taking you to our Contact page to start our partnership.",
      className: "bg-pink-500 text-white",
    });
  };

  const values = [
    {
      icon: Target,
      title: 'Authentic Connections',
      description: 'We believe in fostering genuine relationships between brands and creators that resonate with real audiences.',
    },
    {
      icon: UsersRound,
      title: 'Community First',
      description: 'Building meaningful communities around brands through strategic influencer partnerships and engagement.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Innovation',
      description: 'Pushing boundaries with creative campaigns that stand out in the crowded digital landscape.',
    },
    {
      icon: Award,
      title: 'Excellence Driven',
      description: 'Committed to delivering exceptional results that exceed expectations and drive measurable impact.',
    },
  ];

  return (
    <div className="pt-20 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-24 bg-gray-800/40 relative overflow-hidden">
         <div className="absolute inset-0 noise-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold gradient-text-pink mb-6 tracking-tight">
              About This Company
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Redefining through authentic connections, 
              creative excellence, and data-driven strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text-pink mb-8">
                Our Journey: From Vision to Pulse
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  As a premier marketing agency, we've spent years helping brands connect 
                  with influencers and creators to create authentic, high-impact campaigns. 
                  Our expertise in navigating the digital landscape has enabled countless 
                  brands to find their voice and connect with their ideal audiences.
                </p>
                <p>
                  Now, we're taking the next big step by establishing YourCompany as 
                  a standalone organization, expanding our reach and amplifying brand stories 
                  like never before. This evolution represents our commitment to innovation 
                  and excellence in this space.
                </p>
                <p>
                  At YourCompany, our mission is to foster meaningful connections, 
                  drive engagement, and navigate the ever-evolving digital landscape with 
                  creativity and expertise. We're here to help brands pulse with the trends 
                  that matter most.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay:0.2 }}
              className="relative group"
            >
              <div className="glass-effect-dark p-8 rounded-2xl card-hover-effect shadow-2xl shadow-pink-500/10">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-6">
                <img  
                    class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    alt="Dynamic team collaborating in a modern, vibrant office setting discussing influencer marketing strategies on a large screen with charts and graphs."
                 src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">Building the Future of Influence</h3>
                  <p className="text-gray-400 text-sm">
                    Our dedicated team pioneers innovative solutions, bridging brands and creators with impactful, meaningful collaborations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-pink mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do, shaping how we approach 
              every campaign, partnership, and client relationship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                className="glass-effect-dark p-8 rounded-xl card-hover-effect text-center group"
              >
                <div className="bg-gradient-to-br from-pink-600 via-fuchsia-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section/CTA */}
      <section className="py-28 gradient-bg-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us on This Exciting Journey
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              As we redefine influencer marketing and build bridges between brands 
              and the voices that inspire, we invite you to be part of this transformation. 
              Follow us for updates, insights, and opportunities to collaborate!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-12 py-5 font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              onClick={handlePartnerWithUs}
            >
              Partner With Us <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;