import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
          <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group cursor-pointer">
            <CardHeader className="text-center pb-4">
              <Phone className="w-12 h-12 mx-auto mb-4 text-cyber-gradient" />
              <CardTitle className="text-cyber-gradient">Phone Call</CardTitle>
              <CardDescription className="text-muted-foreground/80">Speak directly with our logistics specialists</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="cyber" className="w-full text-white">
                    Call Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-card bg-background/95 backdrop-blur-lg border border-white/10">
                  <DialogHeader>
                    <DialogTitle className="text-cyber-gradient text-center">Choose Phone Number</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <Button 
                      variant="cyber" 
                      className="w-full text-white" 
                      onClick={() => {
                        window.open('tel:+13314549901');
                        setIsDialogOpen(false);
                      }}
                    >
                      Call 🇺🇸 +1 (331) 454-9901
                    </Button>
                    <Button 
                      variant="cyber" 
                      className="w-full text-white" 
                      onClick={() => {
                        window.open('tel:+37376500222');
                        setIsDialogOpen(false);
                      }}
                    >
                      Call 🇲🇩 +373 76500222
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
          
          <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group cursor-pointer">
            <CardHeader className="text-center pb-4">
              <Mail className="w-12 h-12 mx-auto mb-4 text-cyber-gradient" />
              <CardTitle className="text-cyber-gradient">Email Support</CardTitle>
              <CardDescription className="text-muted-foreground/80">Send us detailed inquiries and documentation</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="cyber" className="w-full text-white" onClick={() => window.open('mailto:info@dystinctlog-ss.us')}>
                Send Email
              </Button>
            </CardContent>
          </Card>
          
          <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group cursor-pointer">
            <CardHeader className="text-center pb-4">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-cyber-gradient" />
              <CardTitle className="text-cyber-gradient">Live Chat</CardTitle>
              <CardDescription className="text-muted-foreground/80">Instant messaging with our support team via Telegram</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="cyber" className="w-full text-white" onClick={() => window.open('https://t.me/+37376500222')}>
                Start Chat
              </Button>
            </CardContent>
          </Card>
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
                38 S Blue Angel Pkwy<br />
                Pensacola, FL 32506<br />
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
                24/7 support<br />
                Office Hours: Mon-Fri 8AM-6PM
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Back Button */}
        <div className="text-center mt-16">
          <Button variant="cyber-secondary" size="lg" className="text-white" onClick={() => window.location.href = '/pricelist'}>
            PRICELIST VIEW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;