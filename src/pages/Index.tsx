import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ClientLogos />
      <Features />
      <UseCases />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
