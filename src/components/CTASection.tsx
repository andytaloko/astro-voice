import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Play, 
  Calendar, 
  CheckCircle,
  Sparkles,
  ArrowRight
} from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Setup in under 30 minutes",
    "No technical expertise required",
    "30-day money-back guarantee",
    "Free migration assistance"
  ];

  return (
    <section className="py-24 cosmic-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-secondary rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-background/95 backdrop-blur border-cosmic-primary/20 shadow-glow overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <Badge variant="outline" className="border-cosmic-primary text-cosmic-primary mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Ready to Transform Your Business?
                </Badge>
                
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Join 500+ SMBs Already Using{" "}
                  <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                    Astro Voice
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Start automating your customer interactions today. No contracts, no setup fees, 
                  and you can be up and running in minutes.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button variant="hero" className="group text-lg px-8 py-4">
                  <Rocket className="w-5 h-5 mr-2 group-hover:translate-y-[-2px] transition-transform" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline-cosmic" className="group text-lg px-8 py-4">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
                
                <Button variant="ghost" className="group text-lg px-8 py-4 text-cosmic-primary hover:text-cosmic-accent">
                  <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Book Consultation
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Special Launch Offer:</span> Get 50% off your first 3 months
              </div>
            </CardContent>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-lg bg-gradient-cosmic opacity-20 animate-glow pointer-events-none" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;