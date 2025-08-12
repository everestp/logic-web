import React from 'react';
import Navigation from '@/components/Navigation';
import {
  Check,
  X,
  Star,
  Smartphone,
  Code,
  Cloud,
  Shield,
  Zap,
  Users,
  BookOpen,
  Globe,
  ArrowRight,
} from 'lucide-react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaFigma,
  FaLightbulb,
  FaRocket,
  FaPalette,
  FaPencilRuler,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaDocker,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMui,
  SiAdobexd,
  SiAdobeillustrator,
  SiFirebase,
  SiVercel,
  SiMongodb,
} from 'react-icons/si';

const services = [
  {
    category: 'Mobile App Development',
    description: 'Custom mobile applications built with React Native and JavaScript',
    tiers: [
      {
        name: 'Basic App',
        price: 'Rs. 50,000 – 100,000',
        period: 'One-time',
        description: 'Simple mobile app for startups or small businesses',
        features: [
          'Single platform (iOS or Android)',
          'Up to 5 screens',
          'Basic UI/UX design',
          'Appwrite backend integration',
          'Basic push notifications',
          '1 month support',
        ],
        limitations: ['No advanced integrations', 'Limited customization'],
        buttonText: 'Get Started',
        icon: <Smartphone className="w-6 h-6" />,
      },
      {
        name: 'Professional App',
        price: 'Rs. 150,000 – 300,000',
        period: 'One-time',
        description: 'Feature-rich app for growing businesses',
        features: [
          'Cross-platform (iOS & Android)',
          'Up to 15 screens',
          'Custom UI/UX design',
          'Appwrite authentication & database',
          'Advanced push notifications',
          'Analytics integration',
          '3 months support',
        ],
        popular: true,
        buttonText: 'Most Popular',
        icon: <Star className="w-6 h-6" />,
      },
      {
        name: 'Enterprise App',
        price: 'Rs. 400,000 – 800,000',
        period: 'One-time',
        description: 'Scalable app with advanced integrations',
        features: [
          'Cross-platform (iOS & Android)',
          'Unlimited screens',
          'Custom API integrations',
          'Appwrite cloud functions',
          'Multi-language support',
          'Advanced security features',
          '6 months support',
        ],
        buttonText: 'Contact Sales',
        icon: <Shield className="w-6 h-6" />,
      },
    ],
  },
  {
    category: 'Appwrite Backend Solutions',
    description: 'Robust backend services powered by Appwrite',
    tiers: [
      {
        name: 'Starter Backend',
        price: 'Rs. 30,000 – 50,000',
        period: 'One-time',
        description: 'Basic backend setup for small apps',
        features: [
          'Appwrite setup',
          'User authentication',
          'Basic database',
          'File storage',
          'Basic API endpoints',
        ],
        buttonText: 'Launch Backend',
        icon: <Cloud className="w-6 h-6" />,
      },
      {
        name: 'Professional Backend',
        price: 'Rs. 80,000 – 150,000',
        period: 'One-time',
        description: 'Scalable backend with advanced features',
        features: [
          'Custom Appwrite functions',
          'Advanced authentication',
          'Real-time database',
          'File management',
          'Analytics endpoints',
          'Scalable architecture',
        ],
        popular: true,
        buttonText: 'Best Value',
        icon: <Code className="w-6 h-6" />,
      },
      {
        name: 'Enterprise Backend',
        price: 'Rs. 200,000 – 350,000',
        period: 'One-time',
        description: 'Comprehensive backend for complex apps',
        features: [
          'Multi-tenant support',
          'Custom cloud functions',
          'Advanced security policies',
          'Real-time APIs',
          'High-performance storage',
          'Dedicated support',
        ],
        buttonText: 'Contact Us',
        icon: <Zap className="w-6 h-6" />,
      },
    ],
  },
  {
    category: 'Additional App Services',
    description: 'Enhance your mobile app with specialized features',
    tiers: [
      {
        name: 'App Prototyping',
        price: 'Rs. 20,000 – 40,000',
        period: 'One-time',
        description: 'Interactive app prototype for validation',
        features: ['Clickable prototype', 'Basic UI/UX', 'Wireframes', 'Feedback integration'],
        buttonText: 'Start Now',
        icon: <BookOpen className="w-6 h-6" />,
      },
      {
        name: 'Cross-Platform Optimization',
        price: 'Rs. 50,000 – 100,000',
        period: 'One-time',
        description: 'Optimize app for multiple platforms',
        features: ['iOS & Android optimization', 'Performance tuning', 'Device testing', 'UI consistency'],
        buttonText: 'Request Quote',
        icon: <Globe className="w-6 h-6" />,
      },
      {
        name: 'App Store Deployment',
        price: 'Rs. 30,000 – 60,000',
        period: 'One-time',
        description: 'Seamless app store publishing',
        features: ['App Store setup', 'Google Play setup', 'Metadata optimization', 'Submission support'],
        buttonText: 'Inquire Now',
        icon: <Smartphone className="w-6 h-6" />,
      },
    ],
  },
  {
    category: 'App Maintenance & Support',
    description: 'Ongoing care for your mobile application',
    tiers: [
      {
        name: 'Basic Support',
        price: 'Rs. 5,000 – 10,000',
        period: '/month',
        description: 'Essential app maintenance',
        features: ['Bug fixes', 'Basic updates', 'Uptime monitoring'],
        buttonText: 'Subscribe',
        icon: <Shield className="w-6 h-6" />,
      },
      {
        name: 'Professional Support',
        price: 'Rs. 15,000 – 25,000',
        period: '/month',
        description: 'Comprehensive app updates & reports',
        features: [
          'Feature updates',
          'Performance optimization',
          'Priority support',
          'Monthly analytics reports',
        ],
        popular: true,
        buttonText: 'Most Popular',
        icon: <Users className="w-6 h-6" />,
      },
      {
        name: 'Enterprise Support',
        price: 'Rs. 30,000 – 50,000',
        period: '/month',
        description: 'Premium support with custom development',
        features: ['24/7 monitoring', 'Emergency fixes', 'Custom feature dev', 'Team training'],
        buttonText: 'Get Premium',
        icon: <Zap className="w-6 h-6" />,
      },
    ],
  },
];

