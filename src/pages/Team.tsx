import Navigation from '@/components/Navigation';
import { Users, ArrowRight } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Anjali Verma',
      role: 'Chief Technology Officer',
      description: 'Oversees technology strategy and innovation across all services.',
      image: 'https://via.placeholder.com/300x300?text=Anjali+Verma',
    },
    {
      name: 'Vikram Singh',
      role: 'Lead DevOps Engineer',
      description: 'Expert in CI/CD pipelines and cloud infrastructure management.',
      image: 'https://via.placeholder.com/300x300?text=Vikram+Singh',
    },
    {
      name: 'Priyanka Desai',
      role: 'Senior Software Developer',
      description: 'Specializes in building scalable web and mobile applications.',
      image: 'https://via.placeholder.com/300x300?text=Priyanka+Desai',
    },
    {
      name: 'Rahul Kapoor',
      role: 'Project Manager',
      description: 'Ensures seamless project execution and client satisfaction.',
      image: 'https://via.placeholder.com/300x300?text=Rahul+Kapoor',
    },
    {
      name: 'Meera Nair',
      role: 'UI/UX Designer',
      description: 'Crafts intuitive and visually appealing user experiences.',
      image: 'https://via.placeholder.com/300x300?text=Meera+Nair',
    },
    {
      name: 'Amit Joshi',
      role: 'Security Specialist',
      description: 'Ensures robust security for all systems and applications.',
      image: 'https://via.placeholder.com/300x300?text=Amit+Joshi',
    },
    {
      name: 'Sneha Reddy',
      role: 'Data Analyst',
      description: 'Drives data-driven decisions with advanced analytics.',
      image: 'https://via.placeholder.com/300x300?text=Sneha+Reddy',
    },
    {
      name: 'Karan Malhotra',
      role: 'Business Development Manager',
      description: 'Builds strategic partnerships and drives business growth.',
      image: 'https://via.placeholder.com/300x300?text=Karan+Malhotra',
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
            {/* <p className="text-xl font-medium text-[hsl(var(--secondary))]">
              Our Team
            </p> */}
            {/*  */}
          </div>
        </div>

        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--foreground))]">
            Meet Our Diverse Team
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
            Our multidisciplinary team brings expertise in technology, design, and business to deliver innovative solutions.
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))] rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-6 transition-all duration-500 hover:scale-105 bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-md hover:shadow-lg hover:-translate-y-2 transform-gpu animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl mb-6 bg-glass group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-[hsl(var(--primary))] mb-4">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-3xl p-12 text-center relative overflow-hidden bg-[hsl(var(--card))] border border-[hsl(var(--border))] animate-fade-in-up"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary)/0.2)] via-[hsl(var(--accent)/0.1)] to-[hsl(var(--background))] opacity-50"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4 text-[hsl(var(--foreground))]">Join Our Team</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-[hsl(var(--muted-foreground))]">
              Passionate about technology and innovation? Contact us to explore opportunities to join our dynamic team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:careers@logicdirection.com"
                className="group px-8 py-4 rounded-2xl font-semibold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)] glow-primary transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="tel:+9779864958071"
                className="px-8 py-4 rounded-2xl font-semibold border-2 border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary)/0.1)] transform hover:scale-105"
              >
                Contact HR
              </a>
            </div>
          </div>
        </div>
{/* 
        <div className="text-center mt-16 pt-12 border-t border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] animate-fade-in-up">
          <div className="space-y-3">
            <p className="text-lg font-medium"> © {new Date().getFullYear()} LogicDirection. All rights reserved.</p>
            <p className="text-sm opacity-80"> Creative Solutions To Digital Challenges</p>
            <div className="flex justify-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full"></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Team;