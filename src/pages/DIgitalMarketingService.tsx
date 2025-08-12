import React from 'react';
import Navigation from '@/components/Navigation';
import {
  Check,
  X,
  Star,
  Megaphone,
  TrendingUp,
  Globe,
  Shield,
  Zap,
  Users,
  BarChart,
  Share2,
  ArrowRight,
  Lightbulb,
  Search,
  Monitor,
  Rocket,
} from 'lucide-react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
  FaYoutube,
  FaPinterest,
  FaTiktok,
} from 'react-icons/fa';
import {
  SiMailchimp,
  SiHubspot,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiSemrush,

} from 'react-icons/si';

const services = [
  {
    category: 'Digital Marketing',
    description: 'Comprehensive strategies to boost your online presence',
    tiers: [
      {
        name: 'Basic Digital Marketing',
        price: 'Rs. 10,000 – 20,000',
        period: '/month',
        description: 'Essential marketing for small businesses',
        features: [
          'SEO for 5 keywords',
          'Basic content creation',
          'Google Ads setup',
          'Monthly analytics report',
          '1 social media platform',
        ],
        buttonText: 'Get Started',
        icon: <Megaphone className="w-8 h-8 text-[hsl(var(--primary))]" />,
      },
      {
        name: 'Professional Digital Marketing',
        price: 'Rs. 25,000 – 50,000',
        period: '/month',
        description: 'Advanced campaigns for growing businesses',
        features: [
          'SEO for 15 keywords',
          'Content marketing strategy',
          'Google & social ads',
          'Detailed analytics reports',
          '2 social media platforms',
          'Email marketing setup',
        ],
        popular: true,
        buttonText: 'Most Popular',
        icon: <TrendingUp className="w-8 h-8 text-[hsl(var(--accent))]" />,
      },
      {
        name: 'Enterprise Digital Marketing',
        price: 'Rs. 75,000 – 150,000',
        period: '/month',
        description: 'Full-scale marketing for large businesses',
        features: [
          'SEO for unlimited keywords',
          'Comprehensive content plan',
          'Multi-channel ad campaigns',
          'Advanced analytics & tracking',
          '4 social media platforms',
          'CRM integration',
        ],
        buttonText: 'Contact Sales',
        icon: <Shield className="w-8 h-8 text-[hsl(var(--secondary))]" />,
      },
    ],
  },
  {
    category: 'Social Media Marketing',
    description: 'Engaging social media strategies to grow your audience',
    tiers: [
      {
        name: 'Starter Social Media',
        price: 'Rs. 8,000 – 15,000',
        period: '/month',
        description: 'Basic social media presence',
        features: [
          '1 platform management',
          '5 posts per week',
          'Basic content creation',
          'Monthly performance report',
        ],
        buttonText: 'Launch Social',
        icon: <Share2 className="w-8 h-8 text-[hsl(var(--primary))]" />,
      },
      {
        name: 'Professional Social Media',
        price: 'Rs. 20,000 – 40,000',
        period: '/month',
        description: 'Dynamic social campaigns for engagement',
        features: [
          '3 platform management',
          '10 posts per week',
          'Custom graphics & videos',
          'Engagement tracking',
          'Social ad campaigns',
          'Bi-weekly reports',
        ],
        popular: true,
        buttonText: 'Best Value',
        icon: <Star className="w-8 h-8 text-[hsl(var(--accent))]" />,
      },
      {
        name: 'Enterprise Social Media',
        price: 'Rs. 50,000 – 100,000',
        period: '/month',
        description: 'Advanced social strategies for brand dominance',
        features: [
          '5 platform management',
          '15 posts per week',
          'Premium content creation',
          'Influencer collaborations',
          'Advanced ad targeting',
          'Real-time analytics',
        ],
        buttonText: 'Contact Us',
        icon: <Zap className="w-8 h-8 text-[hsl(var(--secondary))]" />,
      },
    ],
  },
  {
    category: 'Additional Marketing Services',
    description: 'Specialized services to enhance your digital marketing',
    tiers: [
      {
        name: 'Content Marketing',
        price: 'Rs. 15,000 – 30,000',
        period: '/month',
        description: 'Engaging content to attract audiences',
        features: ['Blog posts', 'Infographics', 'Basic SEO', 'Content calendar'],
        buttonText: 'Start Now',
        icon: <BarChart className="w-8 h-8 text-[hsl(var(--primary))]" />,
      },
      {
        name: 'Email Marketing',
        price: 'Rs. 10,000 – 25,000',
        period: '/month',
        description: 'Targeted email campaigns for conversions',
        features: ['Email templates', 'List management', 'A/B testing', 'Analytics tracking'],
        buttonText: 'Request Quote',
        icon: <Globe className="w-8 h-8 text-[hsl(var(--accent))]" />,
      },
      {
        name: 'PPC Advertising',
        price: 'Rs. 20,000 – 50,000',
        period: '/month',
        description: 'High-ROI pay-per-click campaigns',
        features: ['Google Ads management', 'Keyword research', 'Ad optimization', 'Conversion tracking'],
        buttonText: 'Inquire Now',
        icon: <Megaphone className="w-8 h-8 text-[hsl(var(--secondary))]" />,
      },
    ],
  },
];