const allTechStack = [
    { name: 'React Native', icon: <FaReact className="text-xl text-cyan-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-xl text-yellow-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-xl text-green-600" /> },
    { name: 'Appwrite', icon: <Code className="text-xl" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-xl text-yellow-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-xl text-green-600" /> },
    { name: 'AWS', icon: <FaAws className="text-xl text-orange-400" /> },
    { name: 'Docker', icon: <FaDocker className="text-xl text-blue-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-xl text-orange-600" /> },
    { name: 'Figma', icon: <FaFigma className="text-xl text-fuchsia-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-xl text-cyan-400" /> },
    { name: 'MUI', icon: <SiMui className="text-xl text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-xl" /> },
    { name: 'Vercel', icon: <SiVercel className="text-xl" /> },
    { name: 'Adobe XD', icon: <SiAdobexd className="text-xl text-purple-500" /> },
];

const HeroSVG = () => (
  <svg className="w-full h-auto" viewBox="0 0 700 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="700" height="500" rx="20" fill="#2D3748" />
    <path d="M40 80H660V420H40V80Z" fill="#1A202C" />
    <path d="M120 120H580V140H120V120Z" fill="#4A5568" />
    <path d="M120 160H400V180H120V160Z" fill="#4A5568" />
    <path d="M120 200H300V220H120V200Z" fill="#4A5568" />
    <rect x="120" y="260" width="180" height="120" rx="10" fill="#4A5568" />
    <rect x="320" y="260" width="260" height="120" rx="10" fill="#4A5568" />
  </svg>
);


const AppService = () => {
  return (
    <div className="min-h-screen transition-all duration-500 bg-[hsl(var(--background))] overflow-hidden">
      {/* Background glowing elements with float animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20 bg-[hsl(var(--primary-glow))] animate-float-delayed"
        ></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-15 bg-[hsl(var(--secondary))] animate-float"
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-10 bg-[hsl(var(--accent))] animate-float-delayed-2"
        ></div>
      </div>

      <div className="relative container mx-auto px-4 py-8">
      
        <div className="flex justify-between items-center mb-16 animate-fade-in-down">
          <div className="space-y-2">
             <Navigation/>
            
            
          </div>
        </div>

        {/* --- Hero Section with Process --- */}
        <div className="bg-[hsl(var(--card)/0.8)] rounded-3xl p-8 md:p-16 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24">
            {/* Hero Text & CTA */}
            <div className="text-center md:text-left animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]">
                Building Your Vision with Robust Mobile Apps
              </h1>
              <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-8 max-w-xl mx-auto md:mx-0">
                We create powerful, cross-platform mobile applications that deliver an exceptional user experience and drive business growth.
              </p>
              <a
                href="#"
                className="inline-block px-8 py-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold rounded-full shadow-lg hover:bg-[hsl(var(--primary)/0.9)] transition-colors duration-300 transform hover:scale-105"
              >
                Get a Free Consultation
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
                <p className="text-sm text-[hsl(var(--muted-foreground))]">We define requirements and create a detailed roadmap.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-lg shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:scale-105">
                <div className="p-4 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] mb-4">
                  <FaPalette className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">2. Design</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">We craft intuitive UI/UX to ensure a great user experience.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-lg shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:scale-105">
                <div className="p-4 rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] mb-4">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">3. Develop</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">We build a high-performance, secure, and scalable app.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-lg shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:scale-105">
                <div className="p-4 rounded-full bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] mb-4">
                  <FaRocket className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">4. Deploy</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">We launch your app and provide ongoing maintenance.</p>
              </div>
            </div>
          </div>
        </div>

        {services.map((service, serviceIndex) => (
          <div key={serviceIndex} className="mb-20">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--foreground))]">
                {service.category}
              </h2>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
                {service.description}
              </p>
              <div className="flex justify-center mt-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))] rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.tiers.map((tier, tierIndex) => (
                <div
                  key={tierIndex}
                  className={`group relative rounded-3xl p-8 transition-all duration-500 hover:scale-105 bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-md hover:shadow-lg hover:-translate-y-2 transform-gpu animate-scale-in`}
                  style={{ animationDelay: `${tierIndex * 0.1}s` }}
                >
                  {tier.popular && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                      <div
                        className="px-6 py-2 rounded-full text-sm font-bold shadow-lg bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] animate-pulse-glow"
                      >
                        ⭐ Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex p-4 rounded-2xl mb-6 bg-[hsl(var(--glass))] group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-[hsl(var(--primary))]">{tier.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[hsl(var(--foreground))]">
                      {tier.name}
                    </h3>
                    <p className="text-sm mb-6 leading-relaxed text-[hsl(var(--muted-foreground))]">
                      {tier.description}
                    </p>
                   //
                  
                  </div>

                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3 animate-fade-in-right" style={{ animationDelay: `${0.2 + featureIndex * 0.05}s` }}>
                        <div className="p-1 rounded-full bg-[hsl(var(--success)/0.2)]">
                          <Check className="w-4 h-4 text-[hsl(var(--success))]" />
                        </div>
                        <span className="text-sm leading-relaxed text-[hsl(var(--foreground))]">{feature}</span>
                      </div>
                    ))}
                    {tier.limitations &&
                      tier.limitations.map((limitation, limitationIndex) => (
                        <div key={limitationIndex} className="flex items-start space-x-3 animate-fade-in-left" style={{ animationDelay: `${0.2 + limitationIndex * 0.05}s` }}>
                          <div className="p-1 rounded-full bg-[hsl(var(--destructive)/0.2)]">
                            <X className="w-4 h-4 text-[hsl(var(--destructive))]" />
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

        {/* --- Tech Stack Section --- */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--foreground))]">
              Our Comprehensive Technology Stack
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
              We use a diverse and modern stack to build high-performance, scalable, and secure mobile applications.
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

        <div
          className="rounded-3xl p-12 text-center relative overflow-hidden bg-[hsl(var(--card))] border border-[hsl(var(--border))] animate-fade-in-up"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary)/0.2)] via-[hsl(var(--accent)/0.1)] to-[hsl(var(--background))] opacity-50"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4 text-[hsl(var(--foreground))]">Need a Custom App Solution?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
              Contact our team for personalized quotes and custom mobile app development services tailored to your unique requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:logicdirection@gmail.com"
                className="group px-8 py-4 rounded-2xl font-semibold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)] glow-primary transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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

        <div className="text-center mt-16 pt-12 border-t border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] animate-fade-in-up">
          <div className="space-y-3">
            <p className="text-lg font-medium">© 2025 LogicDirection. All rights reserved.</p>
            <p className="text-sm opacity-80">Empowering businesses with innovative mobile app solutions</p>
            <div className="flex justify-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppService;