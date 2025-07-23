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
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to ship? Contact our expert team for fast, reliable express delivery services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="slide-in-up">
            <Card className="shadow-elevated border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="h-6 w-6 text-accent mr-2" />
                  Book Your Shipment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full bg-gradient-accent hover:shadow-purple-glow transition-all duration-300"
                    size="lg"
                  >
                    Send Message & Get Quote
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Office Locations */}
          <div className="space-y-6 slide-in-up">
            <h3 className="text-2xl font-bold mb-6">Our Office Locations</h3>
            
            {offices.map((office, index) => (
              <Card 
                key={index}
                className="stagger-animation glow-hover border-border/50 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{office.flag}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <MapPin className="h-5 w-5 text-accent mr-2" />
                        {office.location}
                      </h4>
                      <p className="text-muted-foreground mb-3">{office.address}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-accent" />
                          <a 
                            href={`tel:${office.phone.split(' / ')[0]}`}
                            className="text-foreground hover:text-accent transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-accent" />
                          <a 
                            href={`mailto:${office.email}`}
                            className="text-foreground hover:text-accent transition-colors"
                          >
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-accent" />
                          <span className="text-muted-foreground">{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Contact CTA */}
            <Card className="bg-gradient-accent text-white border-0">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Need Immediate Assistance?</h4>
                <p className="mb-4 opacity-90">Call our UK hotline for urgent shipping needs</p>
                <Button 
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  asChild
                >
                  <a href="tel:07916223257">Call Now: 07916223257</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};