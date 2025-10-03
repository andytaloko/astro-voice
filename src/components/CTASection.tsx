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
    "Configuração em menos de 30 minutos",
    "Nenhuma expertise técnica necessária",
    "Garantia de devolução de 30 dias",
    "Assistência de migração gratuita"
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
                  Pronto para Transformar Seu Negócio?
                </Badge>
                
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Junte-se a 500+ PMEs Já Usando{" "}
                  <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                    KIRA
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Comece a automatizar suas interações com clientes hoje. Sem contratos, sem taxas de configuração, 
                  e você pode estar funcionando em minutos.
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
                  Iniciar Teste Grátis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline-cosmic" className="group text-lg px-8 py-4">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Assistir Demo
                </Button>
                
                <Button variant="ghost" className="group text-lg px-8 py-4 text-cosmic-primary hover:text-cosmic-accent">
                  <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Agendar Consulta
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Oferta Especial de Lançamento:</span> Ganhe 50% de desconto nos primeiros 3 meses
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