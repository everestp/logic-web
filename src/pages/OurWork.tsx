import Navigation from '@/components/Navigation';
import { ArrowRight, Briefcase } from 'lucide-react';

const OurWork = () => {
  const projects = [
    {
      title: 'E-Commerce Platform Optimization',
      category: 'DevOps & Cloud',
      description: 'Streamlined CI/CD pipelines and cloud infrastructure for a leading online retailer, reducing deployment time by 60%.',
      image: 'https://via.placeholder.com/600x400?text=E-Commerce+Platform',
      details: [
        'Implemented Kubernetes-based orchestration',
        'Multi-cloud deployment with AWS and Azure',
        'Automated scaling for peak traffic',
        'Enhanced security with zero-trust policies',
      ],
    },
    {
      title: 'AI-Powered Customer Insights',
      category: 'AI/ML Solutions',
      description: 'Developed a custom AI model for a retail chain to analyze customer behavior, increasing sales conversions by 25%.',
      image: 'https://via.placeholder.com/600x400?text=Customer+Insights',
      details: [
        'Built NLP model for sentiment analysis',
        'Integrated real-time data pipelines',
        'Deployed on scalable cloud infrastructure',
        'Provided ongoing model optimization',
      ],
    },
    {
      title: 'Enterprise Web Application',
      category: 'Software Development',
      description: 'Designed and deployed a robust web application for a financial services firm, improving operational efficiency by 40%.',
      image: 'https://via.placeholder.com/600x400?text=Web+Application',
      details: [
        'Developed with React and Node.js',
        'Integrated secure payment gateways',
        'Implemented responsive UI/UX design',
        'Ensured compliance with industry standards',
      ],
    },
    {
      title: 'Cybersecurity Overhaul',
      category: 'Security Solutions',
      description: 'Conducted a comprehensive security audit and implemented advanced protections for a healthcare provider, reducing vulnerabilities by 80%.',
      image: 'https://via.placeholder.com/600x400?text=Cybersecurity',
      details: [
        'Performed penetration testing',
        'Set up advanced firewall configurations',
        'Implemented encryption protocols',
        'Provided staff training on security best practices',
      ],
    },
  ];

  return (
    <div className="min-h-screen transition-all duration-500 bg-[hsl(var(--background))] overflow-hidden">
      {/* Background glowing elements */}
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
            <Navigation />
            <p className="text-xl font-medium text-[hsl(var(--secondary))]">
              Our Work
            </p>
            
          </div>
        </div>

        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--foreground))]">
            Our Portfolio
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
            Explore our diverse range of successful projects, showcasing our expertise in delivering innovative technology solutions.
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))] rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-6 transition-all duration-500 hover:scale-105 bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-md hover:shadow-lg hover:-translate-y-2 transform-gpu animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold mb-3 text-[hsl(var(--foreground))]">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))] mb-4">
                  {project.description}
                </p>
                <div className="space-y-2 mb-6">
                  {project.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3 animate-fade-in-right" style={{ animationDelay: `${0.2 + detailIndex * 0.05}s` }}>
                      <div className="p-1 rounded-full bg-[hsl(var(--success)/0.2)]">
                        <Briefcase className="w-4 h-4 text-[hsl(var(--success))]" />
                      </div>
                      <span className="text-sm text-[hsl(var(--foreground))]">{detail}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="mailto:logicdirection@gmail.com?subject=Inquiry%20about%20Our%20Work"
                  className="group inline-flex px-6 py-3 rounded-2xl font-semibold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)] glow-primary transform hover:scale-105 items-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-3xl p-12 text-center relative overflow-hidden bg-[hsl(var(--card))] border border-[hsl(var(--border))] animate-fade-in-up"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary)/0.2)] via-[hsl(var(--accent)/0.1)] to-[hsl(var(--background))] opacity-50"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4 text-[hsl(var(--foreground))]">Ready to Start Your Project?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
              Let’s collaborate to bring your vision to life with our cutting-edge technology solutions.
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
            <p className="text-sm opacity-80">Empowering businesses with innovative technology solutions</p>
            <div className="flex justify-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;