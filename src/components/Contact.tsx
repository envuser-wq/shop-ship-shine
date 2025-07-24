import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      location: "United Kingdom",
      address: "London Office",
      phone: "07916223257",
      email: "uk@shopandsend.co.uk",
      hours: "Mon-Sat: 9AM-6PM",
      flag: "🇬🇧"
    },
    {
      location: "Accra, Ghana",
      address: "Accra Branch",
      phone: "0544410371 / 020956695902",
      email: "accra@shopandsend.co.uk",
      hours: "Mon-Sat: 8AM-7PM",
      flag: "🇬🇭"
    },
    {
      location: "Kumasi, Ghana", 
      address: "Kumasi Branch",
      phone: "0553483045 / 0209566313",
      email: "kumasi@shopandsend.co.uk",
      hours: "Mon-Sat: 8AM-7PM",
      flag: "🇬🇭"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 hero-pattern opacity-30"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 slide-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6">
            <Send className="w-4 h-4 mr-2" />
            Fast & Reliable Shipping
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to ship with confidence? Our logistics experts are standing by to provide personalized quotes and handle your express delivery needs across UK and Ghana.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2 slide-in-up">
            <Card className="shadow-elevated border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold flex items-center">
                  <Send className="h-8 w-8 text-accent mr-3" />
                  Get Your Free Quote
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and we'll get back to you within 2 hours with a personalized shipping quote.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="h-12 text-base"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="h-12 text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+44 7912 345678"
                        className="h-12 text-base"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Service Type *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 border border-input rounded-md bg-background text-base focus:ring-2 focus:ring-accent focus:border-transparent"
                        required
                      >
                        <option value="">Choose your service</option>
                        <option value="uk-ghana">🇬🇧 ➜ 🇬🇭 UK to Ghana (1-2 days)</option>
                        <option value="ghana-uk">🇬🇭 ➜ 🇬🇧 Ghana to UK (5-7 days)</option>
                        <option value="both-ways">🔄 Both Ways Service</option>
                        <option value="quote">💼 Custom Quote Request</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Shipping Details *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe what you're shipping, package dimensions, weight, and any special requirements..."
                      rows={5}
                      className="text-base resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-14 bg-gradient-accent hover:shadow-purple-glow transition-all duration-300 text-lg font-semibold"
                  >
                    Get Free Quote & Track Your Shipment
                    <Send className="ml-3 h-6 w-6" />
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    💡 <strong>Quick Response:</strong> We typically respond within 2 hours during business hours
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6 slide-in-up">
            <Card className="bg-gradient-accent text-white border-0 overflow-hidden relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <Phone className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
                  <p className="opacity-90 mb-6">Need immediate assistance? Our logistics experts are always ready to help.</p>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    variant="secondary"
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 h-12 text-base font-semibold"
                    asChild
                  >
                    <a href="tel:07916223257">📞 Call UK: 07916223257</a>
                  </Button>
                  
                  <Button 
                    variant="secondary"
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 h-12 text-base font-semibold"
                    asChild
                  >
                    <a href="mailto:uk@shopandsend.co.uk">📧 Email: uk@shopandsend.co.uk</a>
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <h4 className="font-semibold mb-3">⚡ Fast Track Service</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• UK to Ghana: 24-48 hours</li>
                    <li>• Real-time tracking updates</li>
                    <li>• Secure door-to-door delivery</li>
                    <li>• Insurance coverage included</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">📍 Our Locations</h3>
            
              {offices.map((office, index) => (
                <Card 
                  key={index}
                  className="stagger-animation glow-hover border-border/50 bg-card/80 backdrop-blur-sm p-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{office.flag}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm truncate">{office.location}</h4>
                      <div className="flex items-center space-x-1 mt-1">
                        <Phone className="h-3 w-3 text-accent flex-shrink-0" />
                        <a 
                          href={`tel:${office.phone.split(' / ')[0]}`}
                          className="text-xs text-muted-foreground hover:text-accent transition-colors truncate"
                        >
                          {office.phone.split(' / ')[0]}
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};