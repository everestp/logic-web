import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface ServiceDetailModalProps {
  service: {
    icon: any;
    title: string;
    description: string;
    features: string[];
    pricing: {
      basic: { amount: number; description: string; includedFeatures: string[]; notIncludedFeatures: string[] };
      pro: { amount: number; description: string; includedFeatures: string[]; notIncludedFeatures: string[] };
      enterprise: { amount: number; description: string; includedFeatures: string[]; notIncludedFeatures: string[] };
    };
    color: string;
    type: 'project-based' | 'monthly-subscription';
    disclaimer: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceDetailModal({ service, isOpen, onClose }: ServiceDetailModalProps) {
  const navigate = useNavigate();
  if (!service) return null;

  const IconComponent = service.icon;

  const handleGetStarted = () => {
    onClose();
    navigate('/contact');
  };

  const handleQuote = () => {
    onClose();
    navigate('/contact');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-3xl glass rounded-xl shadow-lg border border-border/50 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`p-6 bg-gradient-to-br ${service.color} rounded-t-xl relative`}>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 hover:bg-primary/20 text-primary-foreground"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center`}>
                  <IconComponent className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-primary-foreground">{service.title}</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Overview</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Pricing */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Indicative Pricing</h3>
                <div className="bg-muted/20 border border-border/50 rounded-lg p-4 mb-4 flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> {service.disclaimer}
                  </p>
                </div>
                <div className="grid lg:grid-cols-3 gap-4">
                  {Object.entries(service.pricing).map(([tier, details], idx) => (
                    <motion.div
                      key={tier}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`glass border rounded-xl p-6 flex flex-col ${tier === 'pro' ? 'border-primary glow-primary' : 'border-border/50'}`}
                    >
                      <div className="flex-grow">
                        <Badge className={`mb-2 ${tier === 'pro' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                          {tier === 'pro' ? 'Most Popular' : tier.charAt(0).toUpperCase() + tier.slice(1)}
                        </Badge>
                        <h4 className="text-xl font-bold text-foreground mb-1">
                          Rs. {details.amount.toLocaleString()}+
                         
                        </h4>
                        <p className="text-xs text-muted-foreground mb-4">
                          {service.type === 'monthly-subscription' ? '/month' : '/project'}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">{details.description}</p>
                        
                        {/* Included Features List */}
                        {details.includedFeatures && details.includedFeatures.length > 0 && (
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-foreground mb-2">Features Included:</h5>
                            <ul className="space-y-2">
                              {details.includedFeatures.map((feature, featureIdx) => (
                                <li key={featureIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Not Included Features List */}
                        {details.notIncludedFeatures && details.notIncludedFeatures.length > 0 && (
                          <div>
                            <h5 className="text-sm font-semibold text-foreground mb-2">Not Included:</h5>
                            <ul className="space-y-2">
                              {details.notIncludedFeatures.map((feature, featureIdx) => (
                                <li key={featureIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <X className="h-4 w-4 text-destructive flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <Button 
                        variant={tier === 'pro' ? 'glow' : 'outline'}
                        className="w-full mt-6"
                        onClick={handleGetStarted}
                      >
                        Start with {tier.charAt(0).toUpperCase() + tier.slice(1)}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* General CTA */}
              <div className="flex flex-col sm:flex-row gap-3 border-t border-border/50 pt-4 mt-6">
                <Button variant="glow" className="flex-1 group bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleGetStarted}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="flex-1 border-border text-foreground hover:bg-muted/20" onClick={handleQuote}>
                  Request Quote
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
