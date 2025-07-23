import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, Globe } from 'lucide-react';
import heroImage from '@/assets/logistics-hero.jpg';
import teamImage from '@/assets/team-working.jpg';

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      {/* Dark geometric background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full transform -translate-x-32 -translate-y-32"></div>
            <div className="absolute top-20 right-0 w-48 h-48 bg-logistics-blue rounded-full transform translate-x-24 -translate-y-12"></div>
            <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-accent rounded-full transform -translate-x-40 translate-y-40"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 opacity-10 float-animation">
        <Globe className="h-24 w-24 text-white" />
      </div>
      <div className="absolute bottom-32 left-16 opacity-10 float-animation" style={{ animationDelay: '2s' }}>
        <Clock className="h-16 w-16 text-white" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-white slide-in-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <CheckCircle className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm font-medium text-white/90">Trusted UK-Ghana Express Delivery</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Where Swift</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-logistics-blue bg-clip-text text-transparent">
                Logistics Meets
              </span>
              <br />
              <span className="text-white">Reliable Delivery</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/80 mb-12 max-w-xl leading-relaxed">
              We provide high-converting logistics solutions for businesses and individuals 
              that refuse to settle for good enough express delivery services.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg hover:shadow-purple-glow transition-all duration-300"
                onClick={scrollToContact}
              >
                Book a Shipment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </div>

            {/* Key Features Row */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent mb-1">1-2</p>
                <p className="text-sm text-white/60">Days UK→GH</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent mb-1">5-7</p>
                <p className="text-sm text-white/60">Days GH→UK</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent mb-1">3</p>
                <p className="text-sm text-white/60">Office Locations</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="slide-in-up lg:pl-8">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={teamImage}
                  alt="Professional logistics team working on express delivery solutions"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-elevated float-animation">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">99.8%</p>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                </div>
              </div>

              {/* Floating Contact Card */}
              <div className="absolute -top-6 -right-6 bg-accent rounded-xl p-4 shadow-elevated float-animation" style={{ animationDelay: '1s' }}>
                <div className="text-center text-white">
                  <p className="text-lg font-bold">24/7</p>
                  <p className="text-xs opacity-90">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};