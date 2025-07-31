import { Button } from "@/components/ui/button";
import { Star, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-cosmic rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              Astro Voice
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#use-cases" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Use Cases
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:inline-flex">
            Log In
          </Button>
          <Button variant="cosmic" className="shadow-cosmic hover:shadow-glow">
            <Zap className="w-4 h-4 mr-2" />
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;