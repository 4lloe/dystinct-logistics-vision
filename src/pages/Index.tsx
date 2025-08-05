import { HeroSection } from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, Award, MessageCircle, Shield, CheckCircle2, Truck, Clock, Star, Phone, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isPhoneDialogOpen, setIsPhoneDialogOpen] = useState(false);
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);
  const [isChatDialogOpen, setIsChatDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <HeroSection />
      
      {/* Company Statistics */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-purple-900/10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-cyber-gradient">Our Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground/60 max-w-3xl mx-auto">
              Numbers that speak for our excellence in logistics
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
              <Users className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <div className="text-3xl font-black text-cyber-gradient mb-2">500+</div>
              <p className="text-muted-foreground">Satisfied Clients</p>
            </Card>
            
            <Card className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <div className="text-3xl font-black text-cyber-gradient mb-2">100+</div>
              <p className="text-muted-foreground">Audits Passed</p>
            </Card>
            
            <Card className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
              <Award className="w-12 h-12 mx-auto mb-4 text-orange-400" />
              <div className="text-3xl font-black text-cyber-gradient mb-2">99.8%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-green-900/10 via-transparent to-cyan-900/10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-cyber-gradient">Service Coverage</span>
            </h2>
            <p className="text-xl text-muted-foreground/60 max-w-3xl mx-auto">
              Strategic locations for maximum efficiency
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <CardTitle className="text-cyber-gradient">Fast Response</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground/80 mb-4">
                  Quick answers to all questions<br />
                  Instant client communication
                </p>
                <Badge variant="secondary" className="bg-green-400/20 text-green-400">24/7</Badge>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <CardTitle className="text-cyber-gradient">Quality Guarantee</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground/80 mb-4">
                  100% satisfaction promise<br />
                  Your success is our priority
                </p>
                <Badge variant="secondary" className="bg-purple-400/20 text-purple-400">Guaranteed</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/10 via-transparent to-green-900/10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-cyber-gradient">Our Services</span>
            </h2>
            <p className="text-xl text-muted-foreground/60 max-w-3xl mx-auto">
              Comprehensive logistics solutions for modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group">
              <CardHeader className="text-center pb-4">
                <Shield className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <CardTitle className="text-cyber-gradient">Safety First</CardTitle>
                <CardDescription className="text-muted-foreground/80">Rigorous safety protocols and compliance with all federal transportation regulations</CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group">
              <CardHeader className="text-center pb-4">
                <Clock className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <CardTitle className="text-cyber-gradient">24/7 Support</CardTitle>
                <CardDescription className="text-muted-foreground/80">Round-the-clock availability for emergency situations and urgent logistics needs</CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group">
              <CardHeader className="text-center pb-4">
                <Star className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <CardTitle className="text-cyber-gradient">Premium Quality</CardTitle>
                <CardDescription className="text-muted-foreground/80">Top-tier service quality with attention to detail in every aspect of logistics operations</CardDescription>
              </CardHeader>
            </Card>
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
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center">Choose Phone Number</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <Button 
                  variant="outline" 
                  className="p-4 h-auto text-left justify-start"
                  onClick={() => window.open('tel:+13314549901')}
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-semibold">+1 (331) 454-9901</div>
                    <div className="text-sm text-muted-foreground">US Office</div>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  className="p-4 h-auto text-left justify-start"
                  onClick={() => window.open('tel:+37376500222')}
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-semibold">+373 76500222</div>
                    <div className="text-sm text-muted-foreground">MD Office</div>
                  </div>
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Email Dialog */}
          <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center">Email Address</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <Button 
                  variant="outline" 
                  className="p-4 h-auto text-left justify-start"
                  onClick={() => window.open('mailto:info@dystinctlog-ss.us')}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-semibold">info@dystinctlog-ss.us</div>
                    <div className="text-sm text-muted-foreground">Business Inquiries</div>
                  </div>
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Chat Dialog */}
          <Dialog open={isChatDialogOpen} onOpenChange={setIsChatDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center">Start Telegram Chat</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <Button 
                  variant="outline" 
                  className="p-4 h-auto text-left justify-start"
                  onClick={() => window.open('https://t.me/+37376500222')}
                >
                  <MessageSquare className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-semibold">+373 76500222</div>
                    <div className="text-sm text-muted-foreground">MD Office</div>
                  </div>
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
    </div>
  );
};

export default Index;
