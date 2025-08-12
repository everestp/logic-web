import { motion } from 'framer-motion'

export default function AnimatedLogo() {
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    }),
  }

  const logoText = "LogicDirection"

  return (
    <div className="flex items-center space-x-2">
      {/* Rotating Logo */}
      <motion.img
        src="/logo.png"
        alt="LogicDirection Logo"
        className="h-10 w-10"
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          },
          scale: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          },
        }}
      />

      {/* Animated Text */}
      <div className="flex">
        {logoText.split('').map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
            className="text-2xl font-bold gradient-text"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  )
}