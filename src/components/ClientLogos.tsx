const ClientLogos = () => {
  const clients = [
    { name: "TechStart Solutions", logo: "🚀" },
    { name: "Local Dental Care", logo: "🦷" },
    { name: "Bright Minds Consulting", logo: "💡" },
    { name: "Urban Fitness Club", logo: "💪" },
    { name: "Green Valley Landscaping", logo: "🌱" },
    { name: "Metro Real Estate", logo: "🏠" },
  ];

  return (
    <section className="py-16 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            Trusted by forward-thinking SMBs
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:shadow-cosmic"
            >
              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {client.logo}
              </div>
              <span className="text-xs text-muted-foreground text-center group-hover:text-foreground transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-cosmic-primary">98%</span>
              <span>Customer satisfaction</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-1">
              <span className="font-semibold text-cosmic-primary">45%</span>
              <span>Reduction in support costs</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-1">
              <span className="font-semibold text-cosmic-primary">24/7</span>
              <span>Always available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;