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
          
          <div className="text-center text-muted-foreground">
            <p>FAQ content coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;