import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageSquare, Video, CheckCircle, FileText, BarChart3, Shield } from "lucide-react";

const ServiceCard = ({ 
  title, 
  price, 
  description, 
  features, 
  supportApps,
  auditFeatures,
  onGetStarted 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features?: string[];
  supportApps?: boolean;
  auditFeatures?: boolean;
  onGetStarted: () => void;
}) => {
  return (
    <Card className="glass-card p-8 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group h-full flex flex-col">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-3xl font-bold text-cyber-gradient mb-2">{title}</CardTitle>
        <div className="text-4xl font-black text-white mb-4">{price}</div>
        <CardDescription className="text-muted-foreground/80 text-lg">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 flex-grow flex flex-col">
        {features && (
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
        )}
        
        {supportApps && (
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-cyber-gradient mb-3">Available via:</h4>
            <div className="flex justify-center gap-6">
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Phone className="w-8 h-8 text-cyan-400 hover:scale-125 transition-transform duration-300" />
                <span className="text-xs text-muted-foreground">Phone</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <MessageSquare className="w-8 h-8 text-green-400 hover:scale-125 transition-transform duration-300" />
                <span className="text-xs text-muted-foreground">Telegram</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Video className="w-8 h-8 text-purple-400 hover:scale-125 transition-transform duration-300" />
                <span className="text-xs text-muted-foreground">Viber</span>
              </div>
            </div>
          </div>
        )}
        
        {auditFeatures && (
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-cyber-gradient mb-3">Audit Tools:</h4>
            <div className="flex justify-center gap-6">
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <FileText className="w-8 h-8 text-blue-400 hover:scale-125 transition-transform duration-300" />
                <span className="text-xs text-muted-foreground">Reports</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <BarChart3 className="w-8 h-8 text-orange-400 hover:scale-125 transition-transform duration-300" />
                <span className="text-xs text-muted-foreground">Analytics</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Shield className="w-8 h-8 text-red-400 hover:scale-125 transition-transform duration-300" />
                <span className="text-xs text-muted-foreground">Security</span>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-auto pt-6">
          <Button variant="cyber" className="w-full text-white" onClick={onGetStarted}>
            Get Started
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const PriceList = () => {
  const navigate = useNavigate();
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
            <span className="text-cyber-gradient">PRICE LIST</span>
          </h1>
          <p className="text-xl text-muted-foreground/60 max-w-2xl mx-auto">
            Choose the perfect logistics solution for your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <ServiceCard
            title="Support 24/7"
            price="$129"
            description="per unit/month"
            features={[
              "Round-the-clock customer support",
              "Priority response time",
              "Multi-channel communication",
              "Dedicated support team",
              "Real-time issue tracking"
            ]}
            supportApps={true}
            onGetStarted={() => navigate('/contact')}
          />
          
          <ServiceCard
            title="Audits"
            price="$99"
            description="per unit"
            features={[
              "Comprehensive logistics audit",
              "Performance analysis report",
              "Cost optimization recommendations",
              "Compliance verification",
              "Detailed documentation"
            ]}
            auditFeatures={true}
            onGetStarted={() => navigate('/contact')}
          />
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Button variant="cyber-secondary" size="lg" className="text-white" onClick={() => navigate('/')}>
            Back Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PriceList;