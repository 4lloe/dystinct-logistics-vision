import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
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
          <h1 className="text-2xl font-bold">FAQ</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-cyber-gradient">Frequently Asked Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground/60 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-cyber-gradient mb-3">What services do you offer?</h3>
              <p className="text-muted-foreground">We provide comprehensive logistics support including 24/7 operational assistance, documentation guidance, emergency response, communication bridge services, and professional audits for transportation companies.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-cyber-gradient mb-3">How can I contact customer support?</h3>
              <p className="text-muted-foreground">You can reach our support team through multiple channels: phone calls, email, Telegram, or Viber. We're available 24/7 to assist with any logistics needs or emergencies.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-cyber-gradient mb-3">What is the average delivery time?</h3>
              <p className="text-muted-foreground">Delivery times vary based on distance, route complexity, and cargo type. We provide real-time tracking and estimated arrival times throughout the transportation process to keep you informed.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-cyber-gradient mb-3">How do you ensure the safety of my cargo?</h3>
              <p className="text-muted-foreground">We implement comprehensive safety protocols including proper documentation, regular communication with drivers, emergency response procedures, and compliance verification to ensure your cargo reaches its destination safely.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-cyber-gradient mb-3">Can I track my shipment in real-time?</h3>
              <p className="text-muted-foreground">Yes, we provide continuous monitoring and real-time updates on truck locations, estimated pickup and delivery times, ensuring complete transparency throughout the transportation process.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-cyber-gradient mb-3">What should I do if there is a delay in my delivery?</h3>
              <p className="text-muted-foreground">Contact our 24/7 support team immediately. We'll investigate the situation, provide updated delivery estimates, and work to resolve any issues causing the delay while keeping you informed throughout the process.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-cyber-gradient mb-3">What regions do you cover?</h3>
              <p className="text-muted-foreground">We provide logistics support services throughout the United States, assisting truck drivers and transportation companies operating across all major highways and routes nationwide.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-cyber-gradient mb-3">Do you offer international shipping?</h3>
              <p className="text-muted-foreground">Currently, our services focus on domestic transportation within the United States. For international shipping requirements, please contact our support team to discuss available options and partnerships.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-cyber-gradient mb-3">How do I get a quote for my logistics needs?</h3>
              <p className="text-muted-foreground">Contact us through any of our communication channels - phone, email, Telegram, or Viber. Our team will assess your specific requirements and provide a customized quote based on your logistics needs.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-cyber-gradient mb-3">What are your payment terms?</h3>
              <p className="text-muted-foreground">We offer flexible payment options including monthly billing for ongoing support services and per-unit pricing for audits. Contact our team to discuss payment arrangements that work best for your business needs.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;