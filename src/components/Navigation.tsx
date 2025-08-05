import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home Page", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Our Services", path: "/our-services" },
    { label: "Pricelist", path: "/pricelist" },
    { label: "Contact Us", path: "/contact" },
    { label: "FAQ", path: "/faq" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-background/80 backdrop-blur-sm border-border/50"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg min-w-48">
          <div className="p-2">
            {menuItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "secondary" : "ghost"}
                className="w-full justify-start mb-1 last:mb-0"
                onClick={() => handleNavigation(item.path)}
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