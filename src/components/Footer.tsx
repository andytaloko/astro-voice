import { Star, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-space-deep text-white relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Astro Voice</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering small and medium businesses with intelligent AI voice agents 
              that transform customer interactions and drive growth.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <a href="#features" className="block hover:text-cosmic-secondary transition-colors">
                Features
              </a>
              <a href="#use-cases" className="block hover:text-cosmic-secondary transition-colors">
                Use Cases
              </a>
              <a href="#pricing" className="block hover:text-cosmic-secondary transition-colors">
                Pricing
              </a>
              <a href="#integrations" className="block hover:text-cosmic-secondary transition-colors">
                Integrations
              </a>
              <a href="#api" className="block hover:text-cosmic-secondary transition-colors">
                API Documentation
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <a href="#about" className="block hover:text-cosmic-secondary transition-colors">
                About Us
              </a>
              <a href="#careers" className="block hover:text-cosmic-secondary transition-colors">
                Careers
              </a>
              <a href="#blog" className="block hover:text-cosmic-secondary transition-colors">
                Blog
              </a>
              <a href="#press" className="block hover:text-cosmic-secondary transition-colors">
                Press Kit
              </a>
              <a href="#contact" className="block hover:text-cosmic-secondary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <a href="#help" className="block hover:text-cosmic-secondary transition-colors">
                Help Center
              </a>
              <a href="#docs" className="block hover:text-cosmic-secondary transition-colors">
                Documentation
              </a>
              <a href="#status" className="block hover:text-cosmic-secondary transition-colors">
                System Status
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@astrovoice.live</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>1-800-ASTRO-AI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © 2024 Astro Voice. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-cosmic-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-cosmic-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-cosmic-secondary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;