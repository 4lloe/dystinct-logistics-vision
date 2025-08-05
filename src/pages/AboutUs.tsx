import { ArrowLeft, Clock, FileText, AlertTriangle, MessageSquare, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="py-8 px-6 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <h1 className="text-2xl font-bold">About Us</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Our Role Section */}
          <Card className="glass-card mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-black uppercase tracking-tight mb-4">
                <span className="text-cyber-gradient">Our Role</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We provide efficient, accurate, and real-time assistance to truck drivers operating in the United States, handling any need at any hour.
              </p>
            </CardContent>
          </Card>

          {/* Key Responsibilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Key Responsibilities</h2>
            
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
                  <FileText className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <CardTitle className="text-xl">Documentation Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Assist with the accurate completion of essential documents such as BOL (Bill of Lading), logbooks, proof of delivery, fuel receipts, lumper receipts, and more.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-red-400" />
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
                    Act as an intermediary when drivers face communication barriers due to language, signal issues, or other obstacles, ensuring smooth coordination.
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
                    Facilitate communication with brokers, dispatchers, and warehouses to ensure seamless operations and coordination.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;