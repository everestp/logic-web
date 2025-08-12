import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket, 
  ArrowRight,
  CheckCircle,
  HeadphonesIcon
} from 'lucide-react';

const actionSteps = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'We dive deep into your business challenges, market landscape, and user needs to identify the core problems.',
    icon: <Search />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description: 'Transform insights into actionable strategies with clear roadmaps and measurable objectives.',
    icon: <Lightbulb />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    step: '03',
    title: 'Development & Design',
    description: 'Build cutting-edge solutions using modern technologies and user-centered design principles.',
    icon: <Code />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    step: '04',
    title: 'Testing & Refinement',
    description: 'Rigorous testing ensures your solution performs flawlessly across all scenarios and devices.',
    icon: <TestTube />,
     color: 'from-green-500 to-emerald-500'
  },
  {
    step: '05',
    title: 'Launch & Deploy',
    description: 'Strategic deployment with comprehensive monitoring to ensure smooth market entry.',
    icon: <Rocket />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    step: '06',
    title: 'Support & Scale',
    description: 'Ongoing optimization and scaling to adapt with your growing business needs.',
    icon: <HeadphonesIcon />,
    color: 'from-green-500 to-emerald-500'
  }
];

const PlanOfAction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Our Strategic
            <span className="text-primary"> Plan of Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            From concept to launch, we follow a proven methodology that transforms your business challenges into innovative digital solutions.
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground flex-wrap">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Proven Process
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Transparent Communication
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Measurable Results
            </span>
          </div>
        </motion.div>

        {/* Steps Timeline for Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <motion.table 
            className="w-full border border-border rounded-xl overflow-hidden text-left shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }}
          >
            <thead className="bg-muted text-muted-foreground">
              <tr className="text-sm">
                <th className="px-4 py-3 font-semibold">Step</th>
                <th className="px-4 py-3 font-semibold">Title</th>
                <th className="px-4 py-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {actionSteps.map((step, index) => (
                <motion.tr 
                  key={index} 
                  className="border-t border-border transition-smooth hover:bg-muted/50"
                  initial={{ opacity: 0, x: -30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: index * 0.1 }}
                >
                  <td className="px-4 py-4 font-mono text-primary font-bold whitespace-nowrap flex items-center gap-2">
                    <span>{step.icon}</span>
                    <span>{step.step}</span>
                  </td>
                  <td className="px-4 py-4 font-semibold text-foreground whitespace-nowrap">{step.title}</td>
                  <td className="px-4 py-4 text-muted-foreground max-w-sm">{step.description}</td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>

        {/* Steps for Mobile View */}
        <motion.div
          className="md:hidden space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {actionSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-card rounded-lg shadow-md border border-border"
              variants={stepVariants}
            >
              <div className="flex items-center mb-4">
                <span className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${step.color} mr-4`}>{step.step}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground mt-2">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PlanOfAction;