import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Sparkles, Zap, BarChartBig, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const BrandLogo = ({ alt, src }) => (
  <div className="flex-shrink-0 w-36 h-20 mx-4 md:mx-8 flex items-center justify-center p-2 bg-gray-800/50 rounded-lg shadow-md hover:bg-gray-700/70 transition-all duration-300">
    <img  
      className="max-h-12 max-w-full object-contain transition-all duration-300"
      alt={alt} 
      src={src} />
  </div>
);

const NetworkAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let nodes = [];
    const numNodes = Math.min(70, Math.floor(window.innerWidth / 25)); // Responsive node count, max 70
    const maxDist = 180; // Max distance for lines, increased for more connections
    const nodeBaseSpeed = 0.4; 
    const nodeColor = 'rgba(236, 72, 153, 0.6)'; // Brighter pink for nodes
    const lineColor = 'rgba(236, 72, 153, 0.25)'; // Brighter pink for lines

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() * 2 - 1) * nodeBaseSpeed; // Velocity x
        this.vy = (Math.random() * 2 - 1) * nodeBaseSpeed; // Velocity y
        this.radius = Math.random() * 2.5 + 1.5; // Node radius, slightly larger
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();
      }
    }

    function init() {
      nodes = [];
      for (let i = 0; i < numNodes; i++) {
        nodes.push(new Node(Math.random() * canvas.width, Math.random() * canvas.height));
      }
    }

    function connectNodes() {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const opacity = Math.max(0, 1 - dist / maxDist); // Ensure opacity is not negative
            ctx.strokeStyle = lineColor.replace(/,\s*\d?\.?\d*\)/, `, ${opacity.toFixed(2)})`); // Dynamic opacity for lines
            ctx.lineWidth = 0.7; // Slightly thicker lines
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach(node => {
        node.update();
        node.draw();
      });
      connectNodes();
      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init(); 
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-50" />; {/* Increased opacity */}
};


const Home = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
    window.scrollTo(0,0);
     toast({
      title: "🚀 Let's Connect!",
      description: "Navigating to our Contact page for you to get started.",
      className: "bg-pink-500 text-white"
    });
  };

  const handleLearnMore = () => {
    navigate('/about');
    window.scrollTo(0,0);
     toast({
      title: "🧐 Learn More About Us!",
      description: "Taking you to our About page.",
    });
  };

const brands = [
    { name: 'Brand1', alt: 'Brand1 Logo', src: 'https://via.placeholder.com/150?text=Brand1' },
    { name: 'Brand2', alt: 'Brand2 Logo', src: 'https://via.placeholder.com/150?text=Brand2' },
    { name: 'Brand3', alt: 'Brand3 Logo', src: 'https://via.placeholder.com/150?text=Brand3' },
    { name: 'Brand4', alt: 'Brand4 Logo', src: 'https://via.placeholder.com/150?text=Brand4' },
    { name: 'Brand5', alt: 'Brand5 Logo', src: 'https://via.placeholder.com/150?text=Brand5' },
    { name: 'Brand6', alt: 'Brand6 Logo', src: 'https://via.placeholder.com/150?text=Brand6' },
  ];
  
  const duplicatedBrands = [...brands, ...brands, ...brands]; 

  const features = [
    {
      icon: Zap,
      title: 'Dynamic Campaigns',
      description: 'High-energy campaigns that capture attention and drive engagement through creative storytelling.',
    },
    {
      icon: Users,
      title: 'Creator Collaborations',
      description: 'Forge authentic partnerships with influencers who genuinely connect with your brand and audience.',
    },
    {
      icon: Target,
      title: 'Strategic Impact',
      description: 'Data-driven strategies designed to achieve your specific marketing goals and maximize ROI.',
    },
    {
      icon: BarChartBig,
      title: 'Measurable Growth',
      description: 'Transparent reporting and analytics to track campaign performance and demonstrate tangible results.',
    },
  ];

  return (
    <div className="pt-20 bg-gray-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-pink-900/60 opacity-90"></div>
          <div className="absolute inset-0 noise-pattern opacity-5"></div>
          <NetworkAnimation />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, letterSpacing: "-0.05em" }}
              animate={{ opacity: 1, letterSpacing: "0em" }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="gradient-text-pink">YourCompany</span> with the{' '}
              <span className="block md:inline">Trends That <Sparkles className="inline-block h-10 w-10 md:h-12 md:w-12 text-pink-400 mb-1 relative bottom-1" /> Matter</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Igniting connections, amplifying creators.
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Premier marketing agency connecting brands with influencers and creators 
              for authentic, high-impact campaigns that drive real results.
            </motion.p>
          <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button 
                size="lg" 
                className="button-primary text-lg px-10 py-4 transform hover:scale-105 transition-transform"
                onClick={handleGetStarted}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="button-outline text-lg px-10 py-4 transform hover:scale-105 transition-transform"
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Brands Banner Section */}
      <section className="py-16 bg-gray-800/50 overflow-hidden border-y border-gray-700/50">
        <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-pink-400 uppercase tracking-wider">Trusted by Leading Brands</h2>
        </div>
        <div className="relative w-full">
          <motion.div
            className="flex"
            animate={{ x: ['0%', '-100%'] }} 
            transition={{
              ease: 'linear',
              duration: 60, 
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <BrandLogo key={`${brand.name}-${index}`} alt={brand.alt} src={brand.src} />
            ))}
          </motion.div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-pink mb-6">
              Ignite Your Influence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We craft bespoke influencer marketing strategies that amplify your brand's voice, 
              drive meaningful engagement, and deliver measurable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                className="glass-effect-dark p-8 rounded-xl card-hover-effect flex flex-col items-center text-center group"
              >
                <div className="bg-gradient-to-br from-pink-600 via-fuchsia-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-r from-pink-700 via-purple-700 to-fuchsia-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Amplify Your Brand Story?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join us on this exciting journey as we redefine 
              and build bridges between brands and the voices that inspire.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-12 py-5 font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              onClick={handleGetStarted}
            >
              Start Your Campaign <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;