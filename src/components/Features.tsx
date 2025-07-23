import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Zap, Globe, Headphones, Star, Truck } from 'lucide-react';
import laptopComputer from '@/assets/laptop-computer.jpg';
import glassBuilding from '@/assets/glass-building.jpg';

export const Features = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Express delivery in 1-2 days UK to Ghana, ensuring your packages arrive when you need them most.",
      color: "text-logistics-blue"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Insured",
      description: "Every shipment is fully insured and handled with maximum security throughout the journey.",
      color: "text-accent"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Network",
      description: "Strategic partnerships with British Airways and KLM for reliable international coverage.",
      color: "text-logistics-purple"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service across all our UK, Accra, and Kumasi locations.",
      color: "text-logistics-gold"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Premium Quality",
      description: "White-glove service with professional packaging and careful handling of all items.",
      color: "text-accent"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Door-to-Door",
      description: "Complete pickup and delivery service making shipping convenient and hassle-free.",
      color: "text-logistics-blue"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-accent">Shop & Send</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference with our premium logistics services designed for modern businesses and individuals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="stagger-animation glow-hover border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`${feature.color} mb-4 inline-block`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Section with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center slide-in-up">
          {/* Left Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={glassBuilding}
                alt="Modern office building representing our professional logistics services"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            
            {/* Floating Office Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-elevated float-animation">
              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">3</p>
                  <p className="text-sm text-muted-foreground">Global Offices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-4xl font-bold mb-6">Trusted by Thousands</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of satisfied customers who trust us with their most important shipments 
              across UK and Ghana.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-4xl font-bold text-accent mb-2">5000+</p>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">99.8%</p>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">10</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">3</p>
                <p className="text-muted-foreground">Office Locations</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-subtle rounded-xl p-6">
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "Shop & Send has been instrumental in our business operations. Their reliability and speed 
                have helped us maintain strong relationships with our clients across continents."
              </blockquote>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-logistics-gold text-logistics-gold" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">— Sarah K., Business Owner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};