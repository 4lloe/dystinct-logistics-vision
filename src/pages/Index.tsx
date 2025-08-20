import { useState } from "react";
import { MessageCircle, CheckCircle2, Award, Users, Phone, Mail, MessageSquare, Clock, MapPin, Shield, Star, FileText, AlertTriangle, DollarSign, Calculator, Scale, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeroSection } from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import dotMcLogo from "@/assets/dot-mc-logo.png";
const Index = () => {
  const [isPhoneDialogOpen, setIsPhoneDialogOpen] = useState(false);
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);
  const [isChatDialogOpen, setIsChatDialogOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handlePlanClick = (planName: string) => {
    setSelectedPlan(planName);
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendMessage = () => {
    const message = `Dear Dystinct Logbook S&S LLC, I'm interested in the ${selectedPlan} package. I want to start collaborating with your services.`;
    const telegramUrl = `https://t.me/37376500222?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
    setIsContactDialogOpen(false);
  };
  return <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Navigation and Logo */}
      <div className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <Navigation />
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-transparent">
            <img src={dotMcLogo} alt="DOT MC Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-sm font-bold uppercase tracking-wide">Dystinct Logbook S&S LLC</span>
          </div>
        </div>
      </div>
      
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-card hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md">
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

            <Card className="glass-card hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md">
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

            <Card className="glass-card hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md">
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

            <Card className="glass-card hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md">
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

          {/* 24/7 Support Plans - Full Width */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-4xl font-bold text-cyber-gradient mb-6">24/7 Support Plans</CardTitle>
                <CardDescription className="text-muted-foreground/80 text-lg">Choose the right support level for your business needs</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Full Width Pricing Table */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* Basic */}
                  <div className="border border-cyan-400/20 rounded-lg p-6 bg-cyan-400/5 text-center">
                    <h4 className="text-2xl font-bold text-cyan-400 mb-2">Basic</h4>
                    <div className="text-4xl font-black text-white mb-2">$99</div>
                    <div className="text-sm text-muted-foreground mb-4">per truck/month</div>
                    <div className="space-y-2 text-left mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-muted-foreground/90">24/7 support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-muted-foreground/90">Driver training</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-muted-foreground/90">Basic documentation</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handlePlanClick("Basic")}
                      className="w-full bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/30"
                    >
                      Choose
                    </Button>
                  </div>

                  {/* Standard */}
                  <div className="border border-green-400/20 rounded-lg p-8 bg-green-400/5 text-center transform scale-110">
                    <h4 className="text-2xl font-bold text-green-400 mb-2">Standard</h4>
                    <div className="mb-2">
                      <div className="text-2xl line-through text-muted-foreground/60">$129</div>
                      <div className="text-4xl font-black text-white">$99</div>
                      <div className="text-xs text-green-400 font-semibold">First 3 months</div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">per truck/month</div>
                    <div className="space-y-2 text-left mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-muted-foreground/90">24/7 support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-muted-foreground/90">Driver training</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-muted-foreground/90">Daily logbook verification</span>
                      </div>
                    </div>
                    <Badge className="mb-3 bg-green-400/20 text-green-400 border-green-400/30">PROMO</Badge>
                    <Button 
                      onClick={() => handlePlanClick("Standard")}
                      className="w-full bg-green-400/20 text-green-400 border border-green-400/30 hover:bg-green-400/30"
                    >
                      Choose
                    </Button>
                  </div>

                  {/* Premium */}
                  <div className="border border-purple-400/20 rounded-lg p-6 bg-purple-400/5 text-center">
                    <h4 className="text-2xl font-bold text-purple-400 mb-2">Premium</h4>
                    <div className="text-4xl font-black text-white mb-2">$179</div>
                    <div className="text-sm text-muted-foreground mb-4">per truck/month</div>
                    <div className="space-y-2 text-left mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-muted-foreground/90">24/7 support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-muted-foreground/90">Driver training</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-muted-foreground/90">Daily logbook verification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-muted-foreground/90">Monthly audits</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handlePlanClick("Premium")}
                      className="w-full bg-purple-400/20 text-purple-400 border border-purple-400/30 hover:bg-purple-400/30"
                    >
                      Choose
                    </Button>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-cyber-gradient mb-4">Available via:</h4>
                  <div className="flex justify-center gap-8">
                    <div className="flex flex-col items-center gap-2 cursor-pointer">
                      <Phone className="w-5 h-5 text-cyan-400 hover:scale-125 transition-transform duration-300" />
                      <span className="text-sm text-muted-foreground">Phone</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 cursor-pointer">
                      <MessageSquare className="w-5 h-5 text-green-400 hover:scale-125 transition-transform duration-300" />
                      <span className="text-sm text-muted-foreground">Telegram</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 cursor-pointer">
                      <Phone className="w-5 h-5 text-purple-400 hover:scale-125 transition-transform duration-300" />
                      <span className="text-sm text-muted-foreground">Dialpad</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Audit Services & Coming Soon - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Audit - Left Side */}
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-cyber-gradient mb-4">Audit</CardTitle>
                <CardDescription className="text-muted-foreground/80 text-lg">99.9% Accuracy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price Section - DATA Q Format */}
                <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 text-center h-[120px] flex flex-col justify-center">
                  <div className="text-4xl font-black text-white mb-2">$99</div>
                  <p className="text-sm text-muted-foreground/80">per unit</p>
                </div>

                {/* Services List - IFTA Format */}
                <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 text-center h-[120px] flex flex-col justify-center">
                  <div className="space-y-1 text-left">
                    <p className="text-sm text-muted-foreground/80">1. Expert Guidance on FMCSA Audit Requirements</p>
                    <p className="text-sm text-muted-foreground/80">2. Efficient Document Organization and Preparation</p>
                    <p className="text-sm text-muted-foreground/80">3. Pre-Audit Assessment and Recommendations</p>
                  </div>
                </div>

                {/* Audit Tools - PERMITS Format */}
                <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 text-center h-[120px] flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Scale className="w-6 h-6 text-purple-400" />
                    <h4 className="text-xl font-bold text-purple-400">Audit Tools</h4>
                  </div>
                  <div className="flex justify-center gap-6">
                    <div className="flex flex-col items-center gap-1">
                      <Shield className="w-5 h-5 text-purple-400" />
                      <span className="text-xs text-muted-foreground">Reports</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Award className="w-5 h-5 text-purple-400" />
                      <span className="text-xs text-muted-foreground">Analytics</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Shield className="w-5 h-5 text-purple-400" />
                      <span className="text-xs text-muted-foreground">Security</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coming Soon Services - Right Side */}
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-cyber-gradient mb-4">Coming Soon</CardTitle>
                <CardDescription className="text-muted-foreground/80 text-lg">Advanced logistics solutions in development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                   {/* DATA Q */}
                   <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 text-center h-[120px] flex flex-col justify-center">
                     <div className="flex items-center justify-center gap-3 mb-2">
                       <FileText className="w-6 h-6 text-blue-400" />
                       <h4 className="text-xl font-bold text-blue-400">DATA Q</h4>
                     </div>
                     <p className="text-sm text-muted-foreground/80">DataQ challenge resolution system for CSA score improvement</p>
                   </div>

                   {/* IFTA */}
                   <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 text-center h-[120px] flex flex-col justify-center">
                     <div className="flex items-center justify-center gap-3 mb-2">
                       <Calculator className="w-6 h-6 text-green-400" />
                       <h4 className="text-xl font-bold text-green-400">IFTA</h4>
                     </div>
                     <p className="text-sm text-muted-foreground/80">International Fuel Tax Agreement filing and reporting services</p>
                   </div>

                   {/* PERMITS */}
                   <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 text-center h-[120px] flex flex-col justify-center">
                     <div className="flex items-center justify-center gap-3 mb-2">
                       <Scale className="w-6 h-6 text-purple-400" />
                       <h4 className="text-xl font-bold text-purple-400">PERMITS</h4>
                     </div>
                     <p className="text-sm text-muted-foreground/80">Oversize & overweight permit acquisition and management</p>
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
            <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <Phone className="w-12 h-12 mx-auto mb-4 text-cyber-gradient" />
                <CardTitle className="text-cyber-gradient">Phone Call</CardTitle>
                <CardDescription className="text-muted-foreground/80">Speak directly with our logistics specialists</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="ghost" className="bg-white/10 text-white border border-white/20 hover:bg-white/20" onClick={() => setIsPhoneDialogOpen(true)}>
                  Call Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <Mail className="w-12 h-12 mx-auto mb-4 text-cyber-gradient" />
                <CardTitle className="text-cyber-gradient">Email Support</CardTitle>
                <CardDescription className="text-muted-foreground/80">Send us detailed inquiries and documentation</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="ghost" className="bg-white/10 text-white border border-white/20 hover:bg-white/20" onClick={() => setIsEmailDialogOpen(true)}>
                  Send Email
                </Button>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-cyber-gradient" />
                <CardTitle className="text-cyber-gradient">Live Chat</CardTitle>
                <CardDescription className="text-muted-foreground/80">Instant messaging via Telegram</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="ghost" className="bg-white/10 text-white border border-white/20 hover:bg-white/20" onClick={() => setIsChatDialogOpen(true)}>
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Phone Dialog */}
          <Dialog open={isPhoneDialogOpen} onOpenChange={setIsPhoneDialogOpen}>
            <DialogContent className="glass-card bg-background/95 backdrop-blur-lg border border-white/10">
              <DialogHeader>
                <DialogTitle className="text-cyber-gradient text-center">Choose Phone Number</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <Button 
                  variant="ghost" 
                  className="w-full bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium" 
                  onClick={() => {
                    window.open('tel:+13314549901');
                    setIsPhoneDialogOpen(false);
                  }}
                >
                  🇺🇸 +1 (331) 454-9901
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium" 
                  onClick={() => {
                    window.open('tel:+37376500222');
                    setIsPhoneDialogOpen(false);
                  }}
                >
                  🇲🇩 +373 76500222
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Email Dialog */}
          <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
            <DialogContent className="glass-card bg-background/95 backdrop-blur-lg border border-white/10">
              <DialogHeader>
                <DialogTitle className="text-cyber-gradient text-center">Choose Email Address</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <Button 
                  variant="ghost" 
                  className="w-full bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium" 
                  onClick={() => {
                    window.open('mailto:info@dystinctlog-ss.us');
                    setIsEmailDialogOpen(false);
                  }}
                >
                  📧 info@dystinctlog-ss.us
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Chat Dialog */}
          <Dialog open={isChatDialogOpen} onOpenChange={setIsChatDialogOpen}>
            <DialogContent className="glass-card bg-background/95 backdrop-blur-lg border border-white/10">
              <DialogHeader>
                <DialogTitle className="text-cyber-gradient text-center">Choose Telegram Number</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <Button 
                  variant="ghost" 
                  className="w-full bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium" 
                  onClick={() => {
                    window.open('https://t.me/37376500222');
                    setIsChatDialogOpen(false);
                  }}
                >
                  💬 Telegram 🇲🇩 +373 76500222
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Plan Contact Dialog */}
          <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
            <DialogContent className="glass-card bg-background/95 backdrop-blur-lg border border-white/10 max-w-md">
              <DialogHeader>
                <DialogTitle className="text-cyber-gradient text-center">Contact Us</DialogTitle>
                <DialogDescription className="text-center text-muted-foreground">
                  Send a message about the {selectedPlan} package
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="bg-background/20 rounded-lg p-4 border border-white/10">
                  <p className="text-sm text-muted-foreground/90 leading-relaxed">
                    Dear Dystinct Logbook S&S LLC, I&apos;m interested in the <span className="text-cyber-gradient font-semibold">{selectedPlan}</span> package. I want to start collaborating with your services.
                  </p>
                </div>
                <Button 
                  onClick={handleSendMessage}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-medium"
                >
                  Send Message via Telegram
                </Button>
              </div>
            </DialogContent>
          </Dialog>

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
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900/30 to-purple-900/40" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-green-800/20" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-900/30 to-slate-800" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-cyber-gradient">FAQ</span>
            </h2>
            <p className="text-xl text-muted-foreground/60 max-w-3xl mx-auto">
              Frequently Asked Questions about our logistics services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {/* General Services & Eligibility */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cyber-gradient border-b border-border/50 pb-3">
                1. General Services & Eligibility
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                    <span className="text-lg font-semibold text-cyber-gradient">Who can request our support and audit services?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    Our services are available to truck drivers, owner-operators, and carriers operating in the U.S. transportation industry. According to <strong>FMCSA regulations (49 CFR Part 395)</strong>, all carriers must maintain accurate records of duty status (RODS). We provide independent review and support to ensure compliance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                    <span className="text-lg font-semibold text-cyber-gradient">Why should drivers or carriers use support services if they already have an ELD?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    An ELD records driving time automatically, but compliance requires more than data recording. Drivers must ensure records are accurate, certified, and supported by documentation. FMCSA (<strong>395.8 & 395.11</strong>) requires supporting documents, log certification, and proper edits. Our audits help detect errors before they become violations.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* ELD Compliance */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cyber-gradient border-b border-border/50 pb-3">
                2. ELD (Electronic Logging Device) Compliance
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-3" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                    <span className="text-lg font-semibold text-cyber-gradient">What is an ELD device?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    An ELD is an electronic device that automatically records driving time and engine data, ensuring compliance with FMCSA's Hours of Service rules. (<strong>49 CFR 395.20</strong>)
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                    <span className="text-lg font-semibold text-cyber-gradient">Who must comply with the ELD rule?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    Most drivers required to maintain RODS must use an ELD. Exceptions apply for short-haul operations, drivers operating pre-2000 vehicles, and certain driveaway-towaway operations. (<strong>395.8(a)(1)(iii)</strong>)
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                    <span className="text-lg font-semibold text-cyber-gradient">What documentation must be onboard the vehicle?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    Drivers must carry: ELD user manual, instruction sheet for data transfer, instruction sheet for reporting malfunctions, and supply of paper logs for at least 8 days (<strong>395.22(h)</strong>)
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Hours of Service Compliance */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cyber-gradient border-b border-border/50 pb-3">
                3. Hours of Service (HOS) Compliance
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-6" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                    <span className="text-lg font-semibold text-cyber-gradient">What are the Hours of Service (HOS) limits for property-carrying drivers?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    <strong>11-hour driving limit</strong>: maximum of 11 hours driving after 10 consecutive hours off duty; <strong>14-hour rule</strong>: cannot drive beyond the 14th consecutive hour after coming on duty; <strong>30-minute break</strong>: required after 8 cumulative hours of driving; <strong>60/70-hour rule</strong>: may not drive after 60/70 hours on duty in 7/8 consecutive days (<strong>395.3</strong>)
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                    <span className="text-lg font-semibold text-cyber-gradient">How does the ELD help with HOS compliance?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    The ELD automatically records driving time and alerts drivers to approaching limits, reducing the risk of unintentional violations. (<strong>395.8 & 395.32</strong>)
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* FMCSA Audits & Inspections */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cyber-gradient border-b border-border/50 pb-3">
                4. FMCSA Audits & Inspections
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-8" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                    <span className="text-lg font-semibold text-cyber-gradient">What happens if the ELD malfunctions?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    Drivers must notify the carrier within 24 hours and reconstruct RODS on paper logs until the device is repaired or replaced (within 8 days). (<strong>395.34</strong>)
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                    <span className="text-lg font-semibold text-cyber-gradient">How do your audits help with FMCSA inspections?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    We verify that logs, ELD records, and supporting documents are consistent. This ensures readiness for compliance reviews and reduces risk of penalties. (<strong>395.11, 395.30</strong>)
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                    <span className="text-lg font-semibold text-cyber-gradient">How do ELD and logbook data help in audits?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    FMCSA inspectors use ELD data to cross-check driving time, HOS compliance, and supporting documents. Clean and accurate logs speed up inspections and protect against violations. (<strong>395.24 & 395.32</strong>)
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-border/30">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground/60">
                © 2025 DYSTINCT LOGBOOK S&S LLC | All rights reserved
              </p>
              <div className="flex justify-center gap-6 text-sm">
                <a href="/privacy-policy" className="text-cyber-gradient hover:text-cyber-gradient/80 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms-and-conditions" className="text-cyber-gradient hover:text-cyber-gradient/80 transition-colors">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;