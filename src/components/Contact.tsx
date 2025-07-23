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
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 slide-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-6">
            <Send className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to ship with confidence? Contact our expert team for fast, reliable express delivery services between the UK and Ghana.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2 slide-in-up">
            <Card className="shadow-elevated border-border/50 bg-card/95 backdrop-blur-sm">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl font-bold flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-lg mr-4">
                    <Send className="h-6 w-6" />
                  </div>
                  Request a Quote
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and we'll get back to you within 2 hours with a competitive quote.
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone Number</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+44 or +233"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Service Type</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-input rounded-md bg-background"
                        required
                      >
                        <option value="">Select service</option>
                        <option value="uk-ghana">UK to Ghana (1-2 days)</option>
                        <option value="ghana-uk">Ghana to UK (5-7 days)</option>
                        <option value="quote">Get a quote</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your shipping needs..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elevated hover:shadow-elegant transition-all duration-300"
                    size="lg"
                  >
                    Send Message & Get Quote
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6 slide-in-up">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
              <p className="text-muted-foreground mb-6">Need immediate assistance? Contact us directly.</p>
            </div>
            
            {/* Emergency Contact Card */}
            <Card className="bg-primary text-primary-foreground border-0 shadow-elevated">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h4 className="text-xl font-bold mb-2">24/7 Hotline</h4>
                <p className="mb-4 opacity-90">Urgent shipping needs</p>
                <Button 
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
                  asChild
                  size="lg"
                >
                  <a href="tel:07916223257">07916 223 257</a>
                </Button>
              </CardContent>
            </Card>

            <h4 className="text-xl font-semibold mb-4">Our Locations</h4>
            
            {offices.map((office, index) => (
              <Card 
                key={index}
                className="stagger-animation glow-hover border-border/50 bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{office.flag}</div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold mb-1 flex items-center text-sm">
                        <MapPin className="h-4 w-4 text-accent mr-1 flex-shrink-0" />
                        {office.location}
                      </h5>
                      
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center space-x-1">
                          <Phone className="h-3 w-3 text-accent flex-shrink-0" />
                          <a 
                            href={`tel:${office.phone.split(' / ')[0]}`}
                            className="text-foreground hover:text-accent transition-colors truncate"
                          >
                            {office.phone.split(' / ')[0]}
                          </a>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Mail className="h-3 w-3 text-accent flex-shrink-0" />
                          <a 
                            href={`mailto:${office.email}`}
                            className="text-foreground hover:text-accent transition-colors truncate"
                          >
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};