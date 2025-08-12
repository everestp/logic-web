import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'

import Services from './Services'
import HomeService from '@/components/sections/HomeService'
import PlanOfAction from '@/components/sections/PlanOfAction'


const Index = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col xl:px-0">
    <Navigation />

    <div className="flex flex-col space-y-24">
      <HeroSection />
      <HomeService />
      <PlanOfAction />
      <ServicesSection />
    </div>

    <Footer />
  </div>
  );
};

export default Index;
