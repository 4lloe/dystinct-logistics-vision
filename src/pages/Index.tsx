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
                      <span className="text-xs text-muted-foreground">dialpad</span>
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

          {/* Coming Soon Services */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-cyber-gradient mb-8">COMING SOON</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md opacity-80">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-cyber-gradient mb-2">DATA Q</CardTitle>
                </CardHeader>
              </Card>
              
              <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md opacity-80">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-cyber-gradient mb-2">IFTA</CardTitle>
                </CardHeader>
              </Card>
              
              <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md opacity-80">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-cyber-gradient mb-2">PERMITS</CardTitle>
                </CardHeader>
              </Card>
            </div>
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
                <CardDescription className="text-muted-foreground/80">Instant messaging with our support team via Telegram</CardDescription>
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
                  Call 🇺🇸 +1 (331) 454-9901
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium" 
                  onClick={() => {
                    window.open('tel:+37376500222');
                    setIsPhoneDialogOpen(false);
                  }}
                >
                  Call 🇲🇩 +373 76500222
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
                    window.open('https://t.me/+37376500222');
                    setIsChatDialogOpen(false);
                  }}
                >
                  💬 Telegram 🇲🇩 +373 76500222
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