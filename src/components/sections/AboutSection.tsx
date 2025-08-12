import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Team from '@/pages/Team'

const values = [
  {
    title: 'Innovation First',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.',
    icon: '🚀'
  },
  {
    title: 'Client-Centric',
    description: 'Your success is our success. We prioritize understanding and exceeding your expectations.',
    icon: '🎯'
  },
  {
    title: 'Quality Driven',
    description: 'We maintain the highest standards in every project, ensuring robust and scalable solutions.',
    icon: '⭐'
  },
  {
    title: 'Continuous Growth',
    description: 'We stay ahead of industry trends and continuously improve our skills and processes.',
    icon: '📈'
  }
]

const teamMembers = [
  {
    name: 'Alex Rodriguez',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    bio: 'Visionary leader with 10+ years in tech innovation and business strategy.'
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1bb?w=300&h=300&fit=crop&crop=face',
    bio: 'Technical architect specializing in scalable systems and AI integration.'
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    bio: 'Full-stack expert with passion for clean code and user experience.'
  },
  {
    name: 'Emily Davis',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    bio: 'Creative director focused on human-centered design and brand identity.'
  }
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section ref={ref} className=" pt-[10px] bg-gradient-to-b from-background to-muted/20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <Badge variant="outline" className="text-sm">About LogicDirection</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Building the <span className="gradient-text">Future Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-justify">
  LogicDirection has grown from a small startup to a trusted technology partner, helping businesses transform their digital landscape with innovative solutions. We are a creative digital agency dedicated to helping brands stand out in a crowded online world. From sleek website design to powerful digital marketing campaigns, we combine creativity, strategy, and technology to bring your vision to life.
</p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-2xl p-8 mb-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
          Creative Solutions To Digital Challenges
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {values.map((value, index) => (
            <motion.div key={value.title} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <Team/>
      </div>
    </section>
  )
}