import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Shield, Clock, Users, Award, Headphones } from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  glowColor 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  glowColor: string;
}) => {
  return (
    <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md"
          style={{ boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px ${glowColor}20` }}>
      <CardHeader className="text-center pb-4">
        <Icon className="w-12 h-12 mx-auto mb-4 text-cyber-gradient" />
        <CardTitle className="text-cyber-gradient">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground/80 text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const MoreInfo = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900/30 to-purple-900/40" />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-green-800/20" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-900/30 to-slate-800" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tight mb-6">
            <span className="text-cyber-gradient">MORE INFO</span>
          </h1>
          <p className="text-xl text-muted-foreground/60 max-w-3xl mx-auto">
            Learn more about DYSTINCT LOGBOOK S&S and our comprehensive logistics solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            icon={Truck}
            title="Fleet Management"
            description="Complete transportation solutions with modern fleet tracking and management systems"
            glowColor="rgb(0, 207, 255)"
          />
          
          <ServiceCard
            icon={Shield}
            title="Safety First"
            description="Rigorous safety protocols and compliance with all federal transportation regulations"
            glowColor="rgb(255, 109, 217)"
          />
          
          <ServiceCard
            icon={Clock}
            title="24/7 Support"
            description="Round-the-clock availability for emergency situations and urgent logistics needs"
            glowColor="rgb(0, 255, 0)"
          />
          
          <ServiceCard
            icon={Users}
            title="500+ Drivers"
            description="Experienced and professional drivers with extensive knowledge of transportation routes"
            glowColor="rgb(0, 207, 255)"
          />
          
          <ServiceCard
            icon={Award}
            title="100+ Audits"
            description="Successfully passed comprehensive safety and compliance audits demonstrating our excellence"
            glowColor="rgb(255, 109, 217)"
          />
          
          <ServiceCard
            icon={Headphones}
            title="Customer Care"
            description="Dedicated customer support team ready to assist with all your logistics requirements"
            glowColor="rgb(0, 255, 0)"
          />
        </div>

        {/* About Section */}
        <Card className="glass-card bg-background/10 backdrop-blur-md mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-cyber-gradient mb-4">About DYSTINCT LOGBOOK S&S</CardTitle>
          </CardHeader>
          <CardContent className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground/80 mb-6">
              DYSTINCT LOGBOOK S&S is a leading logistics support company providing professional 
              transportation management services. With over 500 satisfied drivers and 100+ successful 
              audits, we pride ourselves on delivering reliable, safe, and efficient logistics solutions.
            </p>
            <p className="text-lg text-muted-foreground/80 mb-6">
              Our commitment to excellence is demonstrated through our 24/7 availability, ensuring that 
              your logistics needs are met around the clock. Whether you need fleet management, 
              compliance support, or emergency assistance, our professional team is ready to help.
            </p>
            <p className="text-lg text-muted-foreground/80">
              Trust DYSTINCT LOGBOOK S&S as your partner in seamless transportation management.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-cyber-gradient mb-6">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="cyber" size="lg" className="text-lg">
              Contact Us Today
            </Button>
            <Button variant="cyber-secondary" size="lg" className="text-lg" onClick={() => window.history.back()}>
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;