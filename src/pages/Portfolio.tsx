import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink, Github } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    title: 'Carten.xyz - E-Commerce Platform',
    description: 'Carten.xyz is a full-featured e-commerce website built with Spring Boot and React, offering secure payments, an intuitive shopping experience, and a powerful admin panel.',
    image: '/carten.png',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Stripe'],
    category: 'Web Development',
    metrics: 'Streamlined operations and improved customer satisfaction',
    testimonial: 'LogicDirection delivered a scalable and secure e-commerce solution tailored to our needs.'
  },
  {
    id: 2,
    title: 'BBC College Website',
    description: 'Dynamic college website featuring real-time notices, interactive gallery, and complete syllabus sections for CSIT and BCA programs. Built for easy updates and smooth user experience.',
    image: '/bb.png',
    tech: ['React', 'Appwrite'],
    category: 'Web Development',
    metrics: 'Improved student engagement and streamlined information sharing',
    testimonial: 'LogicDirection delivered a modern, feature-rich college portal that keeps our students informed and engaged.'
  },
  
]

const categories = ['All', 'Web Development', 'Mobile Development', 'AI Solutions', 'Cloud Infrastructure', 'Design & Branding', 'Digital Marketing']

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section ref={ref} className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4 mb-16"
            >
              <Badge variant="outline" className="text-sm">Our Portfolio</Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Projects That <span className="gradient-text">Drive Results</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore our portfolio of successful projects across various industries and technologies. 
                Each project represents our commitment to excellence and innovation.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            {/* Portfolio Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Badge variant="secondary" className="mb-2">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      
                      {/* Tech Stack */}
                      {/* <div className="flex flex-wrap gap-1 mb-4">
                        {item.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div> */}

                      {/* Metrics */}
                      {/* <div className="text-sm font-medium text-primary">
                        {item.metrics}
                      </div> */}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-16"
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join our portfolio of success stories. Let's discuss how we can help you achieve 
                  remarkable results for your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="glow" size="lg">
                    Start Your Project
                  </Button>
                  <Button variant="outline" size="lg">
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;