import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageSquare, MapPin, Clock } from "lucide-react";

const ContactOption = ({ 
  icon: Icon, 
  title, 
  description, 
  action, 
  glowColor 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  action: string; 
  glowColor: string;
}) => {
  return (
    <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group cursor-pointer"
          style={{ boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px ${glowColor}20` }}>
      <CardHeader className="text-center pb-4">
        <Icon className="w-12 h-12 mx-auto mb-4 text-cyber-gradient" />
        <CardTitle className="text-cyber-gradient">{title}</CardTitle>
        <CardDescription className="text-muted-foreground/80">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <Button variant="cyber" className="w-full group-hover:shadow-lg">{action}</Button>
      </CardContent>
    </Card>
  );
};

const Contact = () => {
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
            <span className="text-cyber-gradient">CONTACT US</span>
          </h1>
          <p className="text-xl text-muted-foreground/60 max-w-2xl mx-auto">
            Choose your preferred way to get in touch with our professional logistics team
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ContactOption
            icon={Phone}
            title="Phone Call"
            description="Speak directly with our logistics specialists"
            action="Call Now"
            glowColor="rgb(0, 207, 255)"
          />
          
          <ContactOption
            icon={Mail}
            title="Email Support"
            description="Send us detailed inquiries and documentation"
            action="Send Email"
            glowColor="rgb(255, 109, 217)"
          />
          
          <ContactOption
            icon={MessageSquare}
            title="Live Chat"
            description="Instant messaging with our support team"
            action="Start Chat"
            glowColor="rgb(0, 255, 0)"
          />
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass-card bg-background/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-cyber-gradient flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                Office Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground/80">
                123 Logistics Boulevard<br />
                Transport City, TC 12345<br />
                United States
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card bg-background/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-cyber-gradient flex items-center gap-3">
                <Clock className="w-6 h-6" />
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground/80">
                24/7 Emergency Support<br />
                Office Hours: Mon-Fri 8AM-6PM<br />
                Weekend Support Available
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Back Button */}
        <div className="text-center mt-16">
          <Button variant="cyber-secondary" size="lg" onClick={() => window.history.back()}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;