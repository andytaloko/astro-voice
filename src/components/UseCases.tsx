import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Headphones, 
  Calendar, 
  ShoppingCart, 
  UserCheck, 
  Clock, 
  TrendingUp,
  Play,
  ArrowRight 
} from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Headphones,
      title: "Suporte ao Cliente",
      description: "Atenda consultas, resolva problemas e forneça ajuda instantânea 24/7",
      benefits: ["Reduza tempos de espera", "Diminua custos de suporte", "Aumente satisfação"],
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      icon: Calendar,
      title: "Agendamento de Consultas", 
      description: "Automatize reservas, confirmações e reagendamentos perfeitamente",
      benefits: ["Reduza faltas", "Economize tempo administrativo", "Reservas 24/7"],
      gradient: "from-green-500 to-blue-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
    {
      icon: ShoppingCart,
      title: "Vendas e Qualificação de Leads",
      description: "Qualifique leads, responda perguntas sobre produtos e impulsione conversões",
      benefits: ["Aumente conversões", "Qualifique leads mais rápido", "Nunca perca um prospect"],
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
    {
      icon: UserCheck,
      title: "Gestão de Pedidos",
      description: "Rastreie pedidos, processe devoluções e atualize clientes automaticamente",
      benefits: ["Reduza consultas de pedidos", "Automatize atualizações", "Melhore precisão"],
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
    }
  ];

  return (
    <section id="use-cases" className="py-24 cosmic-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-cosmic-primary text-cosmic-primary mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Casos de Uso
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transforme Cada Interação com Cliente
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como os agentes IA da KIRA podem revolucionar diferentes aspectos das operações do seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <Card key={index} className={`group relative overflow-hidden border-0 ${useCase.bgColor} hover:shadow-glow transition-all duration-500 hover:scale-105`}>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-cosmic-primary transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {useCase.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-cosmic-primary rounded-full" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="ghost" className="group/btn p-0 h-auto text-cosmic-primary hover:text-cosmic-accent">
                      <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Ouvir Demo
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
                
                {/* Floating time indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/80 backdrop-blur rounded-full px-3 py-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>Disponível 24/7</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" className="group">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Experimente Todos os Casos de Uso
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;