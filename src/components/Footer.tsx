import { Plane, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Shop & Send</h3>
                <p className="text-sm opacity-80">Express Logistics</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Your trusted partner for express air cargo services between UK and Ghana. 
              Fast, secure, and reliable delivery solutions.
            </p>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-accent rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>UK to Ghana Express (1-2 days)</li>
              <li>Ghana to UK Express (5-7 days)</li>
              <li>Custom Packaging</li>
              <li>Door-to-Door Delivery</li>
              <li>Express Handling</li>
              <li>Insurance Coverage</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <div>
                  <p className="font-medium">UK Office</p>
                  <a href="tel:07916223257" className="hover:text-accent transition-colors">
                    07916223257
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <div>
                  <p className="font-medium">Accra Branch</p>
                  <a href="tel:0544410371" className="hover:text-accent transition-colors">
                    0544410371
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <div>
                  <p className="font-medium">Kumasi Branch</p>
                  <a href="tel:0553483045" className="hover:text-accent transition-colors">
                    0553483045
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-accent transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-accent transition-colors"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-accent transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Tracking</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Get Quote</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Support</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} Shop & Send Logistics. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <div className="text-center mt-4 text-primary-foreground/60 text-xs">
            Professional express air cargo services • British Airways & KLM partnerships
          </div>
        </div>
      </div>
    </footer>
  );
};