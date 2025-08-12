import React from 'react';
// Assuming '@/components/Navigation' exists in your project.
// If it doesn't, you can replace it with your navigation component.
import Navigation from '@/components/Navigation';
import {
  Check,
  X,
  Star,
  Cloud,
  GitBranch,
  Server,
  Shield,
  Zap,
  Users,
  Terminal,
  Settings,
  ArrowRight,
  Rocket,
  Wrench,
} from 'lucide-react';
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaCloud,
  FaLinux,
  FaLightbulb,
  FaRocket,
  FaWrench,
  FaSitemap,
  FaCode
} from 'react-icons/fa';
import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiGithubactions,
  SiGitlab,
  SiGooglecloud,
  SiRedhat,
  SiDatadog
} from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";


const services = [
  {
    category: 'CI/CD Pipeline Setup',
    description: 'Streamlined continuous integration and deployment solutions tailored to your needs.',
    tiers: [
      {
        name: 'Basic CI/CD',
        price: 'Rs. 30,000 – 50,000',
        period: 'One-time',
        description: 'Essential pipeline for small projects.',
        features: [
          'Single pipeline setup',
          'Git integration',
          'Basic automation',
          'Single environment',
          '1 month support',
        ],
        buttonText: 'Get Started',
        icon: <GitBranch className="w-8 h-8 text-[hsl(var(--primary))]" />,
      },
      {
        name: 'Professional CI/CD',
        price: 'Rs. 80,000 – 150,000',
        period: 'One-time',
        description: 'Robust pipelines for growing teams.',
        features: [
          'Multiple pipelines',
          'Multi-environment support',
          'Automated testing',
          'Containerization (Docker)',
          'Monitoring setup',
          '3 months support',
        ],
        popular: true,
        buttonText: 'Most Popular',
        icon: <Zap className="w-8 h-8 text-[hsl(var(--accent))]" />,
      },
      {
        name: 'Enterprise CI/CD',
        price: 'Rs. 200,000 – 350,000',
        period: 'One-time',
        description: 'Scalable pipelines for large-scale applications.',
        features: [
          'Unlimited pipelines',
          'Kubernetes integration',
          'Advanced security scans',
          'Multi-cloud support',
          'Custom workflows',
          '6 months support',
        ],
        buttonText: 'Contact Sales',
        icon: <Rocket className="w-8 h-8 text-[hsl(var(--secondary))]" />,
      },
    ],
  },
  {
    category: 'Cloud Infrastructure',
    description: 'Scalable, secure, and resilient cloud infrastructure management.',
    tiers: [
      {
        name: 'Starter Cloud',
        price: 'Rs. 40,000 – 60,000',
        period: 'One-time',
        description: 'Basic cloud setup for small applications.',
        features: [
          'Single cloud provider',
          'Basic server setup',
          'Load balancer',
          'Basic security',
        ],
        buttonText: 'Launch Cloud',
        icon: <Cloud className="w-8 h-8 text-[hsl(var(--primary))]" />,
      },
      {
        name: 'Professional Cloud',
        price: 'Rs. 100,000 – 200,000',
        period: 'One-time',
        description: 'Advanced cloud solutions for growing businesses.',
        features: [
          'Multi-cloud support',
          'Auto-scaling setup',
          'High availability',
          'Backup automation',
          'Monitoring & alerts',
        ],
        popular: true,
        buttonText: 'Best Value',
        icon: <Server className="w-8 h-8 text-[hsl(var(--accent))]" />,
      },
      {
        name: 'Enterprise Cloud',
        price: 'Rs. 300,000 – 500,000',
        period: 'One-time',
        description: 'Comprehensive cloud infrastructure for enterprises.',
        features: [
          'Hybrid cloud support',
          'Custom architecture',
          'Disaster recovery',
          'Advanced security policies',
          'Dedicated consultation',
        ],
        buttonText: 'Contact Us',
        icon: <Shield className="w-8 h-8 text-[hsl(var(--secondary))]" />,
      },
    ],
  },
];

const allTechStack = [
  { name: 'AWS', icon: <FaAws className="text-3xl" />, color: 'text-orange-400' },
  { name: 'Google Cloud', icon: <SiGooglecloud className="text-3xl" />, color: 'text-blue-500' },
  { name: 'Azure', icon: <VscAzure className="text-3xl" />, color: 'text-blue-400' },
  { name: 'Docker', icon: <FaDocker className="text-3xl" />, color: 'text-blue-500' },
  { name: 'Kubernetes', icon: <SiKubernetes className="text-3xl" />, color: 'text-blue-500' },
  { name: 'Terraform', icon: <SiTerraform className="text-3xl" />, color: 'text-purple-600' },
  { name: 'Jenkins', icon: <SiJenkins className="text-3xl" />, color: 'text-gray-600' },
  { name: 'GitHub Actions', icon: <SiGithubactions className="text-3xl" />, color: 'text-gray-800' },
  { name: 'GitLab CI', icon: <SiGitlab className="text-3xl" />, color: 'text-orange-600' },
  { name: 'Ansible', icon: <SiAnsible className="text-3xl" />, color: 'text-red-600' },
  { name: 'Prometheus', icon: <SiPrometheus className="text-3xl" />, color: 'text-blue-600' },
  { name: 'Grafana', icon: <SiGrafana className="text-3xl" />, color: 'text-orange-500' },
  { name: 'Datadog', icon: <SiDatadog className="text-3xl" />, color: 'text-purple-500' },
  { name: 'Red Hat', icon: <SiRedhat className="text-3xl" />, color: 'text-red-600' },
  { name: 'Git', icon: <FaGitAlt className="text-3xl" />, color: 'text-orange-600' },
];

const HeroSVG = () => (
  <svg
    className="w-full h-auto"
    viewBox="0 0 700 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
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

const DevOpsService = () => {
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
                Automate & Accelerate Your Software Delivery
              </h1>
              <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-8 max-w-xl mx-auto md:mx-0">
                We empower your team with robust CI/CD pipelines, secure cloud infrastructure, and streamlined workflows to deliver value faster and more reliably.
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
                  Explore Our Tech Stack
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full hidden md:block animate-fade-in-right">
              <HeroSVG />
            </div>
          </div>
        </div>

        {/* --- DevOps Process Section --- */}
        <div className="max-w-6xl mx-auto mt-20 w-full animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
            Our Continuous DevOps Workflow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-2xl shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-4 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] mb-4">
                <FaCode className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">1. Code & Plan</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Develop and plan your projects with precision and speed.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-2xl shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-4 rounded-full bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))] mb-4">
                <FaSitemap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">2. Build & Test</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Automate builds and run comprehensive tests in the pipeline.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-2xl shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-4 rounded-full bg-[hsl(var(--secondary)/0.1)] text-[hsl(var(--secondary))] mb-4">
                <FaRocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">3. Deploy & Operate</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Deploy to production seamlessly and manage operations.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-2xl shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-4 rounded-full bg-[hsl(var(--destructive)/0.1)] text-[hsl(var(--destructive))] mb-4">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">4. Monitor & Optimize</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Gain insights and continuously improve performance.</p>
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
            <h3 className="text-3xl font-bold mb-4 text-[hsl(var(--foreground))]">Need a Custom DevOps Solution?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
              Contact our team for personalized quotes and custom DevOps services tailored to your unique requirements
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
            <p className="text-sm opacity-80">Empowering businesses with innovative DevOps solutions</p>
            <div className="flex justify-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOpsService;
