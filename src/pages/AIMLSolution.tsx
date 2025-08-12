import React from 'react';
import Navigation from '@/components/Navigation';
import {
  Check,
  X,
  Star,
  Brain,
  Cpu,
  Shield,
  Zap,
  Users,
  Code,
  Settings,
  ArrowRight,
  Lightbulb,
  Monitor,
  Rocket,
  Wrench,
} from 'lucide-react';
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiNumpy,
  SiPandas,

  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiFastapi,
} from 'react-icons/si';

const services = [
  {
    category: 'AI Model Development',
    description: 'Custom AI models tailored to your business needs',
    tiers: [
      {
        name: 'Basic AI Model',
        price: 'Rs. 50,000 – 80,000',
        period: 'One-time',
        description: 'Essential AI model for small-scale applications',
        features: [
          'Single model development',
          'Basic dataset integration',
          'Standard algorithms',
          '1 month support',
        ],
        buttonText: 'Get Started',
        icon: <Brain className="w-8 h-8 text-[hsl(var(--primary))]" />,
      },
      {
        name: 'Professional AI Model',
        price: 'Rs. 120,000 – 200,000',
        period: 'One-time',
        description: 'Advanced AI solutions for growing businesses',
        features: [
          'Multiple model development',
          'Custom dataset integration',
          'Advanced algorithms',
          'Model optimization',
          '3 months support',
        ],
        popular: true,
        buttonText: 'Most Popular',
        icon: <Star className="w-8 h-8 text-[hsl(var(--accent))]" />,
      },
      {
        name: 'Enterprise AI Model',
        price: 'Rs. 250,000 – 400,000',
        period: 'One-time',
        description: 'Scalable AI models for enterprise-grade applications',
        features: [
          'Complex model architectures',
          'Big data integration',
          'Real-time inference',
          'Custom APIs',
          '6 months support',
        ],
        buttonText: 'Contact Sales',
        icon: <Shield className="w-8 h-8 text-[hsl(var(--secondary))]" />,
      },
    ],
  },
  {
    category: 'Machine Learning Infrastructure',
    description: 'Robust infrastructure for ML model deployment and management',
    tiers: [
      {
        name: 'Starter ML Infra',
        price: 'Rs. 40,000 – 70,000',
        period: 'One-time',
        description: 'Basic ML infrastructure for small applications',
        features: [
          'Single cloud provider',
          'Basic model hosting',
          'Standard scaling',
          'Basic monitoring',
        ],
        buttonText: 'Launch ML',
        icon: <Cpu className="w-8 h-8 text-[hsl(var(--primary))]" />,
      },
      {
        name: 'Professional ML Infra',
        price: 'Rs. 100,000 – 180,000',
        period: 'One-time',
        description: 'Scalable ML infrastructure for growing businesses',
        features: [
          'Multi-cloud support',
          'Auto-scaling setup',
          'High availability',
          'Advanced monitoring',
          'Backup automation',
        ],
        popular: true,
        buttonText: 'Best Value',
        icon: <Settings className="w-8 h-8 text-[hsl(var(--accent))]" />,
      },
      {
        name: 'Enterprise ML Infra',
        price: 'Rs. 250,000 – 450,000',
        period: 'One-time',
        description: 'Comprehensive ML infrastructure for enterprises',
        features: [
          'Hybrid cloud support',
          'Custom architecture',
          'Disaster recovery',
          'Advanced security',
          'Dedicated consultation',
        ],
        buttonText: 'Contact Us',
        icon: <Zap className="w-8 h-8 text-[hsl(var(--secondary))]" />,
      },
    ],
  },
  {
    category: 'Additional AI/ML Services',
    description: 'Specialized services to enhance your AI/ML capabilities',
    tiers: [
      {
        name: 'Data Pipeline Setup',
        price: 'Rs. 30,000 – 60,000',
        period: 'One-time',
        description: 'Automated data pipelines for AI/ML workflows',
        features: ['ETL pipeline setup', 'Data preprocessing', 'Single environment', 'Documentation'],
        buttonText: 'Start Now',
        icon: <Code className="w-8 h-8 text-[hsl(var(--primary))]" />,
      },
      {
        name: 'Model Optimization',
        price: 'Rs. 50,000 – 100,000',
        period: 'One-time',
        description: 'Enhance model performance and efficiency',
        features: ['Hyperparameter tuning', 'Model compression', 'Latency optimization', 'Performance reports'],
        buttonText: 'Request Quote',
        icon: <Wrench className="w-8 h-8 text-[hsl(var(--accent))]" />,
      },
      {
        name: 'AI Security',
        price: 'Rs. 40,000 – 90,000',
        period: 'One-time',
        description: 'Secure your AI/ML systems',
        features: ['Model security audits', 'Data encryption', 'Vulnerability scans', 'Compliance checks'],
        buttonText: 'Inquire Now',
        icon: <Shield className="w-8 h-8 text-[hsl(var(--secondary))]" />,
      },
    ],
  },
];

