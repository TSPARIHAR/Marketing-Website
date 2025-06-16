import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Sparkles, 
  BarChart3, 
  Camera, 
  Megaphone, 
  Heart,
  ArrowRight,
  Lightbulb,
  ShieldCheck,
  ClipboardList,
  CheckCircle,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate('/contact');
    toast({
      title: "📝 Let's Plan Your Success!",
      description: "Taking you to our Contact page to discuss your project.",
      className: "bg-pink-500 text-white",
    });
  };

  const handleScheduleConsultation = () => {
    window.open('tel:+1555555555', '_self');
    toast({
      title: "📞 Scheduling Consultation...",
      description: "Connecting you to +1555555555 to schedule your consultation. This is a demo feature.",
      className: "bg-blue-500 text-white",
    });
  };

  const services = [
    {
      icon: Users,
      title: 'Influencer Matching & Recruitment',
      description: 'Connect with authentic creators perfectly aligned with your brand values, audience, and campaign goals.',
      features: ['Deep Audience Analysis', 'Brand Value Alignment', 'Performance Forecasting', 'Rigorous Vetting Process'],
    },
    {
      icon: Target,
      title: 'Campaign Strategy & Planning',
      description: 'Data-driven strategies to maximize engagement, reach, and ROI across all relevant social media platforms.',
      features: ['Goal-Oriented Planning', 'Strategic Content Calendars', 'Cross-Platform Optimization', 'KPI Definition'],
    },
    {
      icon: Sparkles,
      title: 'Creative Content Development',
      description: 'Craft compelling, authentic content that captivates audiences and drives meaningful brand interactions.',
      features: ['Innovative Content Creation', 'Brand Storytelling Mastery', 'High-Impact Visual Design', 'Engaging Copywriting'],
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis & Insights',
      description: 'Stay ahead of the curve with real-time trend monitoring, competitor analysis, and actionable industry insights.',
      features: ['Proactive Market Research', 'AI-Powered Trend Forecasting', 'In-depth Competitor Benchmarking', 'Custom Industry Reports'],
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics & Reporting',
      description: 'Comprehensive tracking and transparent reporting to measure campaign success and optimize future strategies.',
      features: ['Real-time Dashboards', 'Clear ROI Tracking', 'Granular Engagement Metrics', 'Actionable Custom Reports'],
    },
    {
      icon: Megaphone,
      title: 'Brand Amplification & Reach',
      description: 'Expand your brand\'s footprint through strategic partnerships and expertly executed multi-platform campaigns.',
      features: ['Integrated Cross-platform Strategy', 'Targeted Audience Expansion', 'Enhanced Brand Awareness', 'Viral Marketing Tactics'],
    },
  ];

  const processSteps = [
    {
      icon: Lightbulb,
      title: 'Discovery & Strategy',
      description: 'We dive deep to understand your brand, goals, and target audience, crafting a bespoke strategy for success.',
    },
    {
      icon: Users,
      title: 'Curated Influencer Selection',
      description: 'Our expert team meticulously identifies and vets the ideal creators who authentically align with your brand.',
    },
    {
      icon: Camera,
      title: 'Compelling Content Creation',
      description: 'Collaborate with influencers to produce authentic, high-quality content that resonates and engages.',
    },
    {
      icon: ShieldCheck,
      title: 'Launch & Optimize',
      description: 'Execute campaigns with continuous real-time monitoring and data-driven optimization for maximum impact.',
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive influencer marketing solutions designed to amplify your brand 
              and create authentic connections with your target audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="glass-effect-dark p-8 rounded-xl card-hover-effect group flex flex-col"
              >
                <div className="bg-gradient-to-br from-pink-600 via-fuchsia-500 to-purple-600 w-20 h-20 rounded-xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">{service.description}</p>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-pink-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A meticulously crafted methodology ensuring every campaign delivers exceptional results 
              and cultivates meaningful brand connections.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-pink-500/20 transform -translate-y-1/2 -mt-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                  className="text-center relative p-8 glass-effect-dark rounded-xl card-hover-effect group"
                >
                  <div className="bg-gradient-to-br from-pink-600 via-fuchsia-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-300 border-4 border-gray-900 z-10 relative">
                    <step.icon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 gradient-bg-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's create authentic connections that drive real results. 
              Get in touch to discuss your next influencer marketing campaign.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-10 py-5 font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                onClick={handleGetQuote}
              >
                Get Free Quote <ClipboardList className="ml-3 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="button-outline text-white border-white hover:bg-white hover:text-pink-600 text-lg px-10 py-5 font-semibold transform hover:scale-105"
                onClick={handleScheduleConsultation}
              >
                Schedule Consultation <Phone className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;