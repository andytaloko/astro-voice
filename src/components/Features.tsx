import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Puzzle, 
  Headphones,
  Brain,
  Mic,
  MessageSquare
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Understanding",
      description: "Natural language processing that understands context, intent, and nuance"
    },
    {
      icon: Mic,
      title: "Human-Like Voice Quality",
      description: "Crystal clear, natural-sounding voices that customers love to interact with"
    },
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Get your AI agent running in minutes, not weeks"
    },
    {
      icon: Puzzle,
      title: "Seamless Integrations",
      description: "Connect with your existing CRM, booking systems, and workflows"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Serve customers in their preferred language with 30+ languages supported"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Monitor performance, track conversations, and optimize continuously"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with data protection regulations"
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Ready",
      description: "Deploy across phone, web chat, and mobile apps from one platform"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-cosmic-primary text-cosmic-primary mb-4">
            <Headphones className="w-4 h-4 mr-2" />
            Platform Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Built for Modern Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to deploy intelligent voice agents that deliver exceptional customer experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden border-border/50 hover:border-cosmic-primary/50 hover:shadow-cosmic transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-cosmic rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-cosmic-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
              
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-primary/0 to-cosmic-accent/0 group-hover:from-cosmic-primary/5 group-hover:to-cosmic-accent/5 transition-all duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-8 p-6 bg-muted/30 rounded-2xl border border-border/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-primary">&lt;200ms</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-primary">30+</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;