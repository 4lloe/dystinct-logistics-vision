import { HeroSection } from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Globe, Users, Award, MapPin, Clock, Star, TrendingUp } from "lucide-react";

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
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
              <Truck className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <div className="text-3xl font-black text-cyber-gradient mb-2">2,500+</div>
              <p className="text-muted-foreground">Deliveries Completed</p>
            </Card>
            
            <Card className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
              <Users className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <div className="text-3xl font-black text-cyber-gradient mb-2">150+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </Card>
            
            <Card className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
              <Globe className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <div className="text-3xl font-black text-cyber-gradient mb-2">25</div>
              <p className="text-muted-foreground">States Covered</p>
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
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <CardTitle className="text-cyber-gradient">Main Hub</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground/80 mb-4">
                  Pensacola, Florida<br />
                  Strategic Gulf Coast location
                </p>
                <Badge variant="secondary" className="bg-cyan-400/20 text-cyan-400">Primary</Badge>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <CardTitle className="text-cyber-gradient">Express Routes</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground/80 mb-4">
                  Southeast Corridor<br />
                  48-hour delivery guarantee
                </p>
                <Badge variant="secondary" className="bg-green-400/20 text-green-400">Express</Badge>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <CardTitle className="text-cyber-gradient">Expanding Network</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground/80 mb-4">
                  Nationwide Coverage<br />
                  Growing to serve you better
                </p>
                <Badge variant="secondary" className="bg-purple-400/20 text-purple-400">Growing</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-orange-900/10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-cyber-gradient">Client Success</span>
            </h2>
            <p className="text-xl text-muted-foreground/60 max-w-3xl mx-auto">
              What our partners say about working with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground/80 mb-6 italic">
                  "DYSTINCT LOGBOOK S&S transformed our supply chain. Their 24/7 support and real-time tracking gave us the peace of mind we needed for our critical shipments."
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-cyber-gradient">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Operations Manager, TechFlow Industries</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground/80 mb-6 italic">
                  "Exceptional service and reliability. Their audit system helped us optimize costs by 30% while maintaining delivery quality. Highly recommended!"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-cyber-gradient">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Logistics Director, Global Manufacturing Corp</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/10 via-transparent to-green-900/10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-cyber-gradient">Innovation Driven</span>
            </h2>
            <p className="text-xl text-muted-foreground/60 max-w-3xl mx-auto">
              Cutting-edge technology for modern logistics challenges
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card p-12 text-center hover:scale-105 transition-all duration-300">
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-2xl font-bold text-cyber-gradient mb-2">Real-Time GPS</div>
                    <p className="text-muted-foreground/80">Live tracking on every shipment</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyber-gradient mb-2">AI Optimization</div>
                    <p className="text-muted-foreground/80">Smart route planning</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyber-gradient mb-2">Cloud Integration</div>
                    <p className="text-muted-foreground/80">Seamless data access</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground/80">
                  Our technology stack ensures maximum efficiency, transparency, and reliability for every shipment.
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
