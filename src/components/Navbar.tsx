"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "why-attend", label: "Why Attend" },
  { id: "experience", label: "Experience" },
  { id: "gallery", label: "Gallery" },
  { id: "hosts", label: "Hosts" },
  { id: "schedule", label: "Schedule" },
  { id: "venue", label: "Venue" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.id,
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      }).filter(Boolean) as Array<{ id: string; top: number; bottom: number }>;

      const current = sections.find(
        (section) => section.top <= 100 && section.bottom >= 100
      );

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-zinc-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 flex-1">
            {navItems.slice(1, 5).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative ${
                  isScrolled
                    ? activeSection === item.id
                      ? "text-[#00AEA9]"
                      : "text-zinc-700 hover:text-[#00AEA9]"
                    : activeSection === item.id
                    ? "text-[#00AEA9]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00AEA9] rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="flex-1 flex justify-center">
            <motion.button
              onClick={() => scrollToSection("hero")}
              className={`flex items-center hover:opacity-90 transition-opacity ${!isScrolled ? 'mt-4 sm:mt-4 md:mt-4' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`relative ${isScrolled ? 'w-20 h-20' : 'w-20 h-20 sm:w-24 sm:h-24'} transition-all duration-300`}>
                <ImageWithFallback
                  src="/logo.png"
                  alt="Bride Tribe Logo"
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    isScrolled 
                      ? 'brightness-0' 
                      : 'brightness-0 invert drop-shadow-lg'
                  }`}
                />
              </div>
            </motion.button>
          </div>

          {/* Right Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-end">
            {navItems.slice(5).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative ${
                  isScrolled
                    ? activeSection === item.id
                      ? "text-[#00AEA9]"
                      : "text-zinc-700 hover:text-[#00AEA9]"
                    : activeSection === item.id
                    ? "text-[#00AEA9]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId={`activeSection-${item.id}`}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00AEA9] rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <Button
              onClick={() => window.open("https://bridechurch.churchcenter.com/registrations/events/3225360", "_blank")}
              className="ml-4 bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] hover:from-[#00C4B8] hover:to-[#00AEA9] text-white border-0 rounded-full px-6"
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-zinc-900 hover:bg-zinc-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-zinc-200"
          >
            <div className="container mx-auto px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-[#00AEA9]/10 text-[#00AEA9]"
                      : "text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  window.open("https://bridechurch.churchcenter.com/registrations/events/3225360", "_blank");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-4 bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] hover:from-[#00C4B8] hover:to-[#00AEA9] text-white border-0 rounded-full"
              >
                Register Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

