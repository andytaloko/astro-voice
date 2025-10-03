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
              <span className="text-xl font-bold">KIRA</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Capacitando pequenas e médias empresas com agentes de voz IA inteligentes 
              que transformam interações com clientes e impulsionam o crescimento.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>São Paulo, Brasil</span>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Produto</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <a href="#features" className="block hover:text-cosmic-secondary transition-colors">
                Recursos
              </a>
              <a href="#use-cases" className="block hover:text-cosmic-secondary transition-colors">
                Casos de Uso
              </a>
              <a href="#pricing" className="block hover:text-cosmic-secondary transition-colors">
                Preços
              </a>
              <a href="#integrations" className="block hover:text-cosmic-secondary transition-colors">
                Integrações
              </a>
              <a href="#api" className="block hover:text-cosmic-secondary transition-colors">
                Documentação da API
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Empresa</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <a href="#about" className="block hover:text-cosmic-secondary transition-colors">
                Sobre Nós
              </a>
              <a href="#careers" className="block hover:text-cosmic-secondary transition-colors">
                Carreiras
              </a>
              <a href="#blog" className="block hover:text-cosmic-secondary transition-colors">
                Blog
              </a>
              <a href="#press" className="block hover:text-cosmic-secondary transition-colors">
                Press Kit
              </a>
              <a href="#contact" className="block hover:text-cosmic-secondary transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Suporte</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <a href="#help" className="block hover:text-cosmic-secondary transition-colors">
                Central de Ajuda
              </a>
              <a href="#docs" className="block hover:text-cosmic-secondary transition-colors">
                Documentação
              </a>
              <a href="#status" className="block hover:text-cosmic-secondary transition-colors">
                Status do Sistema
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>ola@kira.ai</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>0800-KIRA-AI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © 2024 KIRA. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-cosmic-secondary transition-colors">
                Política de Privacidade
              </a>
              <a href="#terms" className="hover:text-cosmic-secondary transition-colors">
                Termos de Serviço
              </a>
              <a href="#cookies" className="hover:text-cosmic-secondary transition-colors">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;