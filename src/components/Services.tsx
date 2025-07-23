import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Package, Clock, MapPin, ArrowRight } from 'lucide-react';
import womanLaptop from '@/assets/woman-laptop.jpg';
import laptopComputer from '@/assets/laptop-computer.jpg';

export const Services = () => {
  const services = [
    {
      title: "UK to Ghana Express",
      description: "Lightning-fast delivery from United Kingdom to Ghana with our premium British Airways partnership.",
      duration: "1-2 Days",
      schedule: "Every Saturday",
      airline: "British Airways",
      features: ["Priority Handling", "Real-time Tracking", "Insurance Included", "SMS Notifications"],
      icon: <Plane className="h-8 w-8" />,
      gradient: "from-logistics-blue to-accent"
    },
    {
      title: "Ghana to UK Express", 
      description: "Reliable cargo service from Ghana to United Kingdom with our trusted KLM Airlines partnership.",
      duration: "5-7 Days",
      schedule: "Tuesday & Thursday",
      airline: "KLM Airlines",
      features: ["Secure Packaging", "Door-to-door", "Customs Clearance", "24/7 Support"],
      icon: <Package className="h-8 w-8" />,
      gradient: "from-accent to-logistics-purple"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-accent">Express Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our premium air cargo services designed for speed, reliability, and peace of mind.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`stagger-animation glow-hover border-0 shadow-elevated bg-gradient-to-br ${service.gradient} relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 transform rotate-12 opacity-50">
                  {service.icon}
                </div>
                <div className="absolute bottom-4 left-4 transform -rotate-12 opacity-30">
                  <MapPin className="h-12 w-12" />
                </div>
              </div>

              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <div className="text-right text-white">
                    <p className="text-2xl font-bold">{service.duration}</p>
                    <p className="text-sm opacity-90">{service.schedule}</p>
                  </div>
                </div>
                <CardTitle className="text-2xl text-white mb-2">{service.title}</CardTitle>
                <p className="text-white/90 leading-relaxed">{service.description}</p>
              </CardHeader>

              <CardContent className="relative z-10">
                {/* Airline Partnership */}
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Plane className="h-5 w-5 text-white" />
                    <span className="text-white font-semibold">Partnership with {service.airline}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="bg-white/20 rounded-full p-1">
                        <Clock className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant="secondary"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Book This Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services with Images */}
        <div className="grid lg:grid-cols-2 gap-12 items-center slide-in-up">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Additional Services Available</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Package className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Custom Packaging</h4>
                  <p className="text-muted-foreground">Professional packaging for fragile and valuable items with specialized handling protocols.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Door-to-Door Service</h4>
                  <p className="text-muted-foreground">Complete pickup and delivery service to your exact location for maximum convenience.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Express Handling</h4>
                  <p className="text-muted-foreground">Priority processing for urgent shipments with dedicated handling teams.</p>
                </div>
              </div>
            </div>
            <Button 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              onClick={scrollToContact}
            >
              Learn More About Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={womanLaptop}
                alt="Professional woman working on laptop managing logistics operations"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            
            {/* Floating Features Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-elevated float-animation">
              <div className="text-center">
                <p className="text-2xl font-bold text-accent mb-1">24/7</p>
                <p className="text-sm text-muted-foreground">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};