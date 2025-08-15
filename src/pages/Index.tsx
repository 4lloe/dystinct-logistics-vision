import { useState } from "react";
import { MessageCircle, CheckCircle2, Award, Users, Phone, Mail, MessageSquare, Clock, MapPin, Shield, Star, FileText, AlertTriangle, DollarSign, Calculator, Scale, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { HeroSection } from "@/components/HeroSection";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [isPhoneDialogOpen, setIsPhoneDialogOpen] = useState(false);
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);
  const [isChatDialogOpen, setIsChatDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Navigation Lines and Company Name */}
      <div className="absolute top-6 left-6 z-50">
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-1">
            <div className="h-0.5 w-8 bg-cyan-400"></div>
            <div className="h-0.5 w-6 bg-purple-400"></div>
            <div className="h-0.5 w-4 bg-green-400"></div>
          </div>
          <div className="text-white font-bold text-lg tracking-wider">
            DYSTINCT LOGBOOK S&S LLC
          </div>
        </div>
      </div>
      
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      
      {/* About Us Section */}
      <section id="about-us" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-purple-900/10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-cyber-gradient">Our Role</span>
            </h2>
            <p className="text-xl text-muted-foreground/60 max-w-3xl mx-auto">
              We provide efficient, accurate, and real-time assistance to truck drivers operating in the United States, handling any need at any hour.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <CardTitle className="text-xl">24/7 Operational Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Deliver constant support to drivers on the road via phone, SMS, email, or internal apps, resolving urgent requests quickly and effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <CardTitle className="text-xl">Documentation Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Assist with the accurate completion of essential documents such as BOL, logbooks, proof of delivery, fuel receipts, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-red-400" />
                <CardTitle className="text-xl">Emergency Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Respond rapidly to emergencies, including accidents, mechanical failures, lost documents, issues with authorities, or medical situations.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <CardTitle className="text-xl">Communication Bridge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Act as an intermediary when drivers face communication barriers due to language, signal issues, or other obstacles.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                <CardTitle className="text-xl">ETA & Load Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Continuously monitor truck location and provide real-time updates on estimated pickup and delivery times.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <CardTitle className="text-xl">Broker Coordination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Facilitate communication with brokers, dispatchers, and warehouses to ensure seamless operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      

      {/* Our Services */}
      <section id="our-services" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-cyber-gradient">Our Services</span>
            </h2>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-xl text-muted-foreground/80 max-w-3xl mx-auto">
              PROFESSIONAL SUPPORT AND SERVICES IN LOGISTICS
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
            {/* Only keeping these services */}
          </div>
        </div>
      </section>

      {/* Price List */}
      <section id="pricelist" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900/30 to-purple-900/40" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-green-800/20" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-900/30 to-slate-800" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-cyber-gradient">PRICE LIST</span>
            </h2>
            <p className="text-xl text-muted-foreground/60 max-w-2xl mx-auto">
              Choose the perfect logistics solution for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group h-full flex flex-col">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-cyber-gradient mb-2">Support 24/7</CardTitle>
                <div className="text-4xl font-black text-white mb-4">$129</div>
                <CardDescription className="text-muted-foreground/80 text-lg">per unit/month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow flex flex-col">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-foreground/90">Round-the-clock customer support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-foreground/90">Priority response time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-foreground/90">Multi-channel communication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-foreground/90">Dedicated support team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-foreground/90">Real-time issue tracking</span>
                  </div>
                </div>
                
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
                      <Phone className="w-8 h-8 text-purple-400 hover:scale-125 transition-transform duration-300" />
                      <span className="text-xs text-muted-foreground">Viber</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group h-full flex flex-col">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-cyber-gradient mb-2">Audits</CardTitle>
                <div className="text-4xl font-black text-white mb-4">$99</div>
                <CardDescription className="text-muted-foreground/80 text-lg">per unit</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow flex flex-col">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-foreground/90">Comprehensive logistics audit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-foreground/90">Performance analysis report</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-foreground/90">Cost optimization recommendations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-foreground/90">Compliance verification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-foreground/90">Detailed documentation</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-cyber-gradient mb-3">Audit Tools:</h4>
                  <div className="flex justify-center gap-6">
                    <div className="flex flex-col items-center gap-2 cursor-pointer">
                      <Shield className="w-8 h-8 text-blue-400 hover:scale-125 transition-transform duration-300" />
                      <span className="text-xs text-muted-foreground">Reports</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 cursor-pointer">
                      <Award className="w-8 h-8 text-orange-400 hover:scale-125 transition-transform duration-300" />
                      <span className="text-xs text-muted-foreground">Analytics</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 cursor-pointer">
                      <Shield className="w-8 h-8 text-red-400 hover:scale-125 transition-transform duration-300" />
                      <span className="text-xs text-muted-foreground">Security</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900/30 to-purple-900/40" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-green-800/20" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-900/30 to-slate-800" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-cyber-gradient">CONTACT US</span>
            </h2>
            <p className="text-xl text-muted-foreground/60 max-w-2xl mx-auto">
              Choose your preferred way to get in touch with our professional logistics team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group">
              <CardHeader className="text-center pb-4">
                <Phone className="w-12 h-12 mx-auto mb-4 text-cyber-gradient" />
                <CardTitle className="text-cyber-gradient">Phone Call</CardTitle>
                <CardDescription className="text-muted-foreground/80">Speak directly with our logistics specialists</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">24/7 Support</p>
                <Button 
                  variant="ghost" 
                  className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  onClick={() => setIsPhoneDialogOpen(true)}
                >
                  Call now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group">
              <CardHeader className="text-center pb-4">
                <Mail className="w-12 h-12 mx-auto mb-4 text-cyber-gradient" />
                <CardTitle className="text-cyber-gradient">Email Support</CardTitle>
                <CardDescription className="text-muted-foreground/80">Send us detailed inquiries and documentation</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Quick Response</p>
                <Button 
                  variant="ghost" 
                  className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  onClick={() => setIsEmailDialogOpen(true)}
                >
                  Send email
                </Button>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group">
              <CardHeader className="text-center pb-4">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-cyber-gradient" />
                <CardTitle className="text-cyber-gradient">Live Chat</CardTitle>
                <CardDescription className="text-muted-foreground/80">Instant messaging with our support team via Telegram</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Instant Messaging</p>
                <Button 
                  variant="ghost" 
                  className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  onClick={() => setIsChatDialogOpen(true)}
                >
                  Start chat
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Phone Dialog */}
          <Dialog open={isPhoneDialogOpen} onOpenChange={setIsPhoneDialogOpen}>
            <DialogContent className="max-w-md bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
              <DialogHeader>
                <DialogTitle className="text-center text-xl font-bold text-white">Choose Phone Number</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Button 
                  className="w-full h-12 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium"
                  onClick={() => window.open('tel:+13314549901')}
                >
                  Call us +1 (331) 454-9901
                </Button>
                <Button 
                  className="w-full h-12 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium"
                  onClick={() => window.open('tel:+37376500222')}
                >
                  Call us +373 76500222
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Email Dialog */}
          <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
            <DialogContent className="max-w-md bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
              <DialogHeader>
                <DialogTitle className="text-center text-xl font-bold text-white">Email Us</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Button 
                  className="w-full h-12 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium"
                  onClick={() => window.open('mailto:info@dystinctlog-ss.us')}
                >
                  info@dystinctlog-ss.us
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Chat Dialog */}
          <Dialog open={isChatDialogOpen} onOpenChange={setIsChatDialogOpen}>
            <DialogContent className="max-w-md bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
              <DialogHeader>
                <DialogTitle className="text-center text-xl font-bold text-white">Live Chat</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Button 
                  className="w-full h-12 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium"
                  onClick={() => window.open('https://t.me/+37376500222')}
                >
                  Telegram Chat
                </Button>
                <Button 
                  className="w-full h-12 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium"
                  onClick={() => window.open('viber://chat?number=+37376500222')}
                >
                  Viber Chat
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card bg-background/10 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-cyber-gradient flex items-center gap-3">
                  <Phone className="w-6 h-6" />
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
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-cyber-gradient">FAQ</span>
            </h2>
            <p className="text-xl text-muted-foreground/60">
              Frequently Asked Questions - Coming Soon
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
