
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
    <div className={`glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md`} 
         style={{ boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px ${glowColor}20` }}>
      <h3 className="text-lg font-bold text-cyber-gradient mb-2">{title}</h3>
      {subtitle && <p className="text-sm text-muted-foreground/80">{subtitle}</p>}
    </div>
  );
};

export const HeroSection = () => {
  const navigate = useNavigate();

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
                <span className="text-cyber-gradient">DYSTINCT</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-wide">
                <span className="text-cyber-gradient">LOGBOOK S&S</span>
              </h2>
              <p className="text-xl text-muted-foreground/60 max-w-lg">
                Professional logistics support available around the clock. 
                Your trusted partner for seamless transportation management.
              </p>
            </div>
            
          </div>
          
          {/* Right Column - Stats Cards with Truck Background */}
          <div className="relative space-y-6">
            {/* Truck Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none"
              style={{ width: "1200px", height: "auto", opacity: 0.18 }}>
              <div
                className="absolute inset-0 flex items-center justify-end z-0 pointer-events-none select-none"
                style={{ opacity: 0.18 }}
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
            <div className="relative z-10 space-y-6">
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
                <Button variant="cyber" size="lg" className="w-full" onClick={() => navigate('/contact')}>
                  Contact
                </Button>
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="cyber-secondary" size="lg" onClick={() => navigate('/our-services')}>
                    Our Services
                  </Button>
                  <Button variant="cyber-secondary" size="lg" onClick={() => navigate('/price-list')}>
                    Price List
                  </Button>
                  <Button variant="cyber-secondary" size="lg" onClick={() => navigate('/faq')}>
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
