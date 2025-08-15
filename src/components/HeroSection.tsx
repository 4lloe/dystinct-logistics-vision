
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import truckImage from "@/assets/truck.png";

const ParticleBackground = () => {
  return (
    <div className="particles">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

const StatCard = ({ title, subtitle, glowColor }: { title: string; subtitle?: string; glowColor: string }) => {
  return (
    <div className={`glass-card p-8 hover:scale-105 transition-all duration-300`} 
         style={{ boxShadow: `0 8px 32px rgba(0, 0, 0, 0.1), 0 0 30px ${glowColor}20` }}>
      <h3 className="text-2xl font-geist font-semibold text-cyber-gradient mb-3">{title}</h3>
      {subtitle && <p className="text-base font-geist text-muted-foreground/90">{subtitle}</p>}
    </div>
  );
};

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Dark gradient background with green-cyan-purple colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900/30 to-purple-900/40" />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-green-800/20" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-900/30 to-slate-800" />
      
      {/* Particle animation */}
      <ParticleBackground />
      
      <div className="container mx-auto px-6 relative z-10">        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black uppercase tracking-tight">
                <span className="text-cyber-gradient">LOGISTIC</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-wide">
                <span className="text-cyber-gradient">SUPPORT AND SERVICES</span>
              </h2>
              <p className="text-2xl font-geist font-light max-w-lg text-muted-foreground">
                Your trusted partner for seamless transportation and supply chain management.
              </p>
            </div>
            
          </div>
          
          {/* Right Column - Stats Cards with Truck Background */}
          <div className="relative space-y-6">
            {/* Truck Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none select-none"
              style={{ width: "1200px", height: "auto", opacity: 0.35 }}>
              <div
                className="absolute inset-0 flex items-center justify-end z-10 pointer-events-none select-none"
                style={{ opacity: 0.35, filter: "brightness(1.4) contrast(1.2)" }}
              >
                <img
                  src={truckImage}
                  alt="Truck"
                  className="w-full h-auto object-contain"
                  style={{ width: "5760px", height: "auto" }}
                  draggable={false}
                />
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="relative z-20 space-y-6">
              <StatCard 
                title="500+ Satisfied Drivers" 
                glowColor="rgb(0, 207, 255)"
              />
              <StatCard 
                title="100+ Audits Passed" 
                glowColor="rgb(255, 109, 217)"
              />
              <StatCard 
                title="24/7 Service" 
                subtitle="Round-the-clock support for all your logistics needs"
                glowColor="rgb(0, 255, 0)"
              />
              
              {/* Action Buttons */}
              <div className="space-y-4 mt-8">
                <Button variant="default" size="lg" className="w-full font-semibold text-white border-0 uppercase" 
                        style={{ 
                          background: 'var(--gradient-cyber)',
                          boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(255, 109, 217, 0.3), 0 0 60px rgba(153, 102, 255, 0.2)'
                        }}
                        onClick={() => scrollToSection('contact')}>
                  Contact
                </Button>
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="default" size="lg" className="backdrop-blur-lg border border-white/10 text-foreground font-semibold"
                          style={{ background: 'var(--gradient-card)' }}
                          onClick={() => scrollToSection('services')}>
                    Our Services
                  </Button>
                  <Button variant="default" size="lg" className="backdrop-blur-lg border border-white/10 text-foreground font-semibold"
                          style={{ background: 'var(--gradient-card)' }}
                          onClick={() => scrollToSection('pricelist')}>
                    Price List
                  </Button>
                  <Button variant="default" size="lg" className="backdrop-blur-lg border border-white/10 text-foreground font-semibold"
                          style={{ background: 'var(--gradient-card)' }}
                          onClick={() => scrollToSection('contact')}>
                    FAQ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Status Bar */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-3">
          <div className="status-online"></div>
          <p className="text-muted-foreground text-sm">
            Professional. Reliable. Available 24/7.
          </p>
        </div>
      </div>
    </section>
  );
};
