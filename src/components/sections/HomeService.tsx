import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  PenTool,
  Megaphone,
  BadgePercent,
  Server
} from 'lucide-react';
import path from 'path';
import { useNavigate } from 'react-router-dom';

const servicesData = [
  {
    title: 'Web Development',
    description: 'A stunning and fully optimized website designed to match your vision',
    icon: <Globe />,
    path :'services/web-dev'
  },
  {
    title: 'App Development',
    description: 'Smart and easy-to-use mobile app made to keep people engaged and coming back',
    icon: <Smartphone />,
    path :'services/app-dev'
  },
  {
    title: 'UI/UX Design',
    description: 'Create visually appealing and intuitive interfaces that ensure smooth and seamless user experiences.',
    icon: <PenTool />,
    path :'services/ui-ux'
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic campaigns to grow your brand and reach new customers',
    icon: <Megaphone />,
    path :'services/digital-marketing"'
  },
  {
    title: 'Branding',
    description: 'We create memorable brand identities through unique visuals, messaging, and strategy that connect with your audience and build trust.',
    icon: <BadgePercent />,
    path :'services/digital-marketing"'
  },
  {
    title: 'Web Hosting',
    description: 'Reliable and secure web hosting with fast performance, scalable resources, and 24/7 support to keep your website running smoothly.',
    icon: <Server />,
    path :'services/web-dev'
  }
];

const ServiceComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };
const navigate = useNavigate()
  return (
<section className="pt-0 px-4 sm:px-6 bg-gradient-hero md:min-h-0 lg:min-h-0 xl:min-h-0">

<div className="max-w-6xl mx-auto"

>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 px-4"
        >
          <h4 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Our <span className="text-primary">Services</span>
          </h4>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial concept to final deployment, we provide end-to-end technology services that drive innovation and accelerate your <span className="text-primary">Business Growth</span>.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              onClick={()=>navigate(service.path)}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              className="group w-full h-full border border-border hover:border-primary rounded-[--radius] p-5 transition-smooth flex flex-col items-center justify-center text-center relative overflow-hidden bg-card dark:bg-muted shadow-sm hover:glow-primary"
            >
              {/* Icon with Hover Animation */}
              <motion.div
                className="mb-4 z-10 group-hover:rotate-8 group-hover:scale-120 transition-spring"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  {React.cloneElement(service.icon, {
                    size: 28,
                    className: 'transition-transform duration-300',
                  })}
                </div>
              </motion.div>

              {/* Title & Description */}
              <div className="space-y-1 z-10 px-2">
                <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-smooth">
                  {service.description}
                </p>
              </div>

              {/* Hover Overlay Glow */}
              <div className="absolute inset-0 rounded-[--radius] bg-[--gradient-primary] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceComponent;