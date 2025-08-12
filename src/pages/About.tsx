import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AboutSection from '@/components/sections/AboutSection'

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;