const allTechStack = [
  { name: 'TensorFlow', icon: <SiTensorflow className="text-3xl" />, color: 'text-orange-500' },
  { name: 'PyTorch', icon: <SiPytorch className="text-3xl" />, color: 'text-red-500' },
  { name: 'Scikit-learn', icon: <SiScikitlearn className="text-3xl" />, color: 'text-orange-600' },
  { name: 'Keras', icon: <SiKeras className="text-3xl" />, color: 'text-red-700' },
  { name: 'NumPy', icon: <SiNumpy className="text-3xl" />, color: 'text-blue-500' },
  { name: 'Pandas', icon: <SiPandas className="text-3xl" />, color: 'text-gray-800' },
 // { name: 'AWS', icon: <SiAmazonaws className="text-3xl" />, color: 'text-orange-400' },
  { name: 'Google Cloud', icon: <SiGooglecloud className="text-3xl" />, color: 'text-blue-500' },
 // { name: 'Azure', icon: <SiMicrosoftazure className="text-3xl" />, color: 'text-blue-700' },
  { name: 'Docker', icon: <SiDocker className="text-3xl" />, color: 'text-blue-600' },
  { name: 'Kubernetes', icon: <SiKubernetes className="text-3xl" />, color: 'text-blue-500' },
  { name: 'FastAPI', icon: <SiFastapi className="text-3xl" />, color: 'text-emerald-500' },
];

const HeroSVG = () => (
  <svg className="w-full h-auto" viewBox="0 0 700 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="700" height="500" rx="20" fill="#2D3748" />
    <circle cx="150" cy="150" r="40" fill="#4299E1" />
    <circle cx="550" cy="150" r="40" fill="#ED8936" />
    <circle cx="350" cy="350" r="40" fill="#68D391" />
    <path
      d="M150 190L350 310"
      stroke="#4A5568"
      strokeWidth="4"
      strokeLinecap="round"
      markerEnd="url(#arrowhead)"
    />
    <path
      d="M550 190L350 310"
      stroke="#4A5568"
      strokeWidth="4"
      strokeLinecap="round"
      markerEnd="url(#arrowhead)"
    />
    <path
      d="M150 110L550 110"
      stroke="#4A5568"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M150 150L150 350"
      stroke="#4A5568"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <defs>
      <marker id="arrowhead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#4A5568" />
      </marker>
    </defs>
  </svg>
);

const AIMLSolution = () => {
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
                Build Intelligent & Data-Driven Solutions
              </h1>
              <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-8 max-w-xl mx-auto md:mx-0">
                We develop and deploy custom AI/ML models to automate processes, generate insights, and give your business a competitive edge.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="#"
                  className="inline-block px-8 py-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold rounded-full shadow-lg hover:bg-[hsl(var(--primary)/0.9)] transition-colors duration-300 transform hover:scale-105"
                >
                  Get a Free Consultation
                </a>
                <a
                  href="#tech-stack"
                  className="inline-block px-8 py-4 bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] font-semibold rounded-full shadow-lg hover:bg-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--muted))] transition-colors duration-300 transform hover:scale-105"
                >
                  Explore Our Services
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full hidden md:block animate-fade-in-right">
              <HeroSVG />
            </div>
          </div>
        </div>

        {/* --- AI/ML Workflow Section --- */}
        <div className="max-w-6xl mx-auto mt-20 w-full animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
            Our AI/ML Solution Workflow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-2xl shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-4 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] mb-4">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">1. Ideate & Plan</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Develop a tailored plan based on your goals and data.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-2xl shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-4 rounded-full bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))] mb-4">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">2. Build & Train</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Create models, prepare data, and train for optimal performance.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-2xl shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-4 rounded-full bg-[hsl(var(--secondary)/0.1)] text-[hsl(var(--secondary))] mb-4">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">3. Deploy & Scale</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Integrate and deploy models in a scalable, production environment.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-2xl shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-4 rounded-full bg-[hsl(var(--destructive)/0.1)] text-[hsl(var(--destructive))] mb-4">
                <Monitor className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">4. Monitor & Refine</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Continuously monitor and refine models for accuracy and efficiency.</p>
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
                    <p className="text-4xl font-bold text-[hsl(var(--primary))]">
                        
                    </p>
                    <p className="text-sm font-medium text-[hsl(var(--muted-foreground))]">{tier.period}</p>
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
              Our Comprehensive AI/ML Technology Stack
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
              We leverage a diverse set of tools and frameworks to build, train, and deploy robust AI/ML solutions.
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
            <h3 className="text-3xl font-bold mb-4 text-[hsl(var(--foreground))]">Need a Custom AI/ML Solution?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
              Contact our team for personalized quotes and custom AI/ML services tailored to your unique requirements
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
            <p className="text-sm opacity-80">Empowering businesses with innovative AI/ML solutions</p>
            <div className="flex justify-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMLSolution;
