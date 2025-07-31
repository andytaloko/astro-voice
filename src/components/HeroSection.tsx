import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Mic, Send, Sparkles, Users, Phone, Star, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-voice-interface.jpg";

const HeroSection = () => {
  return (
    <section className="cosmic-bg min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Tech floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 border border-tech-primary/30 rounded-sm animate-float opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              transform: `rotate(${Math.random() * 45}deg)`,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className={`absolute w-2 h-2 bg-tech-accent rounded-full animate-twinkle opacity-30`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <Badge variant="outline" className="border-tech-primary text-tech-primary bg-background/50 backdrop-blur">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Voice Agents for SMBs
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Transform Your Business with{" "}
              <span className="bg-gradient-tech bg-clip-text text-transparent animate-shimmer">
                AI Voice Agents
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Automate customer support, boost sales, and enhance customer experience with 
              natural-sounding AI voice agents designed specifically for small and medium businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Try Demo Agent
            </Button>
            <Button variant="outline-cosmic" className="group">
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Schedule Call
            </Button>
          </div>

          {/* Enhanced social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-tech-primary" />
              <span>500+ SMBs trust Astro Voice</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="ml-1">4.9/5 rating</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>40% cost reduction</span>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="w-4 h-4 text-tech-primary" />
              <span>SOC2 Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-tech-accent rounded-full" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Right content - Enhanced Interactive demo */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-tech-glow animate-float">
            <img 
              src={heroImage} 
              alt="AI Voice Interface" 
              className="w-full h-auto rounded-2xl"
            />
            
            {/* Enhanced floating chat interface overlay */}
            <Card className="absolute top-4 left-4 right-4 sm:top-8 sm:left-8 sm:right-8 p-4 sm:p-6 bg-background/95 backdrop-blur border-tech-primary/20 shadow-tech">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 bg-gradient-tech rounded-full flex items-center justify-center animate-glow">
                    <Mic className="w-5 h-5 text-white" />
                    {/* Pulse rings for voice activation */}
                    <div className="absolute inset-0 rounded-full border-2 border-tech-accent/30 animate-pulse-wave" />
                    <div className="absolute inset-0 rounded-full border-2 border-tech-accent/20 animate-pulse-wave" style={{ animationDelay: '0.5s' }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Astro Voice Agent</div>
                    <div className="text-xs text-muted-foreground">Processing natural language...</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-muted-foreground hidden sm:inline">Online</span>
                  </div>
                </div>
                
                {/* Voice wave visualization */}
                <div className="voice-wave justify-center py-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="bar h-2 bg-tech-primary animate-voice-wave" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                
                <div className="space-y-3">
                  <div className="bg-muted/50 rounded-lg p-3 text-sm animate-fade-in-up">
                    "Hello! I can help with orders, support, and bookings. What do you need today?"
                  </div>
                  <div className="flex items-center gap-2 text-tech-primary">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-tech-primary rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    <span className="text-xs">Processing response...</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex-1 h-10 bg-muted/30 rounded-lg flex items-center px-3 text-sm text-muted-foreground touch-manipulation">
                    <Mic className="w-4 h-4 mr-2 text-tech-primary" />
                    <span className="hidden sm:inline">Speak or type your message...</span>
                    <span className="sm:hidden">Tap to speak...</span>
                  </div>
                  <Button size="sm" variant="cosmic" className="h-10 w-10 p-0 touch-manipulation">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>

                {/* Live metrics */}
                <div className="flex justify-between pt-2 text-xs text-muted-foreground border-t border-border/50">
                  <span>Response: &lt;200ms</span>
                  <span>Accuracy: 98.5%</span>
                  <span>Uptime: 99.9%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;