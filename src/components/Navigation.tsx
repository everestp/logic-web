import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, ChevronRight, PhoneCall, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import AnimatedLogo from './AnimatedLogo'

const navigation = [
  { name: 'Home', href: '#home', path: '/' },
  {
    name: 'About',href: '#home', path: '/about' 
    
  },
  {
    name: 'Services',
    dropdown: [
      {
        name: 'Development',
        subDropdown: [
          { name: 'Web Development', href: '#web-development', path: '/services/web-dev' },
          { name: 'App Development', href: '#app-development', path: '/services/app-dev' },
          { name: 'UI/UX', href: '#ui-ux', path: '/services/ui-ux' },
          { name: 'DevOps-CI/CD', href: '#devops', path: '/services/devops' },
          { name: 'AI-ML', href: '#ai-ml', path: '/services/ai-ml' },
        ],
      },
      { name: 'Digital Marketing', href: '#digital-marketing', path: '/services/digital-marketing' },
    ],
  },
   { name: 'Our Work', href: '#our-work', path: '/portfolio' },
  { name: 'Contact', href: '#contact', path: '/contact' },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })
  const location = useLocation()
  const navigate = useNavigate()
  const mobileMenuRef = useRef(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const isActive = (path: string) => location.pathname === path

  const handleNavigation = (href: string, path: string, event?: React.MouseEvent) => {
    event?.preventDefault()
    navigate(path)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
    setOpenDropdown(null)
    setOpenSubDropdown(null)
  }

  const toggleDropdown = (name: string, event: React.MouseEvent) => {
    event.preventDefault()
    setOpenDropdown(openDropdown === name ? null : name)
    if (name !== 'Development') {
      setOpenSubDropdown(null)
    }
  }

  const toggleSubDropdown = (name: string, event: React.MouseEvent) => {
    event.preventDefault()
    setOpenSubDropdown(openSubDropdown === name ? null : name)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setOpenDropdown(null)
        setOpenSubDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 dark:bg-gray-900/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" onClick={(e) => handleNavigation('#home', '/', e)} className="flex-shrink-0">
            <AnimatedLogo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6" ref={dropdownRef}>
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={(e) => toggleDropdown(item.name, e)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isActive(item.path || '')
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`inline-block ml-1 w-4 h-4 transition-transform duration-300 ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    onClick={(e) => handleNavigation(item.href, item.path, e)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isActive(item.path)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 mt-2 w-56 bg-background border border-white/10 rounded-lg shadow-lg z-40 dark:bg-gray-800"
                    >
                      {item.dropdown.map((drop) => (
                        <div key={drop.name} className="relative">
                          {drop.subDropdown ? (
                            <button
                              onClick={(e) => toggleSubDropdown(drop.name, e)}
                              className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-accent/50 hover:text-foreground rounded-md dark:hover:bg-gray-700"
                            >
                              {drop.name}
                              <ChevronRight
                                className={`inline-block ml-1 w-4 h-4 float-right transition-transform duration-300 ${
                                  openSubDropdown === drop.name ? 'rotate-90' : ''
                                }`}
                              />
                            </button>
                          ) : (
                            <Link
                              to={drop.path}
                              onClick={(e) => handleNavigation(drop.href, drop.path, e)}
                              className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-accent/50 hover:text-foreground rounded-md dark:hover:bg-gray-700"
                            >
                              {drop.name}
                            </Link>
                          )}

                          {/* Sub Dropdown */}
                          <AnimatePresence>
                            {drop.subDropdown && openSubDropdown === drop.name && (
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-0 left-full mt-0 ml-2 w-56 bg-background border border-white/10 rounded-lg shadow-lg z-50 dark:bg-gray-800"
                              >
                                {drop.subDropdown.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.path}
                                    onClick={(e) => handleNavigation(sub.href, sub.path, e)}
                                    className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-accent/50 hover:text-foreground rounded-md dark:hover:bg-gray-700"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="tel:9864958071"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-xl text-sm shadow-md transition-colors dark:bg-green-700 dark:hover:bg-green-800"
              animate={{
                boxShadow: [
                  '0 0 2px rgba(34,197,94, 0.3)',
                  '0 0 25px rgba(34,197,94, 1)',
                  '0 0 2px rgba(34,197,94, 0.3)',
                ],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'linear',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <PhoneCall className="w-5 h-5" />
              9864 958 071
            </motion.a>
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDarkMode ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </motion.button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/10 dark:bg-gray-900/80"
          >
            <div className="px-4 py-3 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <button
                      onClick={(e) => toggleDropdown(item.name, e)}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground rounded-md hover:bg-accent/50 hover:text-foreground dark:hover:bg-gray-700"
                    >
                      {item.name}
                      <ChevronDown
                        className={`inline-block ml-1 w-4 h-4 float-right transition-transform duration-300 ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={(e) => handleNavigation(item.href, item.path, e)}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground rounded-md hover:bg-accent/50 hover:text-foreground dark:hover:bg-gray-700"
                    >
                      {item.name}
                    </Link>
                  )}
                  <AnimatePresence>
                    {item.dropdown && openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 space-y-1"
                      >
                        {item.dropdown.map((drop) => (
                          <div key={drop.name}>
                            {drop.subDropdown ? (
                              <button
                                onClick={(e) => toggleSubDropdown(drop.name, e)}
                                className="block w-full text-left px-3 py-1 text-sm text-muted-foreground rounded hover:bg-accent/30 hover:text-foreground dark:hover:bg-gray-600"
                              >
                                ↳ {drop.name}
                                <ChevronRight
                                  className={`inline-block ml-1 w-4 h-4 float-right transition-transform duration-300 ${
                                    openSubDropdown === drop.name ? 'rotate-90' : ''
                                  }`}
                                />
                              </button>
                            ) : (
                              <Link
                                to={drop.path}
                                onClick={(e) => handleNavigation(drop.href, drop.path, e)}
                                className="block w-full text-left px-3 py-1 text-sm text-muted-foreground rounded hover:bg-accent/30 hover:text-foreground dark:hover:bg-gray-600"
                              >
                                ↳ {drop.name}
                              </Link>
                            )}
                            <AnimatePresence>
                              {drop.subDropdown && openSubDropdown === drop.name && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="pl-4 space-y-1"
                                >
                                  {drop.subDropdown.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      to={sub.path}
                                      onClick={(e) => handleNavigation(sub.href, sub.path, e)}
                                      className="block w-full text-left px-3 py-1 text-sm text-muted-foreground rounded hover:bg-accent/20 hover:text-foreground dark:hover:bg-gray-500"
                                    >
                                      ↳ {sub.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-2">
              <motion.a
               href="tel:9864958071"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-xl text-sm shadow-md transition-colors dark:bg-green-700 dark:hover:bg-green-800"
              animate={{
                boxShadow: [
                  '0 0 2px rgba(34,197,94, 0.3)',
                  '0 0 25px rgba(34,197,94, 1)',
                  '0 0 2px rgba(34,197,94, 0.3)',
                ],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'linear',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <PhoneCall className="w-5 h-5" />
              9864 958 071
            </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation