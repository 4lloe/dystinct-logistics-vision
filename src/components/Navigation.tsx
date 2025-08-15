import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If not on home page, go to home first then scroll
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { label: "Home Page", sectionId: "hero" },
    { label: "About Us", sectionId: "about-us" },
    { label: "Our Services", sectionId: "our-services" },
    { label: "Pricelist", sectionId: "pricelist" },
    { label: "Contact Us", sectionId: "contact" },
    { label: "FAQ", sectionId: "faq" },
  ];

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-background/80 backdrop-blur-sm border-border/50"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {isOpen && (
        <div className="absolute top-12 left-0 bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg min-w-48">
          <div className="p-2">
            {menuItems.map((item) => (
              <Button
                key={item.sectionId}
                variant="ghost"
                className="w-full justify-start mb-1 last:mb-0"
                onClick={() => scrollToSection(item.sectionId)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;