import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-primary">
            Bazm Coffee
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("menu")}
            className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Order Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
