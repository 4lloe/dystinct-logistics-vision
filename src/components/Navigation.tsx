import { useState, useEffect } from "react";
import { AlignJustify, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ourRoleSection = document.getElementById('about-us');
      if (ourRoleSection) {
        const rect = ourRoleSection.getBoundingClientRect();
        setIsVisible(rect.top <= 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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

  const handleMenuItemClick = (item: any) => {
    if (item.url) {
      window.location.href = item.url;
    } else {
      scrollToSection(item.sectionId);
    }
  };

  const menuItems = [
    { label: "Home Page", sectionId: "hero" },
    { label: "About Us", sectionId: "about-us" },
    { label: "Our Services", sectionId: "our-services" },
    { label: "Pricelist", sectionId: "pricelist" },
    { label: "Contact Us", sectionId: "contact" },
    { label: "FAQ", sectionId: "faq" },
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Terms & Conditions", url: "/terms-and-conditions" },
  ];

  return (
    <div className={`relative ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-transparent border-none hover:bg-transparent p-2"
      >
        {isOpen ? <X className="h-12 w-12" /> : <AlignJustify className="h-12 w-12" />}
      </Button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-12 left-0 bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg min-w-48 z-50">
            <div className="p-2">
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start mb-1 last:mb-0"
                  onClick={() => handleMenuItemClick(item)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navigation;