const allTechStack = [
  { name: 'Meta', icon: <FaFacebookF className="text-3xl" />, color: 'text-blue-500' },
  { name: 'Google Ads', icon: <FaGoogle className="text-3xl" />, color: 'text-red-500' },
  { name: 'Instagram', icon: <FaInstagram className="text-3xl" />, color: 'text-purple-500' },
  { name: 'LinkedIn', icon: <FaLinkedinIn className="text-3xl" />, color: 'text-blue-700' },
  { name: 'YouTube', icon: <FaYoutube className="text-3xl" />, color: 'text-red-600' },
  { name: 'Pinterest', icon: <FaPinterest className="text-3xl" />, color: 'text-red-700' },
  { name: 'TikTok', icon: <FaTiktok className="text-3xl" />, color: 'text-black' },
  { name: 'Mailchimp', icon: <SiMailchimp className="text-3xl" />, color: 'text-yellow-500' },
  { name: 'HubSpot', icon: <SiHubspot className="text-3xl" />, color: 'text-orange-500' },
  { name: 'Google Analytics', icon: <SiGoogleanalytics className="text-3xl" />, color: 'text-orange-600' },
  { name: 'Google Tag Manager', icon: <SiGoogletagmanager className="text-3xl" />, color: 'text-blue-400' },
  { name: 'SEMrush', icon: <SiSemrush className="text-3xl" />, color: 'text-red-500' },
  //{ name: 'Ahrefs', icon: <SiAhrefs className="text-3xl" />, color: 'text-red-700' },
];

const HeroSVG = () => (
  <svg className="w-full h-auto" viewBox="0 0 700 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="700" height="500" rx="20" fill="#2D3748" />
    <path
      d="M50 150L650 150M50 250L650 250M50 350L650 350"
      stroke="#4A5568"
      strokeWidth="20"
      strokeLinecap="round"
    />
    <circle cx="100" cy="150" r="30" fill="#4299E1" />
    <path d="M130 150H600" stroke="#4299E1" strokeWidth="4" />
    <path d="M130 250H600" stroke="#68D391" strokeWidth="4" />
    <path d="M130 350H600" stroke="#ED8936" strokeWidth="4" />
    <rect x="600" y="130" width="50" height="40" rx="5" fill="#4299E1" />
    <rect x="600" y="230" width="50" height="40" rx="5" fill="#68D391" />
    <rect x="600" y="330" width="50" height="40" rx="5" fill="#ED8936" />
    <path
      d="M625 150L625 250"
      stroke="#CBD5E0"
      strokeWidth="2"
      strokeDasharray="5 5"
    />
    <path
      d="M625 250L625 350"
      stroke="#CBD5E0"
      strokeWidth="2"
      strokeDasharray="5 5"
    />
    <circle cx="100" cy="250" r="30" fill="#68D391" />
    <circle cx="100" cy="350" r="30" fill="#ED8936" />
  </svg>
);

const DigitalMarketingService = () => {
  return (
    <div className="min-h-screen transition-all duration-500 bg-[hsl(var(--background))] overflow-hidden font-sans text-[hsl(var(--foreground))]">
      {/* Background glowing elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20 bg-[hsl(var(--primary-glow))] animate-float-delayed"></div>
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-15 bg-[hsl(var(--secondary))] animate-float"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-10 bg-[hsl(var(--accent))] animate-float-delayed-2"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-16 animate-fade-in-down">
          <div className="space-y-2">
            <Navigation />
           
            
          </div>
        </div>

        {/* --- Hero Section with Process --- */}
        <div className="relative bg-[hsl(var(--card)/0.8)] rounded-3xl p-8 md:p-16 mb-20 md:mb-32 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background))] via-transparent to-[hsl(var(--accent)/0.1)] opacity-70"></div>
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24 z-10">
            {/* Hero Text & CTA */}
            <div className="text-center md:text-left animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]">
                Boost Your Brand & Drive Conversions
              </h1>
              <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-8 max-w-xl mx-auto md:mx-0">
                We craft data-driven digital marketing strategies to increase your online visibility, engage your audience, and achieve measurable business growth.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="#"
                  className="inline-block px-8 py-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold rounded-full shadow-lg hover:bg-[hsl(var(--primary)/0.9)] transition-colors duration-300 transform hover:scale-105"
                >
                  Get a Free Consultation
                </a>
                
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full hidden md:block animate-fade-in-right">
              <HeroSVG />
            </div>
          </div>
        </div>

        {/* --- Digital Marketing Workflow Section --- */}
        <div className="max-w-6xl mx-auto mt-20 w-full animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
            Our Digital Marketing Workflow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-2xl shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-4 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] mb-4">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">1. Strategize</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Develop a tailored plan based on your goals and audience.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-2xl shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-4 rounded-full bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))] mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">2. Execute</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Launch campaigns, create content, and optimize for performance.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-2xl shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-4 rounded-full bg-[hsl(var(--secondary)/0.1)] text-[hsl(var(--secondary))] mb-4">
                <Monitor className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">3. Monitor</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Track campaign results and gather real-time data and insights.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-2xl shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-4 rounded-full bg-[hsl(var(--destructive)/0.1)] text-[hsl(var(--destructive))] mb-4">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">4. Optimize</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Refine strategies and improve campaigns for maximum ROI.</p>
            </div>
          </div>
        </div>

        {/* --- Services Section --- */}
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
                  className={`group relative rounded-3xl p-8 transition-all duration-500 hover:scale-105 bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-md hover:shadow-lg hover:-translate-y-2 transform-gpu animate-scale-in flex flex-col`}
                  style={{ animationDelay: `${tierIndex * 0.1}s` }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 right-4">
                      <div className="px-4 py-1 rounded-full text-xs font-bold shadow-lg bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] animate-pulse-glow">
                        ⭐ Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="inline-flex p-4 rounded-full mb-6 bg-[hsl(var(--card)/0.5)]">
                      {tier.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[hsl(var(--foreground))]">
                      {tier.name}
                    </h3>
                    <p className="text-sm mb-6 leading-relaxed text-[hsl(var(--muted-foreground))]">
                      {tier.description}
                    </p>
                  
                  
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3 animate-fade-in-right" style={{ animationDelay: `${0.2 + featureIndex * 0.05}s` }}>
                        <div className="p-1 rounded-full bg-[hsl(var(--success)/0.2)]">
                          <Check className="w-4 h-4 text-[hsl(var(--success))]" />
                        </div>
                        <span className="text-sm leading-relaxed text-[hsl(var(--foreground))]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center mt-auto">
                    <a
                      href="#"
                      className={`group px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
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
        <div className="mb-20" id="tech-stack">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--foreground))]">
              Our Comprehensive Technology Stack
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
              We leverage a diverse and powerful stack to automate your workflows, manage infrastructure, and ensure application reliability.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {allTechStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[hsl(var(--card)/0.8)] border border-[hsl(var(--border))] transform hover:scale-110 transition-transform duration-300 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${tech.color} mb-2`}>{tech.icon}</div>
                <span className="text-sm font-medium text-[hsl(var(--muted-foreground))]">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Custom CTA Section --- */}
        <div
          className="rounded-3xl p-12 text-center relative overflow-hidden bg-[hsl(var(--card))] border border-[hsl(var(--border))] animate-fade-in-up shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary)/0.2)] via-[hsl(var(--accent)/0.1)] to-transparent opacity-50"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4 text-[hsl(var(--foreground))]">Need a Custom Marketing Solution?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
              Contact our team for personalized quotes and custom digital marketing services tailored to your unique requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:logicdirection@gmail.com"
                className="group px-8 py-4 rounded-full font-semibold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)] glow-primary transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="tel:+9779864958071"
                className="px-8 py-4 rounded-full font-semibold border-2 border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary)/0.1)] transform hover:scale-105"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-12 border-t border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] animate-fade-in-up">
          <div className="space-y-3">
            <p className="text-lg font-medium">© 2025 LogicDirection. All rights reserved.</p>
            <p className="text-sm opacity-80">Empowering businesses with innovative digital marketing solutions</p>
            <div className="flex justify-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingService;
