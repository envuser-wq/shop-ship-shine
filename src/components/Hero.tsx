import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, Globe } from 'lucide-react';
import heroImage from '@/assets/logistics-hero.jpg';

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Shop & Send Logistics - Express Air Cargo"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 opacity-20 float-animation">
        <Globe className="h-24 w-24 text-accent" />
      </div>
      <div className="absolute bottom-32 left-16 opacity-20 float-animation" style={{ animationDelay: '2s' }}>
        <Clock className="h-16 w-16 text-logistics-blue" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-secondary rounded-full mb-8 slide-in-up">
            <CheckCircle className="h-4 w-4 text-accent mr-2" />
            <span className="text-sm font-medium">Trusted UK-Ghana Express Delivery</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 slide-in-up">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Swift Delivery
            </span>
            <br />
            <span className="text-foreground">Across Continents</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto slide-in-up">
            Professional express air cargo services between UK and Ghana. 
            Experience lightning-fast delivery with British Airways and KLM partnerships.
          </p>

          {/* Key Features Row */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 slide-in-up">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 glow-hover">
              <h3 className="font-semibold text-lg mb-2">UK → Ghana</h3>
              <p className="text-accent font-bold text-2xl">1-2 Days</p>
              <p className="text-sm text-muted-foreground">with British Airways</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 glow-hover">
              <h3 className="font-semibold text-lg mb-2">Ghana → UK</h3>
              <p className="text-accent font-bold text-2xl">5-7 Days</p>
              <p className="text-sm text-muted-foreground">with KLM Airlines</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 glow-hover">
              <h3 className="font-semibold text-lg mb-2">Coverage</h3>
              <p className="text-accent font-bold text-2xl">3 Offices</p>
              <p className="text-sm text-muted-foreground">UK, Accra, Kumasi</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-in-up">
            <Button 
              size="lg"
              className="bg-gradient-accent hover:shadow-purple-glow transition-all duration-300 px-8 py-4 text-lg"
              onClick={scrollToContact}
            >
              Book Express Delivery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 slide-in-up">
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">500+</p>
              <p className="text-sm text-muted-foreground">Monthly Shipments</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">99.8%</p>
              <p className="text-sm text-muted-foreground">On-Time Delivery</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">24/7</p>
              <p className="text-sm text-muted-foreground">Customer Support</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">5★</p>
              <p className="text-sm text-muted-foreground">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};