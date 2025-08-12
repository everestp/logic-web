import Navigation from '@/components/Navigation';
import React, { useState, useEffect } from 'react';
import {
  FaPalette,
  FaPencilRuler,
  FaShieldAlt,
  FaArrowRight,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaFigma,
  FaLightbulb,
  FaCode,
  FaRocket
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMui,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiSketch,
} from 'react-icons/si';

// This is the specific UI/UX Design service data.
const uiuxService = {
  category: 'UI/UX Design',
  description: 'Crafting intuitive and visually appealing user interfaces that captivate and convert your audience.',
  tiers: [
    {
      name: 'Basic UI/UX',
      price: 'Rs. 20,000 – 40,000',
      period: 'One-time',
      description: 'Essential design for small projects.',
      features: [
        'Up to 5 screens',
        'Wireframes',
        'Basic prototyping',
        'Style guide',
        '1 revision round',
        '1 month support',
      ],
      limitations: ['Limited interactivity', 'Basic visual design'],
      buttonText: 'Get Started',
      icon: <FaPalette className="w-6 h-6" />,
    },
    {
      name: 'Professional UI/UX',
      price: 'Rs. 50,000 – 100,000',
      period: 'One-time',
      description: 'Comprehensive design for growing businesses.',
      features: [
        'Up to 15 screens',
        'High-fidelity wireframes',
        'Interactive prototypes',
        'Custom design system',
        'Usability testing',
        '3 months support',
      ],
      popular: true,
      buttonText: 'Most Popular',
      icon: <FaPencilRuler className="w-6 h-6" />,
    },
    {
      name: 'Enterprise UI/UX',
      price: 'Rs. 150,000 – 300,000',
      period: 'One-time',
      description: 'Advanced design solutions for complex projects.',
      features: [
        'Unlimited screens',
        'Advanced prototyping',
        'User flow analysis',
        'Custom animations',
        'Accessibility compliance',
        '6 months support',
      ],
      buttonText: 'Contact Sales',
      icon: <FaShieldAlt className="w-6 h-6" />,
    },
  ],
};

const allTechStack = [
  { name: 'Figma', icon: <FaFigma className="text-xl text-fuchsia-500" /> },
  { name: 'Adobe XD', icon: <SiAdobexd className="text-xl text-purple-500" /> },
  { name: 'Sketch', icon: <SiSketch className="text-xl text-yellow-500" /> },
  { name: 'Illustrator', icon: <SiAdobeillustrator className="text-xl text-orange-500" /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop className="text-xl text-blue-500" /> },
  { name: 'MUI', icon: <SiMui className="text-xl text-blue-400" /> },
  { name: 'React', icon: <FaReact className="text-xl text-cyan-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-xl text-cyan-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-xl text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-xl text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-xl text-yellow-500" /> },
];



// SVG for the hero image
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

const UiuxService = () => {
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
           <Navigation/>
          </div>
        </div>

        {/* --- Hero Section with Process --- */}
        <div className="bg-[hsl(var(--card)/0.8)] rounded-3xl p-8 md:p-16 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24">
            {/* Hero Text & CTA */}
            <div className="text-center md:text-left animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]">
                Crafting Intuitive User Experiences
              </h1>
              <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-8 max-w-xl mx-auto md:mx-0">
                We design stunning and intuitive interfaces that not only look great but also drive engagement and user satisfaction.
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
              Our Simple Design Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center animate-fade-in-up">
              <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-lg shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:scale-105">
                <div className="p-4 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] mb-4">
                  <FaLightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">1. Discover</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">We research and plan to understand your users and goals.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-lg shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:scale-105">
                <div className="p-4 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] mb-4">
                  <FaPalette className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">2. Design</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">We create wireframes and visual designs for a great experience.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-lg shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:scale-105">
                <div className="p-4 rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] mb-4">
                  <FaCode className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">3. Prototype</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">We build interactive prototypes to test usability and flows.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-[hsl(var(--glass))] rounded-lg shadow-xl border border-[hsl(var(--border))] transition-transform transform hover:scale-105">
                <div className="p-4 rounded-full bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] mb-4">
                  <FaRocket className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">4. Handover</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">We deliver polished designs and assets for seamless development.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- UI/UX Pricing Section --- */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--foreground))]">
              {uiuxService.category}
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
              {uiuxService.description}
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))] rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uiuxService.tiers.map((tier, tierIndex) => (
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

        {/* --- Tech Stack Section --- */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--foreground))]">
              Our Design Stack
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
              We use industry-standard tools to create stunning, functional, and consistent designs.
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
            <h3 className="text-3xl font-bold mb-4 text-[hsl(var(--foreground))]">Ready to Transform Your User Experience?</h3>
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
        <footer className="text-center mt-16 pt-12 border-t border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-2 text-[hsl(var(--secondary))]">
                LogicDirection
              </h3>
              <p className="text-muted-foreground text-sm">
                Crafting digital solutions that drive success.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold mb-2 text-[hsl(var(--foreground))]">Quick Links</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#pricing" className="text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold mb-2 text-[hsl(var(--foreground))]">Contact Us</h4>
              <p className="text-muted-foreground text-sm">
                info@logicdirection.com
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-[hsl(var(--muted-foreground))] mt-8 pt-8 border-t border-[hsl(var(--border))] mx-auto max-w-7xl px-4">
            &copy; 2025 LogicDirection. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default UiuxService;