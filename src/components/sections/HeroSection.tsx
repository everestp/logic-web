import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Target, Puzzle, Settings, Zap, Headset } from 'lucide-react'

export default function HeroSection() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/contact')
  }

  const handleViewPortfolio = () => {
    navigate('/portfolio')
  }

  return (
    <section className=" pt-[50px] relative flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="space-y-8"
        >
         

          {/* Main Heading */}
        <div className="space-y-6 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
  <motion.h1
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 120 }}
    className="text-4xl sm:text-5xl lg:text-7xl lg:leading-[1.3] font-bold tracking-tight leading-tight text-foreground text-center"
  >
    <span className="block">Creative Solutions To</span>
    <span className="block relative">
      <span className="gradient-text">Digital Challenges</span>
      <motion.div
        className="absolute -inset-2 rounded-lg bg-primary/20 blur-lg dark:bg-primary/30 z-[-1]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
    className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center"
  >
    We offer a complete digital solution from building custom websites to crafting standout brand identities and executing results-driven marketing campaigns. Whether you’re launching a startup or refreshing an established business, we help you make a lasting digital impact.
  </motion.p>
</div>


          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-glow)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Button
                variant="glow"
                size="xl"
                onClick={handleGetStarted}
                className="group transition-smooth bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/80"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-glow)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Button
                variant="glass"
                size="xl"
                onClick={handleViewPortfolio}
                className="group transition-smooth hover:bg-primary/10 dark:hover:bg-primary/20"
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                View Our Work
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground ml-6"
            >
              <div className="flex items-center space-x-2 text-primary font-semibold">
                <Headset className="w-5 h-5" />
                <span className="text-foreground">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12"
          >
            {[
              {
                number: '100%',
                label: 'Client Focused Approach',
                icon: <Target className="w-8 h-8 text-primary" />,
              },
              {
                number: 'Tailored',
                label: 'Solutions for Every Business',
                icon: <Puzzle className="w-8 h-8 text-primary" />,
              },
              {
                number: 'Next-Gen',
                label: 'Tech Stack & Tools',
                icon: <Settings className="w-8 h-8 text-primary" />,
              },
              {
                number: 'Fast',
                label: 'Project Delivery Time',
                icon: <Zap className="w-8 h-8 text-primary" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-glow)' }}
                className="glass rounded-[--radius] p-6 text-center hover:glow-primary transition-smooth bg-card dark:bg-muted flex flex-col items-center"
              >
                <div className="mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-semibold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-primary">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}