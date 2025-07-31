import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Mic, Send, Sparkles, Users, Phone } from "lucide-react";
import heroImage from "@/assets/hero-voice-interface.jpg";

const HeroSection = () => {
  return (
    <section className="cosmic-bg min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-cosmic-secondary rounded-full animate-twinkle opacity-30`}
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
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="border-cosmic-primary text-cosmic-primary bg-background/50 backdrop-blur">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Voice Agents for SMBs
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Transform Your Business with{" "}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent animate-shimmer">
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

          {/* Social proof */}
          <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>500+ SMBs trust Astro Voice</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">★</span>
                </div>
              ))}
              <span className="ml-1">4.9/5 rating</span>
            </div>
          </div>
        </div>

        {/* Right content - Interactive demo */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-glow animate-float">
            <img 
              src={heroImage} 
              alt="AI Voice Interface" 
              className="w-full h-auto rounded-2xl"
            />
            
            {/* Floating chat interface overlay */}
            <Card className="absolute top-8 left-8 right-8 p-6 bg-background/95 backdrop-blur border-cosmic-primary/20 shadow-cosmic">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-cosmic rounded-full flex items-center justify-center animate-glow">
                    <Mic className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Astro Voice Agent</div>
                    <div className="text-xs text-muted-foreground">Ready to help your customers</div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                
                <div className="space-y-3">
                  <div className="bg-muted/50 rounded-lg p-3 text-sm">
                    "Hello! How can I help you with your order today?"
                  </div>
                  <div className="flex items-center gap-2 text-cosmic-primary">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-cosmic-primary rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    <span className="text-xs">AI is typing...</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex-1 h-10 bg-muted/30 rounded-lg flex items-center px-3 text-sm text-muted-foreground">
                    Speak or type your message...
                  </div>
                  <Button size="sm" variant="cosmic" className="h-10 w-10 p-0">
                    <Send className="w-4 h-4" />
                  </Button>
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