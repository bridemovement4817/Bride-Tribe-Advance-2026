"use client";

import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  Sparkles,
  BookOpen,
  Users,
  Calendar,
  MapPin,
  ChevronRight,
  Clock,
  DollarSign,
  Mail,
  Phone,
  ArrowDown,
  ArrowUp,
  Zap,
  TrendingUp,
  Star,
  Award,
  Target,
  CheckCircle2,
  Globe,
  Music,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Navbar } from "../components/Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

export default function Home() {
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openDrawer, setOpenDrawer] = useState<string | null>(null);
  const [textPhase, setTextPhase] = useState<
    "conference" | "retreat" | "advance"
  >("conference");

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + windowHeight;

      // Show back to top button when near the bottom (within 200px)
      setShowBackToTop(scrollBottom >= documentHeight - 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate text sequence: Conference -> Retreat -> Advance (looping)
  useEffect(() => {
    const interval = setInterval(() => {
      setTextPhase((current) => {
        if (current === "conference") return "retreat";
        if (current === "retreat") return "advance";
        return "conference"; // Loop back to start
      });
    }, 3000); // Change phase every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 1 },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    viewport: { once: true, margin: "-100px" },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section - Innovative Modern Design */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
        style={{ minHeight: "100dvh" }}
      >
        {/* Dynamic Background with Video */}
        <div className="absolute inset-0 z-0">
          {/* Video Background Layer */}
          <motion.div
            className="absolute inset-0"
            style={{ willChange: "transform", zIndex: 1 }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-center"
              onLoadedData={(e) => {
                const video = e.currentTarget;
                video.currentTime = 0;
              }}
              onEnded={(e) => {
                const video = e.currentTarget;
                video.currentTime = 0;
                video.play();
              }}
            >
              <source src="/fogbackground.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Animated Mesh Gradient Overlay */}
          <motion.div
            className="absolute inset-0"
            style={{ zIndex: 2 }}
            animate={{
              background: [
                "radial-gradient(circle at 20% 30%, rgba(0, 174, 169, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 196, 184, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 40%, rgba(0, 174, 169, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0, 196, 184, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 30%, rgba(0, 174, 169, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 196, 184, 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              zIndex: 3,
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Animated Fog Layers */}
          <div
            className="absolute inset-0"
            style={{ zIndex: 4, pointerEvents: "none" }}
          >
            {/* Fog Layer 1 - Slow drift */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Fog Layer 2 - Medium drift */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)",
                backgroundSize: "150% 150%",
              }}
              animate={{
                backgroundPosition: ["100% 0%", "0% 100%", "100% 0%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Fog Layer 3 - Fast drift */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 70% 30%, rgba(255, 255, 255, 0.06) 0%, transparent 50%)",
                backgroundSize: "180% 180%",
              }}
              animate={{
                backgroundPosition: ["0% 100%", "100% 0%", "0% 100%"],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Fog Layer 4 - Vertical drift */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 55%)",
                backgroundSize: "160% 160%",
              }}
              animate={{
                backgroundPosition: ["50% 0%", "50% 100%", "50% 0%"],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </div>

        {/* Main Content - Full Width Text */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 sm:pt-20 md:pt-24 lg:pt-20 pb-8 sm:pb-12 lg:pb-20 max-w-7xl">
          <div className="flex items-center justify-center min-h-[60vh]">
            {/* Text Content - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 max-w-5xl mx-auto text-center w-full"
            >
              {/* Event Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#00AEA9]/10 border border-[#00AEA9]/20 rounded-full backdrop-blur-sm">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[#00AEA9] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#00AEA9] uppercase tracking-wider">
                    11th Annual Event
                  </span>
                </div>
              </motion.div>

              {/* Main Heading - Modern Typography */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1] sm:leading-[0.95] tracking-tight break-words"
                >
                  <span className="block text-white mb-1 sm:mb-2">
                    BRIDE TRIBE
                  </span>
                  <motion.span
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="block bg-gradient-to-r from-[#00AEA9] via-[#00C4B8] to-[#00AEA9] bg-clip-text text-transparent bg-[length:200%_auto] break-words"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #00AEA9, #00C4B8, #00AEA9)",
                      animation: "shimmer 3s linear infinite",
                    }}
                  >
                    <span className="text-nowrap">ADVANCE 2026</span>
                  </motion.span>
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 leading-relaxed break-words"
              >
                A transformative 3-day experience of{" "}
                <span className="text-[#00AEA9] font-semibold">
                  spiritual activation
                </span>
                , <span className="text-[#00AEA9] font-semibold">glory</span>,
                and{" "}
                <span className="text-[#00AEA9] font-semibold">miracles</span>
              </motion.p>

              {/* Date & Location Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center"
              >
                <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all w-full sm:w-auto">
                  <div className="p-1.5 sm:p-2 bg-[#00AEA9]/20 rounded-lg flex-shrink-0">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-[#00AEA9]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wide">
                      Date
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">
                      Nov 19-22, 2026
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all w-full sm:w-auto">
                  <div className="p-1.5 sm:p-2 bg-[#00AEA9]/20 rounded-lg flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#00AEA9]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wide">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">
                      Houston, Texas
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="pt-2 sm:pt-4 flex justify-center"
              >
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] hover:from-[#00C4B8] hover:to-[#00AEA9] px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg h-auto shadow-2xl shadow-[#00AEA9]/30 rounded-xl font-bold text-white border-0 overflow-hidden group transition-all duration-300 w-full sm:w-auto"
                  onClick={() =>
                    window.open(
                      "https://bridechurch.churchcenter.com/registrations/events/3225360",
                      "_blank"
                    )
                  }
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Secure Early Bird Pricing
                    <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Button>
              </motion.div>

              {/* Quick Stats - Improved Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="grid grid-cols-3 gap-2 sm:gap-3 pt-2 sm:pt-4 max-w-2xl mx-auto"
              >
                {[
                  { number: "3", label: "Days", icon: Calendar },
                  { number: "4+", label: "Speakers", icon: Users },
                  { number: "800+", label: "Attendees", icon: Users },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        delay: 1.3 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-5 hover:border-[#00AEA9]/50 transition-all group relative overflow-hidden"
                    >
                      {/* Animated background glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#00AEA9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={false}
                      />
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2 md:gap-3 mb-1 sm:mb-2">
                          <div className="p-1 sm:p-1.5 md:p-2 bg-[#00AEA9]/20 rounded-lg group-hover:bg-[#00AEA9]/30 transition-colors flex-shrink-0">
                            <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-[#00AEA9]" />
                          </div>
                          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] bg-clip-text text-transparent text-center sm:text-left">
                            {stat.number}
                          </div>
                        </div>
                        <div className="text-[10px] sm:text-xs font-semibold text-zinc-300 uppercase tracking-wider text-center sm:text-left">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Decorative Elements - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const endX = startX + (Math.random() - 0.5) * 20;
            const endY = startY - 10 - Math.random() * 10;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                  x: [`${startX}%`, `${endX}%`, `${startX}%`],
                  y: [`${startY}%`, `${endY}%`, `${startY}%`],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut",
                }}
                className="absolute w-2 h-2 rounded-full bg-[#00AEA9] blur-sm"
              />
            );
          })}
        </div>

        {/* New Scroll Down Button */}
        <motion.div
          className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.button
            onClick={() => {
              const nextSection = document.querySelector(
                "section:nth-of-type(2)"
              );
              if (nextSection) {
                nextSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="hidden md:flex group flex-col items-center gap-1 sm:gap-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white/70 text-[10px] sm:text-xs font-medium uppercase tracking-wider group-hover:text-white transition-colors">
              Scroll to Explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowDown
                  className="h-5 w-5 sm:h-6 sm:w-6 text-[#00AEA9]"
                  strokeWidth={3}
                />
              </div>
            </motion.div>
          </motion.button>
        </motion.div>
      </section>

      {/* Why Attend Section - Funnel Step 1 */}
      <section id="why-attend" className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <motion.div {...fadeIn}>
              <Badge className="bg-[#00AEA9]/10 text-[#00AEA9] border-none px-6 py-2 mb-6 rounded-full">
                Your Journey Begins Here
              </Badge>
            </motion.div>
            <motion.h2
              {...fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                Experience <br></br> The Bride Tribe
              </span>
            </motion.h2>
            <motion.p
              {...fadeIn}
              className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto mb-8"
            >
              The Bride Tribe Advance isn&apos;t just another
              conference—it&apos;s a time to engage with divine appointment and
              connect with like-minded believers from around the world.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            <motion.div {...fadeInUp} className="space-y-6">
              {[
                {
                  icon: Target,
                  title: "Build Genuine Relationships",
                  description:
                    "Connect with people from around the world who come with open hearts, ready to receive you.",
                },
                {
                  icon: Heart,
                  title: "Encounter True Acceptance",
                  description:
                    "Engage with a fearless community of believers seeking the deeper things of God, unafraid of where it leads.",
                },
                {
                  icon: Star,
                  title: "Grow In Faith Together",
                  description:
                    "Step into a weekend of Kingdom manifestation that propels you forward as a unified Body of Christ.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-6 items-start p-6 bg-zinc-50 rounded-3xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#00AEA9] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-lg text-zinc-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...slideInRight} className="relative">
              <div className="sticky top-8">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="/1Z0A5015.jpg"
                    alt="Spiritual Transformation"
                    className="w-full h-[700px] object-cover"
                  />
                  {/* Color overlay to obscure faces - matches site color scheme */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00AEA9]/70 via-[#00C4B8]/60 to-[#00AEA9]/70"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                    <h3 className="text-3xl font-bold mb-3">
                      Join Others on the Journey
                    </h3>
                    <p className="text-xl text-zinc-200">
                      Be part of a movement of believers experiencing
                      breakthrough and transformation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Slider Box - Between Why Attend and Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative -my-8 sm:-my-12 md:-my-16 z-40"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-gradient-to-r from-[#00AEA9] via-[#00C4B8] to-[#00AEA9] rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl border-4 border-white overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00AEA9] via-[#00C4B8] to-[#00AEA9] opacity-90"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 md:gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    Lock In Early Bird Pricing
                  </h3>
                  <p className="text-sm md:text-base text-white/90">
                    Our Advances Sell Out Quickly Every Year!
                  </p>
                </div>
                <Button
                  onClick={() =>
                    window.open(
                      "https://bridechurch.churchcenter.com/registrations/events/3225360",
                      "_blank"
                    )
                  }
                  className="relative bg-white text-[#00AEA9] hover:bg-zinc-50 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm md:text-base font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 group"
                >
                  Reserve Your Spot Now!
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Event Overview Section - Funnel Step 2 */}
      <section
        id="experience"
        className="pt-24 pb-16 sm:pt-24 sm:pb-24 md:py-32 bg-zinc-50"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <motion.div {...fadeIn}>
              <Badge className="bg-[#00AEA9]/10 text-[#00AEA9] border-none px-6 py-2 mb-6 rounded-full">
                Our Story
              </Badge>
            </motion.div>
            <motion.h2
              {...fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6 min-h-[120px] md:min-h-[140px] flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                {textPhase === "conference" && (
                  <motion.span
                    key="conference"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-zinc-900"
                  >
                    Not A{" "}
                    <span className="relative inline-block">
                      <span className="text-zinc-900">Conference</span>
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.5, duration: 0.4 }}
                        className="absolute left-0 right-0 top-1/2 origin-left pointer-events-none"
                        style={{
                          borderTop: "3px solid #ef4444",
                          transform: "translateY(-50%) rotate(-5deg)",
                          width: "100%",
                        }}
                      />
                    </span>
                  </motion.span>
                )}
                {textPhase === "retreat" && (
                  <motion.span
                    key="retreat"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-zinc-900"
                  >
                    Not A{" "}
                    <span className="relative inline-block">
                      <span className="text-zinc-900">Retreat</span>
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.5, duration: 0.4 }}
                        className="absolute left-0 right-0 top-1/2 origin-left pointer-events-none"
                        style={{
                          borderTop: "3px solid #ef4444",
                          transform: "translateY(-50%) rotate(-5deg)",
                          width: "100%",
                        }}
                      />
                    </span>
                  </motion.span>
                )}
                {textPhase === "advance" && (
                  <motion.span
                    key="advance"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{ duration: 0.8 }}
                    className="text-zinc-900"
                  >
                    But An{" "}
                    <span className="relative inline-block">
                      <motion.span
                        animate={{
                          backgroundPosition: ["0%", "100%", "0%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, #fbbf24, #f59e0b, #d97706, #f59e0b, #fbbf24)",
                          backgroundSize: "200% auto",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                        className="text-5xl md:text-6xl font-bold relative"
                      >
                        Advance
                        <motion.span
                          animate={{
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute bottom-0 left-0 right-0 h-1 origin-left"
                          style={{
                            background:
                              "linear-gradient(90deg, #d97706, #b45309, #d97706)",
                            boxShadow: "0 2px 8px rgba(217, 119, 6, 0.5)",
                          }}
                        />
                      </motion.span>
                      <motion.span
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 blur-xl -z-10"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, #fbbf24, #f59e0b, #d97706)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        Advance
                      </motion.span>
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.h2>
            <motion.div
              {...fadeIn}
              className="text-xl md:text-2xl lg:text-2xl text-zinc-600 max-w-3xl mx-auto space-y-4"
            >
              <p>
                God’s Kingdom never retreats—it always advances! Join believers
                from across the world at our sold-out Advance to worship,
                receive life-changing teaching, and step forward in your walk
                with Jesus.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            {...staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Heart,
                title: "Identity & Purpose",
                description:
                  "Discover who you truly are in Christ and step into your divine calling with confidence.",
              },
              {
                icon: Sparkles,
                title: "Deliverance & Healing",
                description:
                  "Experience freedom from spiritual bondage and receive deep inner healing and restoration.",
              },
              {
                icon: BookOpen,
                title: "Teaching & Activation",
                description:
                  "Receive powerful biblical teaching and practical activation in your spiritual gifts.",
              },
              {
                icon: Users,
                title: "Worship & Community",
                description:
                  "Connect with a vibrant community and experience the presence of God in powerful worship.",
              },
            ].map((item, index) => (
              <motion.div key={index} {...fadeInUp}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow rounded-3xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-[#00AEA9]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <item.icon className="h-10 w-10 text-[#00AEA9]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-lg text-zinc-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Slider Box - Between Experience and Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative -my-8 sm:-my-12 md:-my-16 z-40"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl border-4 border-zinc-100 overflow-hidden"
            >
              {/* Animated gradient border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(90deg, #00AEA9, #00C4B8, #00AEA9)",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-[2px] bg-white rounded-2xl"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 md:gap-6">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#00AEA9] to-[#00C4B8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-1">
                      Join Us for This Life-Changing Experience
                    </h3>
                    <p className="text-sm md:text-base text-zinc-600">
                      Experience powerful worship and breakthrough ministry
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() =>
                    window.open(
                      "https://bridechurch.churchcenter.com/registrations/events/3225360",
                      "_blank"
                    )
                  }
                  className="relative bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] hover:from-[#00C4B8] hover:to-[#00AEA9] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm md:text-base font-bold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 group"
                >
                  Register Today
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Transformation Gallery Section - Funnel Step 3 */}
      <section
        id="gallery"
        className="pt-24 pb-16 sm:pt-24 sm:pb-24 md:py-32 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <Badge className="bg-[#00AEA9]/10 text-[#00AEA9] border-none px-6 py-2 mb-6 rounded-full">
              Real Stories, Real Impact
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                Witness the Transformation
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto">
              See how God is moving powerfully in the lives of those who attend
              the Advance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div {...fadeInUp} className="md:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
                <ImageWithFallback
                  src="/exp_4.jpg"
                  alt="Worship Moment"
                  className="w-full h-full min-h-[500px] object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/70 via-zinc-800/60 to-zinc-900/70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-none mb-4 rounded-full">
                    Glory Encounter
                  </Badge>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Experience God&apos;s Presence
                  </h3>
                  <p className="text-xl text-zinc-200">
                    Join us in transformative worship that ushers in
                    breakthrough.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-8">
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-64">
                <ImageWithFallback
                  src="/exp_2.jpg"
                  alt="Prayer Ministry"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/70 via-zinc-800/60 to-zinc-900/70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white">
                    Powerful Worship
                  </h4>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-xl h-64">
                <ImageWithFallback
                  src="/exp_3.jpg"
                  alt="Community"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/70 via-zinc-800/60 to-zinc-900/70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white">
                    Glory Encounter
                  </h4>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-xl h-64">
                <ImageWithFallback
                  src="/exp_1.jpg"
                  alt="Transformation"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/70 via-zinc-800/60 to-zinc-900/70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white">
                    Life Transformation
                  </h4>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://bridechurch.churchcenter.com/registrations/events/3225360",
                  "_blank"
                )
              }
              className="relative bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] hover:from-[#00C4B8] hover:to-[#00AEA9] px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-7 text-base sm:text-lg md:text-xl h-auto shadow-xl shadow-[#00AEA9]/25 rounded-full font-semibold text-white border-0 overflow-hidden group transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center">
                Early Bird Special Available Now!
                <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Combined Schedule Section with Carousel - Funnel Step 5 */}
      <section
        id="schedule"
        className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AEA9] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00AEA9] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <Badge className="bg-[#00AEA9] text-white border-none px-6 py-2 mb-6 rounded-full">
              Your Advance Roadmap
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-[#00AEA9] bg-clip-text text-transparent">
                3 Days In The Glory{" "}
                <span className="text-[#00AEA9] drop-shadow-[0_0_20px_rgba(0,174,169,0.8)]">
                  2026
                </span>
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
              Each day builds upon the last, opening up revelatory realms of the
              spirit leading to breakthrough, healing and miracles.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {[
                  {
                    dayNumber: 1,
                    date: "",
                    title: "Day One",
                    description: "Details coming soon.",
                    time: "Thursday the 19th",
                    image: "/hero_section_small_backdrop.jpg",
                    badge: "Coming Soon",
                  },
                  {
                    dayNumber: 2,
                    title: "Day Two",
                    description:
                      "Details coming soon. Experience continued breakthrough and activation.",
                    time: "Friday, November 20th",
                    image: "/hero_section_small_backdrop.jpg",
                    badge: "Coming Soon",
                  },
                  {
                    dayNumber: 3,
                    title: "Day Three",
                    description:
                      "Details coming soon. Step deeper into your calling and purpose.",
                    time: "Saturday, November 21st",
                    image: "/hero_section_small_backdrop.jpg",
                    badge: "Coming Soon",
                  },
                ].map((dayData, index) => (
                  <CarouselItem key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="border-none shadow-2xl rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <CardContent className="p-8 md:p-16">
                          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                            <div>
                              <div className="flex items-center gap-4 mb-6">
                                {dayData.date && (
                                  <div className="px-4 py-2 bg-[#00AEA9] rounded-2xl">
                                    <span className="text-lg font-semibold text-white">
                                      {dayData.date}
                                    </span>
                                  </div>
                                )}
                                <div>
                                  <h3 className="text-3xl md:text-4xl text-white font-bold">
                                    {dayData.title}
                                  </h3>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 text-zinc-300 text-xl mb-8">
                                <Clock className="h-6 w-6 text-[#00AEA9]" />
                                <span>{dayData.time}</span>
                              </div>
                              <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
                                {dayData.description}
                              </p>
                            </div>

                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                              <ImageWithFallback
                                src={dayData.image}
                                alt={`${dayData.title} Experience`}
                                className="w-full h-[600px] object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent"></div>
                              <div className="absolute bottom-0 left-0 right-0 p-8">
                                <Badge className="bg-white/20 backdrop-blur-sm text-white border-none mb-3 rounded-full">
                                  {dayData.badge}
                                </Badge>
                                <p className="text-lg text-zinc-200">
                                  {dayData.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 text-white border-white/20" />
              <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 text-white border-white/20" />
            </Carousel>
          </div>

          <motion.div {...fadeInUp} className="text-center mt-16">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://bridechurch.churchcenter.com/registrations/events/3225360",
                  "_blank"
                )
              }
              className="relative bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] hover:from-[#00C4B8] hover:to-[#00AEA9] px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-7 text-base sm:text-lg md:text-xl h-auto shadow-xl shadow-[#00AEA9]/25 rounded-full font-semibold text-white border-0 overflow-hidden group transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center">
                Get 65% Off Registration Now!
                <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Meet the Hosts Section - Funnel Step 4 */}
      <section id="hosts" className="py-16 sm:py-24 md:py-32 bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <motion.div {...fadeIn}>
              <Badge className="bg-[#00AEA9]/10 text-[#00AEA9] border-none px-6 py-2 mb-6 rounded-full">
                Your Hosts
              </Badge>
            </motion.div>
            <motion.h2
              {...fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                Meet the Speakers
              </span>
            </motion.h2>
            <motion.p
              {...fadeIn}
              className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto"
            >
              Learn from experienced ministry leaders who carry powerful
              anointing for breakthrough and transformation.
            </motion.p>
          </motion.div>

          <motion.div
            {...staggerChildren}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Row 1: Dan Duval - Horizontal (spans 2 cols) */}
            <Drawer
              open={openDrawer === "dan"}
              onOpenChange={(open) => setOpenDrawer(open ? "dan" : null)}
            >
              <motion.div
                {...fadeInUp}
                className="order-1 md:order-none md:col-span-2 lg:col-span-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <DrawerTrigger asChild>
                  <Card className="border-none shadow-2xl overflow-hidden rounded-3xl h-full cursor-pointer transition-all hover:shadow-3xl flex flex-col">
                    <div className="grid md:grid-cols-5 gap-0 flex-1 min-h-0">
                      <div className="md:col-span-2 h-full min-h-[300px] md:min-h-0 relative">
                        <ImageWithFallback
                          src="/danduval.webp"
                          alt="Dan Duval"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00AEA9]/40 via-[#00C4B8]/30 to-[#00AEA9]/40"></div>
                      </div>
                      <CardContent className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                          Dan Duval
                        </h3>
                        <p className="text-lg md:text-xl text-zinc-600 mb-6 leading-relaxed">
                          Daniel Duval is the Executive Director of BRIDE
                          Ministries and is also the Senior Pastor of the BRIDE
                          Ministries Church. He is the author of nine books,
                          including two #1 Amazon bestsellers in Prayer. He is
                          the host of the Discovering Truth with Dan Duval
                          podcast, the creator of the BRIDE Ministries
                          Institute, and the creator of the BRIDE Ministries
                          School of Inner Healing and Deliverance.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-4 text-base md:text-lg text-zinc-700">
                            <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#00AEA9] flex-shrink-0" />
                            <span>Founder of Bride Tribe</span>
                          </div>
                          <div className="flex items-center gap-4 text-base md:text-lg text-zinc-700">
                            <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#00AEA9] flex-shrink-0" />
                            <span>Author & Bible teacher</span>
                          </div>
                          <div className="flex items-center gap-4 text-base md:text-lg text-zinc-700">
                            <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#00AEA9] flex-shrink-0" />
                            <span>Specialist in deliverance ministry</span>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </DrawerTrigger>
              </motion.div>
              <DrawerContent className="max-h-[90vh] flex flex-col">
                <div className="flex-1 overflow-y-auto">
                  <div className="mx-auto w-full max-w-4xl">
                    <DrawerHeader>
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-full md:w-64 h-64 md:h-80 rounded-2xl overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src="/danduval.webp"
                            alt="Dan Duval"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <DrawerTitle className="text-3xl md:text-4xl font-bold mb-4">
                            Dan Duval
                          </DrawerTitle>
                          <DrawerDescription className="text-lg text-zinc-600 leading-relaxed">
                            Daniel Duval is the Executive Director of BRIDE
                            Ministries and is also the Senior Pastor of the
                            BRIDE Ministries Church. He is the author of nine
                            books, including two #1 Amazon bestsellers in
                            Prayer. He is the host of the Discovering Truth with
                            Dan Duval podcast, the creator of the BRIDE
                            Ministries Institute, and the creator of the BRIDE
                            Ministries School of Inner Healing and Deliverance.
                            As an advocate for survivors of extreme trauma, it
                            is his vision to build a world-class platform that
                            caters to survivors of satanic ritual abuse and
                            government sponsored mind control agendas, which
                            includes free resources, a church, support groups,
                            trained coaches, housing solutions, and more.
                          </DrawerDescription>
                        </div>
                      </div>
                    </DrawerHeader>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>

            {/* Row 1: Christian Duval - Small (1 col) */}
            <Drawer
              open={openDrawer === "christian"}
              onOpenChange={(open) => setOpenDrawer(open ? "christian" : null)}
            >
              <motion.div
                {...fadeInUp}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="order-2 md:order-none md:col-span-1 lg:col-span-1"
              >
                <DrawerTrigger asChild>
                  <Card className="border-none shadow-xl overflow-hidden rounded-3xl h-full bg-gradient-to-br from-white to-zinc-50 cursor-pointer transition-all hover:shadow-2xl">
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src="/christianduval.jpg"
                        alt="Christian Duval"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00AEA9]/40 via-[#00C4B8]/30 to-[#00AEA9]/40"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-3">
                        Christian Duval
                      </h3>
                      <p className="text-sm md:text-base text-zinc-600 mb-4 leading-relaxed">
                        Christian Duval is the Executive Pastor of Bride
                        Ministries Church. She oversees daily operations,
                        providing leadership, strategic direction, and pastoral
                        care to ensure every ministry functions with unity and
                        purpose.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm md:text-base text-zinc-700">
                          <div className="w-1.5 h-1.5 bg-[#00AEA9] rounded-full"></div>
                          <span>Executive Pastor</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm md:text-base text-zinc-700">
                          <div className="w-1.5 h-1.5 bg-[#00AEA9] rounded-full"></div>
                          <span>Leadership & Strategic Direction</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm md:text-base text-zinc-700">
                          <div className="w-1.5 h-1.5 bg-[#00AEA9] rounded-full"></div>
                          <span>Empowering Leaders</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DrawerTrigger>
              </motion.div>
              <DrawerContent className="max-h-[90vh] flex flex-col">
                <div className="flex-1 overflow-y-auto">
                  <div className="mx-auto w-full max-w-4xl">
                    <DrawerHeader>
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src="/christianduval.jpg"
                            alt="Christian Duval"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <DrawerTitle className="text-3xl md:text-4xl font-bold mb-4">
                            Christian Duval
                          </DrawerTitle>
                          <DrawerDescription className="text-lg text-zinc-600 leading-relaxed mb-6">
                            Christian Duval is the Executive Pastor of Bride
                            Ministries Church. She oversees the daily operations
                            of the church, providing leadership, strategic
                            direction, and pastoral care to ensure that every
                            ministry functions with unity and purpose. Christian
                            carries a deep passion for helping individuals
                            encounter the transforming power of Jesus and
                            empowering leaders to walk in their God-given
                            callings. Her leadership reflects integrity, faith,
                            and a genuine love for the Body of Christ.
                          </DrawerDescription>
                          <div className="space-y-3 mt-4">
                            <div className="flex items-start gap-4 text-base md:text-lg text-zinc-700">
                              <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#00AEA9] flex-shrink-0 mt-0.5" />
                              <span>
                                Executive Pastor of Bride Ministries Church
                              </span>
                            </div>
                            <div className="flex items-start gap-4 text-base md:text-lg text-zinc-700">
                              <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#00AEA9] flex-shrink-0 mt-0.5" />
                              <span>
                                Oversees daily operations with leadership and
                                strategic direction
                              </span>
                            </div>
                            <div className="flex items-start gap-4 text-base md:text-lg text-zinc-700">
                              <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#00AEA9] flex-shrink-0 mt-0.5" />
                              <span>
                                Provides pastoral care ensuring ministries
                                function with unity and purpose
                              </span>
                            </div>
                            <div className="flex items-start gap-4 text-base md:text-lg text-zinc-700">
                              <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#00AEA9] flex-shrink-0 mt-0.5" />
                              <span>
                                Deep passion for helping individuals encounter
                                the transforming power of Jesus
                              </span>
                            </div>
                            <div className="flex items-start gap-4 text-base md:text-lg text-zinc-700">
                              <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#00AEA9] flex-shrink-0 mt-0.5" />
                              <span>
                                Empowers leaders to walk in their God-given
                                callings
                              </span>
                            </div>
                            <div className="flex items-start gap-4 text-base md:text-lg text-zinc-700">
                              <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#00AEA9] flex-shrink-0 mt-0.5" />
                              <span>
                                Leadership reflects integrity, faith, and
                                genuine love for the Body of Christ
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DrawerHeader>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>

            {/* Row 2: Katie Souza - Horizontal (spans 2 cols) */}
            <Drawer
              open={openDrawer === "katie"}
              onOpenChange={(open) => setOpenDrawer(open ? "katie" : null)}
            >
              <motion.div
                {...fadeInUp}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="order-1 md:order-none md:col-span-2 lg:col-span-2"
              >
                <DrawerTrigger asChild>
                  <Card className="border-none shadow-2xl overflow-hidden rounded-3xl h-full cursor-pointer transition-all hover:shadow-3xl flex flex-col">
                    <div className="grid md:grid-cols-5 gap-0 flex-1 min-h-0">
                      <div className="md:col-span-2 h-full min-h-[300px] md:min-h-0 relative">
                        <ImageWithFallback
                          src="/katiesouza.jpg"
                          alt="Katie Souza"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00AEA9]/40 via-[#00C4B8]/30 to-[#00AEA9]/40"></div>
                      </div>
                      <CardContent className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                          Katie Souza
                        </h3>
                        <p className="text-lg md:text-xl text-zinc-600 mb-6 leading-relaxed">
                          Katie Souza is a powerful voice in healing and
                          breakthrough ministry, known for her anointing in
                          physical and emotional healing.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-4 text-base md:text-lg text-zinc-700">
                            <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#00AEA9] flex-shrink-0" />
                            <span>Healing ministry</span>
                          </div>
                          <div className="flex items-center gap-4 text-base md:text-lg text-zinc-700">
                            <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#00AEA9] flex-shrink-0" />
                            <span>Breakthrough activation</span>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </DrawerTrigger>
              </motion.div>
              <DrawerContent className="max-h-[90vh] flex flex-col">
                <div className="flex-1 overflow-y-auto">
                  <div className="mx-auto w-full max-w-4xl">
                    <DrawerHeader>
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src="/katiesouza.jpg"
                            alt="Katie Souza"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <DrawerTitle className="text-3xl md:text-4xl font-bold mb-4">
                            Katie Souza
                          </DrawerTitle>
                          <DrawerDescription className="text-lg text-zinc-600 leading-relaxed">
                            Katie Souza is a powerful voice in healing and
                            breakthrough ministry, known for her anointing in
                            physical and emotional healing. With years of
                            experience in ministry, she brings a unique
                            perspective on the healing power of God and how it
                            transforms lives. Her teachings have helped
                            thousands discover breakthrough in their spiritual
                            journey and experience the fullness of God&apos;s
                            healing power.
                          </DrawerDescription>
                        </div>
                      </div>
                    </DrawerHeader>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>

            {/* Row 2: Todd Edwards - Small (1 col) */}
            <Drawer
              open={openDrawer === "todd"}
              onOpenChange={(open) => setOpenDrawer(open ? "todd" : null)}
            >
              <motion.div
                {...fadeInUp}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="order-2 md:order-none md:col-span-1 lg:col-span-1"
              >
                <DrawerTrigger asChild>
                  <Card className="border-none shadow-xl overflow-hidden rounded-3xl h-full bg-gradient-to-br from-white to-zinc-50 cursor-pointer transition-all hover:shadow-2xl">
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src="/toddedwards.png"
                        alt="Todd Edwards"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00AEA9]/40 via-[#00C4B8]/30 to-[#00AEA9]/40"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-3">
                        Todd Edwards
                      </h3>
                      <p className="text-sm md:text-base text-zinc-600 mb-4 leading-relaxed">
                        Todd Edwards is a senior executive with over three
                        decades of experience. As a senior leader at BRIDE
                        Ministries International, he created the Todd Talks
                        podcast from his bi-weekly Saturday Bible Study. He is
                        an ordained apostle and board member who has served the
                        body of Christ through evangelism, teaching, prayer and
                        deliverance for over 30 years.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm md:text-base text-zinc-700">
                          <div className="w-1.5 h-1.5 bg-[#00AEA9] rounded-full"></div>
                          <span>Ministry leader</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DrawerTrigger>
              </motion.div>
              <DrawerContent className="max-h-[90vh] flex flex-col">
                <div className="flex-1 overflow-y-auto">
                  <div className="mx-auto w-full max-w-4xl">
                    <DrawerHeader>
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src="/toddedwards.png"
                            alt="Todd Edwards"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <DrawerTitle className="text-3xl md:text-4xl font-bold mb-4">
                            Todd Edwards
                          </DrawerTitle>
                          <DrawerDescription className="text-lg text-zinc-600 leading-relaxed">
                            Todd Edwards is a senior executive at a software
                            company with over three decades of experience. As a
                            senior leader at BRIDE Ministries International and
                            close friend of Daniel Duval, Todd created the Todd
                            Talks podcast from his bi-weekly Saturday Bible
                            Study, discussing Biblical truth that supports BRIDE
                            Ministries&apos; revelation on the Kingdom of God.
                            He is an ordained apostle and board member who has
                            served the body of Christ through evangelism,
                            teaching, prayer and deliverance for over 30 years,
                            including nine years with Bride Ministries.
                          </DrawerDescription>
                        </div>
                      </div>
                    </DrawerHeader>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>

            {/* Row 3: David Herzog - Horizontal (spans 2 cols) */}
            <Drawer
              open={openDrawer === "david"}
              onOpenChange={(open) => setOpenDrawer(open ? "david" : null)}
            >
              <motion.div
                {...fadeInUp}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="order-1 md:order-none md:col-span-2 lg:col-span-2"
              >
                <DrawerTrigger asChild>
                  <Card className="border-none shadow-2xl overflow-hidden rounded-3xl h-full cursor-pointer transition-all hover:shadow-3xl flex flex-col">
                    <div className="grid md:grid-cols-5 gap-0 flex-1 min-h-0">
                      <div className="md:col-span-2 h-full min-h-[300px] md:min-h-0 relative">
                        <ImageWithFallback
                          src="/davidherzog.jpeg"
                          alt="David Herzog"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00AEA9]/40 via-[#00C4B8]/30 to-[#00AEA9]/40"></div>
                      </div>
                      <CardContent className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                          David Herzog
                        </h3>
                        <p className="text-lg md:text-xl text-zinc-600 mb-6 leading-relaxed">
                          Co-founder of The Glory Zone and Awaken2020. Author of
                          11 books including &apos;Glory Invasion&apos;.
                          Ministered in over 70 nations seeing incredible
                          healings, miracles, signs and wonders.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-4 text-base md:text-lg text-zinc-700">
                            <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#00AEA9] flex-shrink-0" />
                            <span>Prophetic ministry</span>
                          </div>
                          <div className="flex items-center gap-4 text-base md:text-lg text-zinc-700">
                            <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#00AEA9] flex-shrink-0" />
                            <span>Global revival</span>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </DrawerTrigger>
              </motion.div>
              <DrawerContent className="max-h-[90vh] flex flex-col">
                <div className="flex-1 overflow-y-auto">
                  <div className="mx-auto w-full max-w-4xl">
                    <DrawerHeader>
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src="/davidherzog.jpeg"
                            alt="David Herzog"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <DrawerTitle className="text-3xl md:text-4xl font-bold mb-4">
                            David Herzog
                          </DrawerTitle>
                          <DrawerDescription className="text-lg text-zinc-600 leading-relaxed whitespace-pre-line">
                            Dr. David Herzog is the co-founder of The Glory Zone
                            and Awaken2020. David has an evangelistic, prophetic
                            and teaching ministry and extensive revelation on
                            living and operating in the Glory of God and seeing
                            national Awakening. He is the author of 11 books
                            including &apos;Glory Invasion&apos;. He has been a
                            guest on numerous TV shows such as Daystar, TBN,
                            It&apos;s Supernatural and the Fox News Channel. Dr.
                            David and Stephanie based in Phoenix, Arizona have
                            been in full time ministry for over 32 years and
                            have lived 12 years on the mission field. David and
                            his wife Stephanie have ministered in over 70
                            nations in large national evangelistic stadiums,
                            hosting and speaking in conferences, churches,
                            revivals, and outreaches seeing incredible healings,
                            miracles, signs and wonders and deliverances
                            confirming the Gospel message. Dr. David Herzog also
                            prophetically counsels and prays with Presidents,
                            Vice Presidents, Prime Ministers and other
                            government leaders, media and celebrities in the
                            entertainment industry.
                          </DrawerDescription>
                        </div>
                      </div>
                    </DrawerHeader>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>

            {/* Row 3: More Speakers - Small (1 col) */}
            <Drawer
              open={openDrawer === "more"}
              onOpenChange={(open) => setOpenDrawer(open ? "more" : null)}
            >
              <motion.div
                {...fadeInUp}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="order-2 md:order-none md:col-span-1 lg:col-span-1"
              >
                <DrawerTrigger asChild>
                  <Card className="border-none shadow-xl overflow-hidden rounded-3xl h-full bg-gradient-to-br from-white to-zinc-50 cursor-pointer transition-all hover:shadow-2xl">
                    <div className="relative h-64 bg-gradient-to-br from-zinc-700 via-zinc-600 to-zinc-700 flex items-center justify-center overflow-hidden">
                      <motion.div
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 bg-[length:200%_100%]"
                      />
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative z-10"
                      >
                        <div className="text-6xl">✨</div>
                      </motion.div>
                      <motion.div
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-white/10"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-3">
                        More Speakers
                      </h3>
                      <p className="text-sm md:text-base text-zinc-600 mb-4 leading-relaxed">
                        Additional speakers will be announced soon. Stay tuned
                        for updates!
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm md:text-base text-zinc-700">
                          <motion.div
                            animate={{
                              scale: [1, 1.3, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="w-1.5 h-1.5 bg-[#00AEA9] rounded-full"
                          ></motion.div>
                          <span>More announcements coming</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DrawerTrigger>
              </motion.div>
              <DrawerContent className="max-h-[90vh] flex flex-col">
                <div className="flex-1 overflow-y-auto">
                  <div className="mx-auto w-full max-w-4xl">
                    <DrawerHeader>
                      <div className="w-full">
                        <Badge className="bg-[#00AEA9]/10 text-[#00AEA9] border-none mb-4 rounded-full">
                          Coming Soon
                        </Badge>
                        <DrawerTitle className="text-3xl md:text-4xl font-bold mb-4">
                          More Speakers
                        </DrawerTitle>
                        <DrawerDescription className="text-lg text-zinc-600 leading-relaxed">
                          Additional speakers will be announced soon. Stay tuned
                          for updates on our amazing lineup of speakers who will
                          be joining us for this transformative event.
                        </DrawerDescription>
                      </div>
                    </DrawerHeader>
                    <div className="px-4 pb-6">
                      <div className="space-y-4 mt-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="p-6 bg-gradient-to-br from-[#00AEA9]/5 to-[#00C4B8]/5 rounded-2xl border border-[#00AEA9]/10"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-[#00AEA9] rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-base text-zinc-700">
                                Additional powerful voices in ministry will be
                                joining us
                              </p>
                            </div>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="p-6 bg-gradient-to-br from-[#00AEA9]/5 to-[#00C4B8]/5 rounded-2xl border border-[#00AEA9]/10"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-[#00AEA9] rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-base text-zinc-700">
                                Each speaker brings unique revelation and
                                anointing
                              </p>
                            </div>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="p-6 bg-gradient-to-br from-[#00AEA9]/5 to-[#00C4B8]/5 rounded-2xl border border-[#00AEA9]/10"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-[#00AEA9] rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-base text-zinc-700">
                                Expect powerful teaching, ministry, and
                                activation
                              </p>
                            </div>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="p-6 bg-gradient-to-br from-[#00AEA9]/5 to-[#00C4B8]/5 rounded-2xl border border-[#00AEA9]/10"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-[#00AEA9] rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-base text-zinc-700">
                                Announcements will be made via email and social
                                media
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </motion.div>
        </div>
      </section>
      {/* Pricing & Registration Section - Funnel Step 8 */}
      <section
        id="pricing"
        className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AEA9] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00AEA9] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16 text-white">
            <motion.div {...fadeIn}>
              <Badge className="bg-[#00AEA9] text-white border-none px-6 py-2 mb-6 rounded-full">
                Best Deal Of The Season
              </Badge>
            </motion.div>
            <motion.h2
              {...fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Secure Your Spot
            </motion.h2>
            <motion.p
              {...fadeIn}
              className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto"
            >
              Limited spaces available. Lock in low registration rates today!
            </motion.p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 20px 60px rgba(0, 174, 169, 0.2)",
                  "0 20px 60px rgba(0, 174, 169, 0.4)",
                  "0 20px 60px rgba(0, 174, 169, 0.2)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Card className="border-2 border-[#00AEA9]/30 shadow-2xl rounded-3xl bg-white/95 backdrop-blur-sm relative overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{
                    background: [
                      "radial-gradient(circle at 0% 0%, rgba(0, 174, 169, 0.3), transparent 50%)",
                      "radial-gradient(circle at 100% 100%, rgba(0, 196, 184, 0.3), transparent 50%)",
                      "radial-gradient(circle at 0% 0%, rgba(0, 174, 169, 0.3), transparent 50%)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <CardContent className="p-12 relative z-10">
                  <div className="text-center mb-10">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Badge className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-500 border-none mb-6 text-white px-6 py-2 rounded-full text-base shadow-lg">
                        🔥Early Early Bird Special
                      </Badge>
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="flex items-center justify-center gap-3 mb-3 relative"
                    >
                      <span className="absolute -top-2 -right-5 md:-top-3 md:-right-1 text-2xl md:text-3xl font-bold text-red-500 line-through">
                        $75
                      </span>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.5,
                        }}
                      >
                        <DollarSign className="h-10 w-10 text-[#00AEA9]" />
                      </motion.div>
                      <motion.span
                        className="text-6xl font-bold bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] bg-clip-text text-transparent"
                        animate={{
                          backgroundPosition: ["0%", "100%", "0%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{
                          backgroundSize: "200% auto",
                        }}
                      >
                        25
                      </motion.span>
                    </motion.div>

                    <p className="text-xl text-zinc-600 mb-6 font-semibold">
                      Per Adult <br />{" "}
                      <span className="text-zinc-600 font-bold">
                        Children free
                      </span>
                    </p>

                    <motion.div
                      className="inline-block bg-gradient-to-r from-[#00AEA9]/10 to-[#00C4B8]/10 px-6 py-3 rounded-2xl border border-[#00AEA9]/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="text-[#00AEA9] text-lg font-semibold">
                        Early Early Bird: Ends November 23, 2025
                      </span>
                    </motion.div>
                  </div>

                  <div className="space-y-5 mb-10">
                    {[
                      "All teaching sessions & ministry times",
                      "Conference materials & resources",
                      "Access to recorded sessions post-event",
                      "Complimentary Reception",
                      "Payment plans available.",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 0.5,
                            delay: 0.5 + index * 0.1,
                          }}
                        >
                          <CheckCircle2 className="h-6 w-6 text-[#00AEA9] flex-shrink-0 mt-0.5" />
                        </motion.div>
                        <span className="text-lg text-zinc-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="lg"
                      onClick={() =>
                        window.open(
                          "https://bridechurch.churchcenter.com/registrations/events/3225360",
                          "_blank"
                        )
                      }
                      className="relative w-full bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] hover:from-[#00C4B8] hover:to-[#00AEA9] h-12 sm:h-14 md:h-16 text-base sm:text-lg md:text-xl rounded-full mb-4 shadow-xl shadow-[#00AEA9]/25 font-semibold text-white border-0 overflow-hidden group transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Get 65% off registration now!
                        <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                          ease: "easeInOut",
                        }}
                      />
                    </Button>
                  </motion.div>

                  <p className="text-center text-zinc-500 text-lg">
                    *Hotel Booking Required At Checkout.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Venue Gallery Section with Crossing Carousels */}
      <section
        id="venue"
        className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <Badge className="bg-[#00AEA9]/10 text-[#00AEA9] border-none px-6 py-2 mb-4 rounded-full">
              The Venue
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                Westin Galleria Houston
              </span>
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-6">
              A stunning Four Diamond-rated hotel in the heart of Houston
            </p>
            <div className="flex items-center justify-center gap-2 text-zinc-600">
              <MapPin className="h-5 w-5 text-[#00AEA9]" />
              <span className="text-base">
                5060 W Alabama St, Houston, TX 77056
              </span>
            </div>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            {/* Crossing Carousels */}
            <div className="mb-12 relative">
              {/* First Carousel - Moving Left */}
              <div className="overflow-hidden mb-4">
                <div className="flex animate-scroll-left">
                  {[
                    "/galleria/Screenshot 2025-11-17 161930.png",
                    "/galleria/Screenshot 2025-11-17 161936.png",
                    "/galleria/Screenshot 2025-11-17 161951.png",
                    "/galleria/Screenshot 2025-11-17 162000.png",
                    "/galleria/Screenshot 2025-11-17 162035.png",
                    "/galleria/Screenshot 2025-11-17 162042.png",
                    "/galleria/Screenshot 2025-11-17 162050.png",
                    "/galleria/Screenshot 2025-11-17 162106.png",
                    "/galleria/Screenshot 2025-11-17 162120.png",
                    "/galleria/Screenshot 2025-11-17 163617.png",
                    "/galleria/Screenshot 2025-11-17 163638.png",
                    "/galleria/Screenshot 2025-11-17 163648.png",
                    "/galleria/Screenshot 2025-11-17 163702.png",
                    "/galleria/Screenshot 2025-11-17 163715.png",
                    "/galleria/Screenshot 2025-11-17 161930.png",
                    "/galleria/Screenshot 2025-11-17 161936.png",
                    "/galleria/Screenshot 2025-11-17 161951.png",
                    "/galleria/Screenshot 2025-11-17 162000.png",
                  ].map((src, index) => (
                    <div
                      key={`left-${index}`}
                      className="flex-shrink-0 w-80 h-64 mx-3 rounded-xl overflow-hidden shadow-lg"
                    >
                      <ImageWithFallback
                        src={src}
                        alt="Venue Gallery"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Carousel - Moving Right */}
              <div className="overflow-hidden">
                <div className="flex animate-scroll-right">
                  {[
                    "/galleria/Screenshot 2025-11-17 163715.png",
                    "/galleria/Screenshot 2025-11-17 163702.png",
                    "/galleria/Screenshot 2025-11-17 163648.png",
                    "/galleria/Screenshot 2025-11-17 163638.png",
                    "/galleria/Screenshot 2025-11-17 163617.png",
                    "/galleria/Screenshot 2025-11-17 162120.png",
                    "/galleria/Screenshot 2025-11-17 162106.png",
                    "/galleria/Screenshot 2025-11-17 162050.png",
                    "/galleria/Screenshot 2025-11-17 162042.png",
                    "/galleria/Screenshot 2025-11-17 162035.png",
                    "/galleria/Screenshot 2025-11-17 162000.png",
                    "/galleria/Screenshot 2025-11-17 161951.png",
                    "/galleria/Screenshot 2025-11-17 161936.png",
                    "/galleria/Screenshot 2025-11-17 161930.png",
                    "/galleria/Screenshot 2025-11-17 163715.png",
                    "/galleria/Screenshot 2025-11-17 163702.png",
                    "/galleria/Screenshot 2025-11-17 163648.png",
                    "/galleria/Screenshot 2025-11-17 163638.png",
                  ].map((src, index) => (
                    <div
                      key={`right-${index}`}
                      className="flex-shrink-0 w-80 h-64 mx-3 rounded-xl overflow-hidden shadow-lg"
                    >
                      <ImageWithFallback
                        src={src}
                        alt="Venue Gallery"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <motion.div {...fadeInUp} className="mb-8">
              <Card className="border-none shadow-2xl rounded-2xl overflow-hidden">
                <div className="relative w-full h-[400px] md:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps?q=Westin+Galleria+Houston+5060+W+Alabama+St+Houston+TX+77056&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Westin Galleria Houston Location"
                  ></iframe>
                </div>
                <CardContent className="p-6 bg-zinc-50">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-[#00AEA9] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-zinc-900 mb-1 text-lg">
                        Westin Galleria Houston
                      </p>
                      <p className="text-zinc-600">
                        5060 W Alabama St, Houston, TX 77056
                      </p>
                      <p className="text-sm text-zinc-500 mt-2">
                        Four Diamond-rated hotel with direct access to The
                        Galleria Mall
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 md:py-32 bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <motion.div {...fadeIn}>
              <Badge className="bg-[#00AEA9]/10 text-[#00AEA9] border-none px-6 py-2 mb-6 rounded-full">
                Questions Answered
              </Badge>
            </motion.div>
            <motion.h2
              {...fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </motion.h2>
            <motion.p
              {...fadeIn}
              className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto"
            >
              Everything you need to know about the Bride Tribe Advance.
            </motion.p>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "I need help with registration. Who do I contact?",
                  answer:
                    "Please visit support.bridemovement.com, We have over 45 articles on the most frequently asked questions. If you still need help, you can email us at advance@bridemovement.com and someone from our team will get back to you within 24 hours.",
                },
                {
                  question: "When does the event start and end?",
                  answer:
                    "The first session starts at 11 a.m. CST on Thursday. The last session is Saturday night. Your registration includes the hotel room for Saturday night if booked and the 10 a.m. Sunday morning service. Check-out is before service on Sunday morning. Check in will begin at 3pm CST.",
                },
                {
                  question: "How do I book an early arrival?",
                  answer:
                    "You can book an early arrival room for Wednesday, November 18 during the registration process or email us at advance@bridemovement.com ",
                },
                {
                  question: "What is the schedule for the Advance?",
                  answer:
                    "We will share the schedule of the Advance closer to the event date when the details are finalized.",
                },
                {
                  question: "How do I update my reservations for 2025 Advance?",
                  answer:
                    "Please contact advance@bridemovement.com for any registration updates. Please keep in mind that once your booking order is placed a $15 administration fee will be charged. We can not guarantee adding additional attendees due to room capacity.",
                },
                {
                  question: "Will the Bride Tribe Advance be Live Streamed?",
                  answer:
                    "Yes! Our Annual Bride Tribe Advance will be live-streamed. Live Stream Passes are now on SALE.",
                },
                {
                  question: "What are parking cost associated with my stay?",
                  answer:
                    "The Westin Galleria Houston has complementary self-parking during your stay.",
                },
                {
                  question: "What time is Hotel Check in?",
                  answer:
                    "Hotel check-in for the conference will begin at 3:00 PM CST and check out is at 12 PM CST. Conference registration will open at 8:30 AM on Thursday morning.",
                },
                {
                  question: "Do you offer payment plans?",
                  answer:
                    "Yes. If you need to set up a payment plan, you can do so by contacting the registration team at advance@bridemovement.com",
                },
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="bg-white border-none shadow-md rounded-2xl px-8"
                >
                  <AccordionTrigger className="hover:no-underline py-8 text-xl font-semibold text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-zinc-600 pb-8 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
            <motion.h2
              {...fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-8"
            >
              Your Breakthrough Awaits
            </motion.h2>
            <motion.p
              {...fadeIn}
              className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-3xl mx-auto"
            >
              Don&apos;t let this opportunity pass you by. Join us for three
              days that could change your life!
            </motion.p>
            <motion.div {...scaleIn}>
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://bridechurch.churchcenter.com/registrations/events/3225360",
                    "_blank"
                  )
                }
                className="relative bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] hover:from-[#00C4B8] hover:to-[#00AEA9] px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 text-base sm:text-lg md:text-2xl h-auto shadow-2xl shadow-[#00AEA9]/30 rounded-full font-semibold text-white border-0 overflow-hidden group transition-all duration-300 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center">
                  Secure Your Spot Today
                  <ChevronRight className="ml-2 h-7 w-7 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Mission moved below */}
            {/* Logo & About */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Mission</h3>
              <p className="text-zinc-400 mb-6 max-w-md text-lg">
                It is our vision to promote unity in the body of Christ
                worldwide and assist in the creation and development of Sheep
                Nations.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-zinc-400 text-lg">
                  <Mail className="h-5 w-5 text-[#00AEA9] flex-shrink-0" />
                  <a
                    href="mailto:advance@bridemovement.com"
                    className="hover:text-[#00AEA9] transition-colors"
                  >
                    advance@bridemovement.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-zinc-400 text-lg">
                  <Phone className="h-5 w-5 text-[#00AEA9] flex-shrink-0" />
                  <a
                    href="tel:832-906-7497"
                    className="hover:text-[#00AEA9] transition-colors"
                  >
                    832-906-7497
                  </a>
                </li>
                <li className="flex items-center gap-2 text-zinc-400 text-lg">
                  <MapPin className="h-5 w-5 text-[#00AEA9] flex-shrink-0" />
                  <span>4817 Schlipf Rd, Katy, TX 77493</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400">
              © 2026 Bride Ministries International. All rights reserved.
            </p>
            <div className="flex gap-6 items-center"></div>
          </div>
        </div>
      </footer>

      {/* Stats Modal */}
      <Dialog open={isStatsModalOpen} onOpenChange={setIsStatsModalOpen}>
        <DialogContent className="max-w-4xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border-zinc-700">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-white text-center mb-8">
              Event Overview
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                number: "4",
                label: "Days",
                color: "from-amber-500 to-amber-600",
              },
              {
                number: "4+",
                label: "Speakers",
                color: "from-amber-500 to-amber-600",
              },
              {
                number: "800+",
                label: "Attendees",
                color: "from-amber-500 to-amber-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none bg-gradient-to-br from-amber-500/90 to-amber-600/90 shadow-2xl overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: index * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="text-6xl md:text-7xl font-bold text-white mb-4"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-xl font-semibold text-white/90 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating Back to Top Button - Only shows at bottom */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] hover:from-[#00C4B8] hover:to-[#00AEA9] rounded-full text-white shadow-2xl shadow-[#00AEA9]/30 transition-all duration-300 group"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            <span className="text-sm font-semibold">Back to Top</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
