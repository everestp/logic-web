import Navigation from '@/components/Navigation';
import React from 'react';
import {
  FaGlobe,
  FaStar,
  FaShieldAlt,
  FaShoppingCart,
  FaDatabase,
  FaBolt,
  FaPaintBrush,
  FaBookReader,
  FaNewspaper,
  FaHeadset,
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaUsers,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaWordpress,
  FaMagento,
  FaShopify,
  FaVuejs,
  FaPython,
  FaFigma,
  FaAws,
  FaDocker,
  FaStripe,
  FaPaypal,
  FaWhatsapp,
  FaGitAlt,
  FaLightbulb,
  FaCode,
  FaRocket
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiVercel, SiFirebase, SiMui } from 'react-icons/si';

// Assuming Navigation is a simple component with a title/logo


// SVG for the hero image (a simplified browser window illustration)
const HeroSVG = () => (
  <svg className="w-full h-auto" viewBox="0 0 700 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="700" height="500" rx="20" fill="#2D3748"/>
    <rect x="20" y="20" width="660" height="40" rx="10" fill="#4A5568"/>
    <circle cx="45" cy="40" r="10" fill="#E53E3E"/>
    <circle cx="75" cy="40" r="10" fill="#F6E05E"/>
    <circle cx="105" cy="40" r="10" fill="#68D391"/>
    <path d="M40 80H660V460H40V80Z" fill="#1A202C"/>
    <path d="M120 120H580V140H120V120Z" fill="#4A5568"/>
    <path d="M120 160H400V180H120V160Z" fill="#4A5568"/>
    <path d="M120 200H300V220H120V200Z" fill="#4A5568"/>
    <rect x="120" y="260" width="180" height="120" rx="10" fill="#4A5568"/>
    <rect x="320" y="260" width="260" height="120" rx="10" fill="#4A5568"/>
    <path d="M40 460H660V480H40V460Z" fill="#4A5568"/>
  </svg>
);

const allTechStack = [
    { name: 'React', icon: <FaReact className="text-xl text-cyan-500" />, type: 'Frontend' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-xl" />, type: 'Framework' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-xl text-cyan-400" />, type: 'Styling' },
    { name: 'HTML5', icon: <FaHtml5 className="text-xl text-orange-500" />, type: 'Frontend' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-xl text-blue-500" />, type: 'Styling' },
    { name: 'JavaScript', icon: <FaJsSquare className="text-xl text-yellow-500" />, type: 'Frontend' },
    { name: 'Node.js', icon: <FaNodeJs className="text-xl text-green-600" />, type: 'Backend' },
    { name: 'MongoDB', icon: <SiMongodb className="text-xl text-green-600" />, type: 'Database' },
    { name: 'Firebase', icon: <SiFirebase className="text-xl text-yellow-500" />, type: 'Database' },
    { name: 'WordPress', icon: <FaWordpress className="text-xl text-blue-400" />, type: 'CMS' },
    { name: 'Shopify', icon: <FaShopify className="text-xl text-green-500" />, type: 'CMS' },
    { name: 'Magento', icon: <FaMagento className="text-xl text-orange-500" />, type: 'CMS' },
    { name: 'Python', icon: <FaPython className="text-xl text-blue-500" />, type: 'Backend' },
    { name: 'Figma', icon: <FaFigma className="text-xl text-fuchsia-500" />, type: 'Design' },
    { name: 'AWS', icon: <FaAws className="text-xl text-orange-400" />, type: 'Cloud' },
    { name: 'Vercel', icon: <SiVercel className="text-xl" />, type: 'Deployment' },
    { name: 'Docker', icon: <FaDocker className="text-xl text-blue-500" />, type: 'DevOps' },
    { name: 'Git', icon: <FaGitAlt className="text-xl text-orange-600" />, type: 'DevOps' },
];

interface ServiceTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  limitations?: string[];
  popular?: boolean;
  buttonText: string;
  icon: React.ReactNode;
}

