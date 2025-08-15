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

          {/* Coming Soon Services */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-cyber-gradient mb-8">Coming Soon</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md opacity-80">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-cyber-gradient mb-2">DATA Q</CardTitle>
                  <div className="text-2xl font-black text-white">$49</div>
                </CardHeader>
              </Card>
              
              <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md opacity-80">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-cyber-gradient mb-2">IFTA</CardTitle>
                  <div className="text-2xl font-black text-white">$89</div>
                </CardHeader>
              </Card>
              
              <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md opacity-80">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-cyber-gradient mb-2">PERMITS</CardTitle>
                  <div className="text-2xl font-black text-white">$199</div>
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
            <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group">
              <CardHeader className="text-center pb-4">
                <Phone className="w-12 h-12 mx-auto mb-4 text-cyber-gradient" />
                <CardTitle className="text-cyber-gradient">Phone Call</CardTitle>
                <CardDescription className="text-muted-foreground/80">Speak directly with our logistics specialists</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">24/7 Support</p>
                <Button variant="ghost" className="bg-white/10 text-white border border-white/20 hover:bg-white/20" onClick={() => setIsPhoneDialogOpen(true)}>
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
                <Button variant="ghost" className="bg-white/10 text-white border border-white/20 hover:bg-white/20" onClick={() => setIsEmailDialogOpen(true)}>
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
                <Button variant="ghost" className="bg-white/10 text-white border border-white/20 hover:bg-white/20" onClick={() => setIsChatDialogOpen(true)}>
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
                <Button className="w-full h-12 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium" onClick={() => window.open('tel:+13314549901')}>
                  Call us +1 (331) 454-9901
                </Button>
                <Button className="w-full h-12 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium" onClick={() => window.open('tel:+37376500222')}>
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
                <Button className="w-full h-12 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium" onClick={() => window.open('mailto:info@dystinctlog-ss.us')}>
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
                <Button className="w-full h-12 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium" onClick={() => window.open('https://t.me/+37376500222')}>
                  Telegram Chat
                </Button>
                <Button className="w-full h-12 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-medium" onClick={() => window.open('viber://chat?number=+37376500222')}>
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
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                  <span className="text-lg font-semibold text-cyber-gradient">What services do you offer?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  We provide a full range of logistics services, including transportation management, freight forwarding, supply chain optimization, warehousing, and distribution. Our services are designed to meet the specific needs of our clients, ensuring timely and efficient delivery of goods.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                  <span className="text-lg font-semibold text-cyber-gradient">How can I contact customer support?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  You can contact our customer support team by:
                  <br />• Email: info@dystinctlog-ss.us
                  <br />• Phone: +1 (331) 454-9901 or +373 76500222
                  <br />• Live Chat: Available 24/7 on our website via Telegram and Viber
                  <br /><br />Our team is always ready to assist with any questions or concerns you may have.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                  <span className="text-lg font-semibold text-cyber-gradient">What is the average delivery time?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  The average delivery time depends on the destination and the type of service selected. Generally, domestic deliveries take 2-5 business days, while international deliveries may take 7-14 business days. For more specific timelines, please contact us with your delivery details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                  <span className="text-lg font-semibold text-cyber-gradient">How do you ensure the safety of my cargo?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  We take cargo safety very seriously. We use high-quality packaging materials, GPS tracking for all shipments, and secure transportation methods to ensure your cargo reaches its destination safely. Additionally, we are fully insured to protect against any unforeseen circumstances.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                  <span className="text-lg font-semibold text-cyber-gradient">Can I track my shipment in real-time?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Yes, we offer real-time tracking for all shipments. You can track your cargo using the tracking number provided once your shipment is dispatched. Simply visit our website and enter your tracking number in the tracking section.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                  <span className="text-lg font-semibold text-cyber-gradient">What should I do if there is a delay in my delivery?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  If there is a delay, please contact our customer support team immediately. We will investigate the cause of the delay and provide you with an updated delivery timeline. We strive to resolve any issues as quickly as possible.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                  <span className="text-lg font-semibold text-cyber-gradient">What regions do you cover?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  We provide logistics services across a wide range of regions, including domestic (within the country) and international destinations. For specific regions, please reach out to us for a more detailed coverage map.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                  <span className="text-lg font-semibold text-cyber-gradient">Do you offer international shipping?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Yes, we offer international shipping to over 50 countries worldwide. Our international logistics solutions are tailored to meet the needs of each destination, with customs clearance, tracking, and delivery management included.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                  <span className="text-lg font-semibold text-cyber-gradient">How do I get a quote for my logistics needs?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  You can request a quote by filling out the form on our website or by contacting our sales team directly. We will ask for details about your shipment, such as the type of goods, destination, and preferred delivery times, in order to provide an accurate and competitive quote.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="glass-card bg-background/10 backdrop-blur-md border-0 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
                  <span className="text-lg font-semibold text-cyber-gradient">What are your payment terms?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Our payment terms vary depending on the service and contract agreement. Typically, we offer payment options such as credit card, bank transfer, or invoicing with payment due within 30 days. For specific payment terms, please contact our finance department or refer to your contract.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;