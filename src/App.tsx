import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DevOpsService from "./pages/DevOpsService";
import AppService from "./pages/AppService";
import DigitalMarketingService from "./pages/DIgitalMarketingService";
import WebService from "./pages/WebService";
import AIMLSolution from "./pages/AIMLSolution";
import UiuxService from "./pages/UiuxService";
import Team from "./pages/Team";
import OurWork from "./pages/OurWork";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/services/web-dev" element={<WebService/>} />
          <Route path="/services/app-dev" element={<AppService/>} />
               <Route path="/services/devops" element={<DevOpsService/>} />
                <Route path="/services/ai-ml" element={<AIMLSolution/>} />

            <Route path="/services/ui-ux" element={<UiuxService/>} />
               <Route path="/services/digital-marketing" element={<DigitalMarketingService/>} />
             <Route path="/about/introduction" element={<About/>} />
           <Route path="/services" element={<Services/>} />
            <Route path="/about/team" element={<Team/>} />
            <Route path="/our-work" element={<OurWork/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