interface Service {
  category: string;
  description: string;
  tiers: ServiceTier[];
}

const WebService: React.FC = () => {
  const services: Service[] = [
    {
      category: 'Website',
      description: 'Professional website solutions tailored to your business needs',
      tiers: [
        {
          name: 'Basic Website',
          price: 'Rs. 15,000 – 30,000',
          period: 'One-time',
          description: 'Ideal for small businesses and portfolios',
          features: [
            'Up to 8 pages',
            'Responsive design',
            'Basic SEO optimization',
            'Contact form',
            'Social media integration',
            '1 month support',
          ],
          limitations: ['No dynamic functionality', 'Limited design customization'],
          buttonText: 'Get Started',
          icon: <FaGlobe />,
        },
        {
          name: 'Business Website',
          price: 'Rs. 30,000 – 80,000',
          period: 'One-time',
          description: 'Dynamic website for growing businesses',
          features: [
            'Up to 15 pages',
            'CMS integration',
            'Advanced SEO',
            'Blog setup',
            'Analytics setup',
            'Lead capture forms',
            '3 months support',
          ],
          popular: true,
          buttonText: 'Most Popular',
          icon: <FaStar />,
        },
        {
          name: 'Enterprise Website',
          price: 'Rs. 100,000 – 200,000',
          period: 'One-time',
          description: 'Full-scale custom website with integrations',
          features: [
            'Unlimited pages',
            'Custom CMS',
            'API Integrations',
            'Multi-language support',
            'Advanced security',
            '6 months support',
          ],
          buttonText: 'Contact Sales',
          icon: <FaShieldAlt />,
        },
      ],
    },
    {
      category: 'E-commerce Solutions',
      description: 'Online stores with full shopping experience',
      tiers: [
        {
          name: 'Starter Store',
          price: 'Rs. 50,000 – 60,000',
          period: 'One-time',
          description: 'Basic eCommerce setup',
          features: [
            '50 products',
            'Basic cart',
            'COD Checkout',
            'Admin dashboard',
            'Product listing',
          ],
          buttonText: 'Launch Store',
          icon: <FaShoppingCart />,
        },
        {
          name: 'Professional Store',
          price: 'Rs. 90,000 – 150,000',
          period: 'One-time',
          description: 'Dynamic store with analytics',
          features: [
            'Unlimited products',
            'Cart + Payments',
            'Admin dashboard',
            'Analytics & Reports',
            'Invoice download',
            'Responsive design',
          ],
          popular: true,
          buttonText: 'Best Value',
          icon: <FaDatabase />,
        },
        {
          name: 'Enterprise Store',
          price: 'Rs. 150,000 – 200,000',
          period: 'One-time',
          description: 'Advanced features & full control',
          features: [
            'Multi-vendor support',
            'Custom API',
            'Stock & coupon system',
            'Advanced filters',
            'OTP/Email auth',
            'Live chat integration',
          ],
          buttonText: 'Contact Us',
          icon: <FaBolt />,
        },
      ],
    },
    {
      category: 'Additional Services',
      description: 'Extra solutions to elevate your digital presence',
      tiers: [
        {
          name: 'Portfolio Website',
          price: 'Rs. 20,000 – 50,000',
          period: 'One-time',
          description: 'Creative showcase with gallery',
          features: ['Project gallery', 'Contact form', 'Responsive layout', 'Minimalist design'],
          buttonText: 'Start Now',
          icon: <FaPaintBrush />,
        },
        {
          name: 'Educational Website',
          price: 'Rs. 50,000 – 150,000',
          period: 'One-time',
          description: 'Interactive course and learning portal',
          features: ['Course listing', 'Resource downloads', 'Student dashboard', 'Admin panel'],
          buttonText: 'Request Quote',
          icon: <FaBookReader />,
        },
        {
          name: 'News / Magazine Website',
          price: 'Rs. 60,000 – 150,000',
          period: 'One-time',
          description: 'Article publishing and user engagement',
          features: ['User comments', 'Social sharing', 'Ad space', 'SEO & mobile optimized'],
          buttonText: 'Inquire Now',
          icon: <FaNewspaper />,
        },
      ],
    },
    {
      category: 'Maintenance & Support',
      description: 'Ongoing care for your site',
      tiers: [
        {
          name: 'Basic Support',
          price: 'Rs. 3,000 – 7,000',
          period: '/month',
          description: 'Essential monthly support',
          features: ['Security patches', 'Basic troubleshooting', 'Uptime monitoring'],
          buttonText: 'Subscribe',
          icon: <FaHeadset />,
        },
        {
          name: 'Professional Support',
          price: 'Rs. 10,000 – 15,000',
          period: '/month',
          description: 'Comprehensive updates & reports',
          features: [
            'Plugin updates',
            'Performance tuning',
            'Priority assistance',
            'Monthly reports',
          ],
          popular: true,
          buttonText: 'Most Popular',
          icon: <FaUsers />,
        },
        {
          name: 'Enterprise Support',
          price: 'Rs. 20,000 – 30,000',
          period: '/month',
          description: 'Full support with emergency care',
          features: ['24/7 monitoring', 'Emergency fixes', 'Custom dev hours', 'Training included'],
          buttonText: 'Get Premium',
          icon: <FaShieldAlt />,
        },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen transition-all duration-500 text-[hsl(var(--foreground))] bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url('http://googleusercontent.com/image_generation_content/0')`,
      }}
    >
      {/* Semi-transparent overlay to ensure readability */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative container mx-auto px-4 py-8 md:py-16">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-16">
          <div className="space-y-2">
            <Navigation />
            
          </div>
        </div>

        {/* --- Hero Section with Process --- */}
        <div className="bg-[hsl(var(--card)/0.8)] rounded-3xl p-8 md:p-16 mb-20 md:mb-32">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24">
                {/* Hero Text & CTA */}
                <div className="text-center md:text-left animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]">
                        Web Developement 
                    </h1>
                    <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-8 max-w-xl mx-auto md:mx-0">
                        We build high-performance, responsive websites that not only look great but also drive business growth and engage your audience.
                    </p>
                    <a
                        href="#"
                        className="inline-block px-8 py-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold rounded-full shadow-lg hover:bg-[hsl(var(--primary)/0.9)] transition-colors duration-300 transform hover:scale-105"
                    >
                        Get a Free Quote
                    </a>
                </div>
                
                {/* Hero Image */}
                <div className="w-full hidden md:block animate-fade-in-right">
                    <HeroSVG />
                </div>
            </div>
            
            {/* Development Process Section */}
            <div className="max-w-6xl mx-auto mt-20 w-full">
                <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] animate-fade-in-up">
                    Our Simple Development Process
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center animate-fade-in-up">
                    <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-lg shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:scale-105">
                        <div className="p-4 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] mb-4">
                            <FaLightbulb className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">1. Plan</h3>
                        <p className="text-sm text-[hsl(var(--muted-foreground))]">We define goals, audiences, and strategy to lay a solid foundation.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-lg shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:scale-105">
                        <div className="p-4 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] mb-4">
                            <FaPaintBrush className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">2. Design</h3>
                        <p className="text-sm text-[hsl(var(--muted-foreground))]">We create beautiful, intuitive designs tailored to your brand identity.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-lg shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:scale-105">
                        <div className="p-4 rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] mb-4">
                            <FaCode className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">3. Develop</h3>
                        <p className="text-sm text-[hsl(var(--muted-foreground))]">Our team brings the design to life with clean, efficient, and modern code.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-lg shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:scale-105">
                        <div className="p-4 rounded-full bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] mb-4">
                            <FaRocket className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">4. Launch</h3>
                        <p className="text-sm text-[hsl(var(--muted-foreground))]">Your new website is deployed and ready to make an impact on the world.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Services */}
        {services.map((service, serviceIndex) => (
          <div key={serviceIndex} className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--foreground))]">
                {service.category}
              </h2>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
                {service.description}
              </p>
              <div className="flex justify-center mt-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))] rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.tiers.map((tier, tierIndex) => (
                <div
                  key={tierIndex}
                  className={`group relative rounded-3xl p-8 transition-all duration-500 hover:scale-105 bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-lg hover:shadow-2xl hover:rotate-1 transform-gpu backdrop-blur-sm`}
                >
                  {tier.popular && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                      <div
                        className="px-6 py-2 rounded-full text-sm font-bold shadow-xl bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] animate-pulse"
                      >
                        ⭐ Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex p-4 rounded-2xl mb-6 bg-[hsl(var(--glass))] group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-[hsl(var(--primary))] text-2xl">{tier.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[hsl(var(--foreground))]">
                      {tier.name}
                    </h3>
                    <p className="text-sm mb-6 leading-relaxed text-[hsl(var(--muted-foreground))]">
                      {tier.description}
                    </p>
                    <p className="text-4xl font-bold text-[hsl(var(--primary))]"> </p>
                   
                  </div>

                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="p-1 rounded-full bg-[hsl(var(--success)/0.2)]">
                          <FaRegCheckCircle className="w-4 h-4 text-[hsl(var(--success))]" />
                        </div>
                        <span className="text-sm leading-relaxed text-[hsl(var(--foreground))]">{feature}</span>
                      </div>
                    ))}
                    {tier.limitations &&
                      tier.limitations.map((limitation, limitationIndex) => (
                        <div key={limitationIndex} className="flex items-start space-x-3">
                          <div className="p-1 rounded-full bg-[hsl(var(--destructive)/0.2)]">
                            <FaRegTimesCircle className="w-4 h-4 text-[hsl(var(--destructive))]" />
                          </div>
                          <span className="text-sm text-[hsl(var(--muted-foreground))]">{limitation}</span>
                        </div>
                      ))}
                  </div>
                  
                  <div className="flex justify-center mt-auto">
                    <a
                      href="#"
                      className={`group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        tier.popular ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)]' : 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--muted))]'
                      }`}
                    >
                      <span>{tier.buttonText}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Tech Stack Section */}
        <div className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--foreground))]">
                    Our Technology Stack
                </h2>
                <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
                    We use a diverse and modern stack to build high-performance, scalable, and secure digital products.
                </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {allTechStack.map((tech, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[hsl(var(--card)/0.8)] border border-[hsl(var(--border))] transform hover:scale-110 transition-transform duration-300 backdrop-blur-sm animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="text-3xl text-[hsl(var(--foreground))] mb-2">{tech.icon}</div>
                        <span className="text-sm font-medium text-[hsl(var(--muted-foreground))]">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Contact Section */}
        <div
          className="rounded-3xl p-12 text-center relative overflow-hidden bg-[hsl(var(--card)/0.8)] border border-[hsl(var(--border))] backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gradient-primary)/0.2)] via-[hsl(var(--gradient-secondary)/0.1)] to-[hsl(var(--gradient-hero))]"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4 text-[hsl(var(--foreground))]">Need a Custom Solution?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
              Contact our team for personalized quotes and custom development services tailored to your unique requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:logicdirection@gmail.com"
                className="group px-8 py-4 rounded-2xl font-semibold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)] shadow-glow transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Contact Us</span>
              </a>
              <a
                href="tel:+9779864958071"
                className="px-8 py-4 rounded-2xl font-semibold border-2 border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary)/0.1)] transform hover:scale-105"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-12 border-t border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]">
          <div className="space-y-3">
            <p className="text-lg font-medium">© 2025 LogicDirection. All rights reserved.</p>
            <p className="text-sm opacity-80">Empowering businesses with innovative web solutions</p>
            <div className="flex justify-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebService;