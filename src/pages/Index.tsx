import { HeroSection } from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, MessageCircle, Shield, CheckCircle2, Truck, Clock, Star, Phone, Mail, MessageSquare } from "lucide-react";

const Index = () => {
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
      <section className="py-20 px-6 relative">
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
                <Truck className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <CardTitle className="text-cyber-gradient">Fleet Management</CardTitle>
                <CardDescription className="text-muted-foreground/80">Complete transportation solutions with modern fleet tracking and management systems</CardDescription>
              </CardHeader>
            </Card>

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
                <Users className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <CardTitle className="text-cyber-gradient">500+ Drivers</CardTitle>
                <CardDescription className="text-muted-foreground/80">Experienced and professional drivers with extensive knowledge of transportation routes</CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 bg-background/10 backdrop-blur-md group">
              <CardHeader className="text-center pb-4">
                <Award className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                <CardTitle className="text-cyber-gradient">Industry Recognition</CardTitle>
                <CardDescription className="text-muted-foreground/80">Certified professionals with industry awards and recognition for excellence in logistics</CardDescription>
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

      {/* Contact Us */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-cyber-gradient">Contact Us</span>
            </h2>
            <p className="text-xl text-muted-foreground/60 max-w-3xl mx-auto">
              Get in touch with our professional logistics team
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
              <Phone className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <CardTitle className="text-cyber-gradient mb-2">Call Us</CardTitle>
              <p className="text-muted-foreground/80 mb-4">
                +1 (331) 454-9901<br />
                +373 76500222
              </p>
              <p className="text-sm text-muted-foreground">24/7 Support</p>
            </Card>
            
            <Card className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
              <Mail className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <CardTitle className="text-cyber-gradient mb-2">Email Us</CardTitle>
              <p className="text-muted-foreground/80 mb-4">
                info@dystinctlog-ss.us
              </p>
              <p className="text-sm text-muted-foreground">Quick Response</p>
            </Card>
            
            <Card className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <CardTitle className="text-cyber-gradient mb-2">Chat with Us</CardTitle>
              <p className="text-muted-foreground/80 mb-4">
                Telegram Support
              </p>
              <p className="text-sm text-muted-foreground">Instant Messaging</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
