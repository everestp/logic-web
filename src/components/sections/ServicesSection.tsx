import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Code,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ServiceDetailModal from '@/components/ServiceDetailModal';

// Simplified services data for a starter company
const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'We build clean, fast, and responsive websites perfect for new businesses and personal portfolios.',
    features: [
      'Custom Responsive Website Design',
      'Modern Frontend Development (React/Next.js)',
      'Basic SEO & Performance Optimization',
      'Contact Form & Essential Integrations',
      'Initial Deployment & Setup'
    ],
    pricing: {
      basic: {
        amount: 19999,
        description: 'A professional online presence for your new business or personal brand.',
        includedFeatures: [
          'Simple, 5-page responsive website',
          'Basic UI/UX design',
          'One-time SEO setup',
          'Contact form integration'
        ],
        notIncludedFeatures: [
          'E-commerce functionality',
          'Blog or CMS integration',
          'Advanced animations',
          'Ongoing maintenance & support'
        ]
      },
      pro: {
        amount: 39999,
        description: 'For growing businesses needing more features like a blog or a small gallery.',
        includedFeatures: [
          'Up to 10 pages',
          'Content Management System (CMS)',
          'Blog or portfolio functionality',
          'Enhanced performance optimization'
        ],
        notIncludedFeatures: [
          'E-commerce integration',
          'Custom web application features',
          'Advanced backend APIs',
          'Dedicated support'
        ]
      },
      enterprise: {
        amount: 79990,
        description: 'For businesses requiring a comprehensive, scalable solution with custom features.',
        includedFeatures: [
          'Custom functionality (e.g., booking system)',
          'E-commerce integration',
          'Advanced security features',
          'Dedicated support for 3 months'
        ],
        notIncludedFeatures: [
          'Monthly retainer',
          'Advanced AI/ML integrations',
          'Mobile app development'
        ]
      }
    },
    color: 'from-blue-400 to-cyan-400',
    type: 'project-based',
    disclaimer: 'The prices listed are starting estimates and may vary based on project complexity. We provide a personalized quote after understanding your specific needs.'
  },
  {
    icon: TrendingUp,
    title: 'Social Media Marketing',
    description: 'Establish your brand and connect with your audience through simple, effective digital strategies.',
    features: [
      'Brand Identity & Logo Design',
      'Social Media Management (1-2 Platforms)',
      'Basic Content Creation (Graphics)',
      'Audience Engagement',
      'Monthly Performance Reporting'
    ],
    pricing: {
      basic: {
        amount: 11999,
        description: 'A solid foundation for building your brand and a consistent social media presence.',
        includedFeatures: [
          'Basic brand kit & logo design',
          'Management of 2 social media platforms',
          '8 posts per month',
          'Monthly performance report'
        ],
        notIncludedFeatures: [
          'Paid ad campaigns',
          'Advanced content (Reels/Stories)',
          'Email marketing campaigns',
          'Proactive community engagement'
        ]
      },
      pro: {
        amount: 29999,
        description: 'For businesses ready to increase their digital footprint with more content and engagement.',
        includedFeatures: [
          'Upgraded brand guide',
          'Management of 3 social media platforms',
          '16 posts per month',
          'Proactive community engagement'
        ],
        notIncludedFeatures: [
          'Paid ad campaigns',
          'Advanced content creation (video)',
          'Full-scale SEO strategy',
          'Dedicated account manager'
        ]
      },
      enterprise: {
        amount: 59999,
        description: 'A comprehensive package for businesses serious about rapid growth and in-depth strategy.',
        includedFeatures: [
          'Full brand identity package',
          'Custom content creation (Reels, Stories)',
          'Managed paid ad campaigns (ad spend separate)',
          'Advanced analytics and reporting'
        ],
        notIncludedFeatures: [
          'Custom web development',
          'Market research',
          'Influencer outreach'
        ]
      }
    },
    color: 'from-pink-400 to-yellow-400',
    type: 'monthly-subscription',
    disclaimer: 'The prices listed are monthly estimates and can be tailored to fit your specific marketing goals and budget. Contact us for a custom package and quote.'
  }
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedService, setSelectedService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <div
  ref={ref}
  className=" py-2 pt-0 bg-gradient-to-br from-muted/20 to-background"
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-10"
        >
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Our <span className="gradient-text">Plan Pricing</span>
          </h2>
          {/* <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we deliver innovative solutions to accelerate your business growth.
          </p> */}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full glass border border-border/50 hover:shadow-md hover:glow-primary transition-all duration-300">
                <CardHeader className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-foreground">Starting at:</h4>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold gradient-text">
                        Rs. {service.pricing.basic.amount.toLocaleString()}+
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {service.type === 'monthly-subscription' ? '/month' : '/project'}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group border-border text-foreground hover:bg-muted/20"
                    onClick={() => setSelectedService(service)}
                  >
                    Explore Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
         <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="glass border border-border rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's discuss how our proven methodology can solve your unique challenges and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={()=>navigate("/contact")}
              >
                Start Your Project
              </motion.button>
             
            </div>
          </div>
        </motion.div>

        {/* Service Detail Modal */}
        <ServiceDetailModal
          service={selectedService}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
        />
      </div>
    </div>
  );
}
