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
  Facebook,
  Instagram,
  Youtube,
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

export default function Home() {
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 1, ease: "easeOut" },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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
        className="relative min-h-screen flex items-center overflow-hidden snap-start bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
        style={{ minHeight: "100dvh" }}
      >
        {/* Dynamic Background with Parallax Layers */}
        <div className="absolute inset-0 z-0">
          {/* Base Image Layer */}
          <motion.div
            className="absolute inset-0"
            style={{ willChange: "transform" }}
          >
            <ImageWithFallback
              src="/hero_section_small_backdrop.jpg"
              alt="Worship Conference"
              className="w-full h-full object-cover object-center opacity-30"
            />
          </motion.div>

          {/* Animated Mesh Gradient Overlay */}
          <motion.div
            className="absolute inset-0"
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
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Main Content - Split Layout */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 sm:pt-20 md:pt-24 lg:pt-20 pb-8 sm:pb-12 lg:pb-20 max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 sm:space-y-8"
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
                    ADVANCE
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
                A transformative 4-day experience of{" "}
                <span className="text-[#00AEA9] font-semibold">identity</span>,{" "}
                <span className="text-[#00AEA9] font-semibold">healing</span>,
                and{" "}
                <span className="text-[#00AEA9] font-semibold">
                  spiritual activation
                </span>
              </motion.p>

              {/* Date & Location Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4"
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
                className="pt-2 sm:pt-4"
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
                    Secure Your Spot Now
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
                className="grid grid-cols-3 gap-2 sm:gap-3 pt-2 sm:pt-4"
              >
                {[
                  { number: "4", label: "Days", icon: Calendar },
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

            {/* Right Side - Video Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full mt-6 sm:mt-8 lg:mt-0"
            >
              <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 bg-black/20 backdrop-blur-sm">
                <div className="aspect-video sm:aspect-[4/3] relative w-full">
                  {/* Video Placeholder - Replace with actual video URL */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-[#00AEA9]/20 flex items-center justify-center">
                        <Youtube className="h-8 w-8 sm:h-10 sm:w-10 text-[#00AEA9]" />
                      </div>
                      <p className="text-white/70 text-xs sm:text-sm">
                        Video Coming Soon
                      </p>
                      <p className="text-white/50 text-[10px] sm:text-xs mt-1 sm:mt-2">
                        Experience highlights from previous events
                      </p>
                    </div>
                  </div>
                  {/* Uncomment and add your video URL when ready:
                  <iframe
                    className="w-full h-full"
                    src="YOUR_VIDEO_URL"
                    title="Bride Tribe Advance Highlights"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  */}
                </div>
              </div>
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
            className="group flex flex-col items-center gap-1 sm:gap-2"
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
      <section id="why-attend" className="py-32 bg-white snap-start">
        <div className="container mx-auto px-6">
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
                Why You Need This Experience
              </span>
            </motion.h2>
            <motion.p
              {...fadeIn}
              className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto mb-8"
            >
              The Bride Tribe Advance isn't just another event—it's a divine
              appointment for your breakthrough.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            <motion.div {...fadeInUp} className="space-y-6">
              {[
                {
                  icon: Target,
                  title: "You're Ready for More",
                  description:
                    "If you feel called to deeper spiritual maturity and greater impact for the Kingdom, this advance will unlock the next level of your journey.",
                },
                {
                  icon: Heart,
                  title: "You Need Healing",
                  description:
                    "Whether dealing with past wounds, spiritual oppression, or emotional struggles, experience the freedom that comes through biblical deliverance ministry.",
                },
                {
                  icon: Star,
                  title: "You Want Clarity",
                  description:
                    "Discover your true identity in Christ and receive prophetic activation that brings clarity to your calling and purpose.",
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
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                    <h3 className="text-3xl font-bold mb-3">
                      Join Hundreds on the Journey
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
        className="relative -my-16 z-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-gradient-to-r from-[#00AEA9] via-[#00C4B8] to-[#00AEA9] rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-white overflow-hidden"
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
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    Ready to Begin Your Journey?
                  </h3>
                  <p className="text-sm md:text-base text-white/90">
                    Secure your spot today and experience breakthrough
                  </p>
                </div>
                <Button
                  onClick={() =>
                    window.open(
                      "https://bridechurch.churchcenter.com/registrations/events/3225360",
                      "_blank"
                    )
                  }
                  className="relative bg-white text-[#00AEA9] hover:bg-zinc-50 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 group"
                >
                  Reserve Your Spot
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
      <section id="experience" className="py-32 bg-zinc-50 snap-start">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <motion.div {...fadeIn}>
              <Badge className="bg-[#00AEA9]/10 text-[#00AEA9] border-none px-6 py-2 mb-6 rounded-full">
                What's Included
              </Badge>
            </motion.div>
            <motion.h2
              {...fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                Experience Community
              </span>
            </motion.h2>
            <motion.p
              {...fadeIn}
              className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto"
            >
              Every element of the Advance is designed to facilitate your
              breakthrough and spiritual growth.
            </motion.p>
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
        className="relative -my-16 z-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-white rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-zinc-100 overflow-hidden"
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
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
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
                  className="relative bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] hover:from-[#00C4B8] hover:to-[#00AEA9] px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 group"
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
      <section id="gallery" className="py-32 bg-white snap-start">
        <div className="container mx-auto px-6">
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
                  src="/1Z0A5028-scaled.jpg"
                  alt="Worship Moment"
                  className="w-full h-full min-h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-none mb-4 rounded-full">
                    Powerful Worship
                  </Badge>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Experience God's Presence
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
                  src="/1Z0A5123.jpg"
                  alt="Prayer Ministry"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white">
                    Personal Ministry
                  </h4>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-xl h-64">
                <ImageWithFallback
                  src="/1Z0A5179.jpg"
                  alt="Community"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white">
                    Build Community
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
              className="relative bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] hover:from-[#00C4B8] hover:to-[#00AEA9] px-12 py-7 text-xl h-auto shadow-xl shadow-[#00AEA9]/25 rounded-full font-semibold text-white border-0 overflow-hidden group transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                I'm Ready to Transform
                <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Meet the Hosts Section - Funnel Step 4 */}
      <section id="hosts" className="py-32 bg-zinc-50 snap-start">
        <div className="container mx-auto px-6">
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
            className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Main Host - Dan Duval */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-none shadow-2xl overflow-hidden rounded-3xl h-full">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2">
                    <ImageWithFallback
                      src="/1Z0A5430-1.jpg"
                      alt="Dan Duval"
                      className="w-full h-full min-h-[400px] object-cover"
                    />
                  </div>
                  <CardContent className="md:col-span-3 p-8 md:p-12">
                    <Badge className="bg-[#00AEA9] hover:bg-[#00AEA9]/90 border-none mb-4 rounded-full">
                      Lead Instructor
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      Dan Duval
                    </h3>
                    <p className="text-lg md:text-xl text-zinc-600 mb-6 leading-relaxed">
                      With decades of ministry experience, Dan Duval carries a
                      powerful anointing for deliverance, inner healing, and
                      spiritual warfare. His teaching brings clarity,
                      breakthrough, and activation to thousands seeking deeper
                      intimacy with God.
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
            </motion.div>

            {/* Katie Souza */}
            <motion.div
              {...fadeInUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative"
            >
              <Card className="border-none shadow-xl overflow-hidden rounded-3xl h-full bg-gradient-to-br from-white to-zinc-50">
                <div className="relative h-64 bg-gradient-to-br from-[#00AEA9]/20 to-[#00C4B8]/10 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-[#00AEA9]/30 to-[#00C4B8]/20"
                  />
                  <span className="relative z-10 text-2xl font-bold text-zinc-500">
                    Demo Image
                  </span>
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-[#00AEA9]/10 text-[#00AEA9] border-none mb-3 rounded-full">
                    Featured Speaker
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Katie Souza
                  </h3>
                  <p className="text-sm md:text-base text-zinc-600 mb-4 leading-relaxed">
                    Katie Souza is a powerful voice in healing and breakthrough
                    ministry, known for her anointing in physical and emotional
                    healing.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm md:text-base text-zinc-700">
                      <div className="w-1.5 h-1.5 bg-[#00AEA9] rounded-full"></div>
                      <span>Healing ministry</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-base text-zinc-700">
                      <div className="w-1.5 h-1.5 bg-[#00AEA9] rounded-full"></div>
                      <span>Breakthrough activation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* David Herzog */}
            <motion.div
              {...fadeInUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative"
            >
              <Card className="border-none shadow-xl overflow-hidden rounded-3xl h-full bg-gradient-to-br from-white to-zinc-50">
                <div className="relative h-64 bg-gradient-to-br from-[#00C4B8]/20 to-[#00AEA9]/10 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-[#00C4B8]/30 to-[#00AEA9]/20"
                  />
                  <span className="relative z-10 text-2xl font-bold text-zinc-500">
                    Demo Image
                  </span>
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-[#00AEA9]/10 text-[#00AEA9] border-none mb-3 rounded-full">
                    Featured Speaker
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    David Herzog
                  </h3>
                  <p className="text-sm md:text-base text-zinc-600 mb-4 leading-relaxed">
                    David Herzog brings powerful prophetic ministry and global
                    revival insights to equip believers for their calling.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm md:text-base text-zinc-700">
                      <div className="w-1.5 h-1.5 bg-[#00AEA9] rounded-full"></div>
                      <span>Prophetic ministry</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-base text-zinc-700">
                      <div className="w-1.5 h-1.5 bg-[#00AEA9] rounded-full"></div>
                      <span>Global revival</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Christian Duval */}
            <motion.div
              {...fadeInUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative"
            >
              <Card className="border-none shadow-xl overflow-hidden rounded-3xl h-full bg-gradient-to-br from-white to-zinc-50">
                <div className="relative h-64 bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.7,
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-[#00AEA9]/20 to-[#00C4B8]/20"
                  />
                  <span className="relative z-10 text-2xl font-bold text-zinc-500">
                    Demo Image
                  </span>
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-[#00AEA9]/10 text-[#00AEA9] border-none mb-3 rounded-full">
                    Co-Host
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Christian Duval
                  </h3>
                  <p className="text-sm md:text-base text-zinc-600 mb-4 leading-relaxed">
                    Christian brings a prophetic edge to ministry, helping
                    believers unlock their spiritual gifts and walk in their
                    divine calling.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm md:text-base text-zinc-700">
                      <div className="w-1.5 h-1.5 bg-[#00AEA9] rounded-full"></div>
                      <span>Prophetic minister</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-base text-zinc-700">
                      <div className="w-1.5 h-1.5 bg-[#00AEA9] rounded-full"></div>
                      <span>Inner healing specialist</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Speakers - Placeholder for future */}
            <motion.div
              {...fadeInUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative"
            >
              <Card className="border-none shadow-xl overflow-hidden rounded-3xl h-full bg-gradient-to-br from-white to-zinc-50">
                <div className="relative h-64 bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.9,
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-[#00AEA9]/20 to-[#00C4B8]/20"
                  />
                  <span className="relative z-10 text-2xl font-bold text-zinc-500">
                    Demo Image
                  </span>
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-[#00AEA9]/10 text-[#00AEA9] border-none mb-3 rounded-full">
                    Ministry Leader
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Demo Speaker
                  </h3>
                  <p className="text-sm md:text-base text-zinc-600 mb-4 leading-relaxed">
                    With a strong foundation in spiritual warfare and
                    deliverance, this speaker equips believers to stand
                    victorious in their faith.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm md:text-base text-zinc-700">
                      <div className="w-1.5 h-1.5 bg-[#00AEA9] rounded-full"></div>
                      <span>Spiritual warfare expert</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-base text-zinc-700">
                      <div className="w-1.5 h-1.5 bg-[#00AEA9] rounded-full"></div>
                      <span>Deliverance practitioner</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Day 1 Emphasis Section - Funnel Step 5 */}
      <section
        id="schedule"
        className="py-32 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white relative overflow-hidden snap-start"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AEA9] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00AEA9] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <Badge className="bg-[#00AEA9] text-white border-none px-6 py-2 mb-6 rounded-full">
              Where It All Begins
            </Badge>
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-[#00AEA9] bg-clip-text text-transparent">
                Day One: Foundation{" "}
                <span className="text-[#00AEA9] drop-shadow-[0_0_20px_rgba(0,174,169,0.8)]">
                  2026
                </span>
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
              Everything begins here. Day one sets the stage for your entire
              transformation journey.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp}>
              <Card className="border-none shadow-2xl rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                <CardContent className="p-16">
                  <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-20 h-20 bg-[#00AEA9] rounded-2xl flex items-center justify-center">
                          <span className="text-4xl font-bold text-white">
                            1
                          </span>
                        </div>
                        <div>
                          <div className="text-[#00AEA9] text-lg mb-2">
                            Day One
                          </div>
                          <h3 className="text-4xl text-white font-bold">
                            Orientation + Identity Teaching
                          </h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-zinc-300 text-xl mb-8">
                        <Clock className="h-6 w-6 text-[#00AEA9]" />
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <p className="text-2xl text-zinc-300 leading-relaxed mb-8">
                        Day one is where transformation begins. We lay the
                        foundation with powerful teaching on your true identity
                        in Christ, helping you understand the depth of your
                        calling and preparing you for breakthrough.
                      </p>
                      <div className="space-y-4">
                        {[
                          "Deep dive into biblical identity",
                          "Understanding your authority in Christ",
                          "Breaking false beliefs and lies",
                          "Prophetic activation and impartation",
                          "Personal ministry begins",
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4"
                          >
                            <CheckCircle2 className="h-6 w-6 text-[#00AEA9] flex-shrink-0" />
                            <span className="text-lg text-zinc-300">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src="/hero_section_small_backdrop.jpg"
                        alt="Day One Experience"
                        className="w-full h-[600px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-none mb-3 rounded-full">
                          The Foundation
                        </Badge>
                        <h4 className="text-2xl text-white font-bold mb-2">
                          Your Journey Starts Here
                        </h4>
                        <p className="text-lg text-zinc-200">
                          Experience the power of knowing who you truly are in
                          Christ.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#00AEA9]/10 border border-[#00AEA9]/20 rounded-2xl p-8 text-center">
                    <Award className="h-12 w-12 text-[#00AEA9] mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-3 text-white">
                      Why Day One Matters Most
                    </h4>
                    <p className="text-xl text-zinc-200">
                      Without a solid foundation in your identity, breakthrough
                      cannot be sustained. Day one equips you with the truth
                      that will carry you through the entire advance and beyond.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Complete 4-Day Journey Section - Funnel Step 6 */}
      <section className="py-32 bg-white snap-start">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <Badge className="bg-[#00AEA9]/10 text-[#00AEA9] border-none px-6 py-2 mb-6 rounded-full">
              Your Complete Journey
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                4-Day Breakthrough Pathway
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto">
              Each day builds upon the last, creating a comprehensive pathway to
              breakthrough and transformation.
            </p>
          </motion.div>

          <motion.div
            {...staggerChildren}
            className="max-w-4xl mx-auto space-y-6"
          >
            {[
              {
                day: "Day 2",
                title: "Activation + Inner Healing Sessions",
                description:
                  "Experience the power of deliverance ministry and receive personal inner healing. Break free from spiritual bondage and step into greater freedom. This is where deep work happens.",
                time: "9:00 AM - 7:00 PM",
              },
              {
                day: "Day 3",
                title: "Breakthrough Ministry + Commissioning",
                description:
                  "Step into your calling with prophetic activation and commissioning. Leave empowered and equipped for your journey ahead with new authority and understanding.",
                time: "9:00 AM - 4:00 PM",
              },
              {
                day: "Day 4",
                title: "Final Activation + Commissioning",
                description:
                  "Complete your transformation journey with final activation sessions and commissioning. Leave fully equipped and empowered for your calling.",
                time: "9:00 AM - 12:30 PM",
              },
            ].map((item, index) => (
              <motion.div key={index} {...fadeInUp}>
                <Card className="border-l-4 border-l-[#00AEA9] shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
                  <CardContent className="p-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-[#00AEA9] rounded-2xl flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-2xl font-bold">
                            {index + 2}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm text-[#00AEA9] mb-2 font-semibold">
                            {item.day}
                          </div>
                          <h3 className="text-2xl font-bold">{item.title}</h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-600">
                        <Clock className="h-5 w-5" />
                        <span className="text-lg">{item.time}</span>
                      </div>
                    </div>
                    <p className="text-lg text-zinc-600 md:ml-20">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="text-center mt-16">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://bridechurch.churchcenter.com/registrations/events/3225360",
                  "_blank"
                )
              }
              className="relative bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] hover:from-[#00C4B8] hover:to-[#00AEA9] px-12 py-7 text-xl h-auto shadow-xl shadow-[#00AEA9]/25 rounded-full font-semibold text-white border-0 overflow-hidden group transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Secure My Transformation Journey
                <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Venue Gallery Section with Crossing Carousels */}
      <section id="venue" className="py-20 bg-white overflow-hidden snap-start">
        <div className="container mx-auto px-6">
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
                    "/galleria/159FB386-5AB9-49E8-B944-63D888731843_1_105_c.jpeg",
                    "/galleria/4937B467-0900-4DE9-B295-AD89FA0BCAC7_1_105_c.jpeg",
                    "/galleria/518D240C-10D1-4AD8-AAAE-CF51ABB05608_1_105_c.jpeg",
                    "/galleria/6467DD8F-E346-45DF-9C6C-457F0B65BA90_1_105_c.jpeg",
                    "/galleria/BF8A18D8-960E-4E49-8F70-7E3B2A5854BA_1_105_c.jpeg",
                    "/galleria/C6440BE1-57E3-4D10-82B0-8B41B0C6BBFC_1_105_c.jpeg",
                    "/galleria/F88AA4B0-3AF8-41F4-9E25-F4C3B119CE79_1_105_c.jpeg",
                    "/galleria/FC255BE6-B19B-4A5C-BEB1-060F09331EEE_1_105_c.jpeg",
                    "/galleria/159FB386-5AB9-49E8-B944-63D888731843_1_105_c.jpeg",
                    "/galleria/4937B467-0900-4DE9-B295-AD89FA0BCAC7_1_105_c.jpeg",
                    "/galleria/518D240C-10D1-4AD8-AAAE-CF51ABB05608_1_105_c.jpeg",
                    "/galleria/6467DD8F-E346-45DF-9C6C-457F0B65BA90_1_105_c.jpeg",
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
                    "/galleria/FC255BE6-B19B-4A5C-BEB1-060F09331EEE_1_105_c.jpeg",
                    "/galleria/F88AA4B0-3AF8-41F4-9E25-F4C3B119CE79_1_105_c.jpeg",
                    "/galleria/C6440BE1-57E3-4D10-82B0-8B41B0C6BBFC_1_105_c.jpeg",
                    "/galleria/BF8A18D8-960E-4E49-8F70-7E3B2A5854BA_1_105_c.jpeg",
                    "/galleria/6467DD8F-E346-45DF-9C6C-457F0B65BA90_1_105_c.jpeg",
                    "/galleria/518D240C-10D1-4AD8-AAAE-CF51ABB05608_1_105_c.jpeg",
                    "/galleria/4937B467-0900-4DE9-B295-AD89FA0BCAC7_1_105_c.jpeg",
                    "/galleria/159FB386-5AB9-49E8-B944-63D888731843_1_105_c.jpeg",
                    "/galleria/FC255BE6-B19B-4A5C-BEB1-060F09331EEE_1_105_c.jpeg",
                    "/galleria/F88AA4B0-3AF8-41F4-9E25-F4C3B119CE79_1_105_c.jpeg",
                    "/galleria/C6440BE1-57E3-4D10-82B0-8B41B0C6BBFC_1_105_c.jpeg",
                    "/galleria/BF8A18D8-960E-4E49-8F70-7E3B2A5854BA_1_105_c.jpeg",
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

            {/* Compact Description */}
            <motion.div {...fadeInUp} className="text-center">
              <p className="text-base text-zinc-700 leading-relaxed max-w-3xl mx-auto">
                What began as a small, informal gathering has grown into a
                life-changing annual encounter with God. Each year, attendance
                has more than doubled, and momentum continues to build.
                <span className="font-semibold text-[#00AEA9]">
                  {" "}
                  If you're hungry for more of God, longing for authentic
                  community, and ready to step into your next level—this is your
                  invitation.
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & Registration Section - Funnel Step 8 */}
      <section
        id="pricing"
        className="py-32 relative overflow-hidden snap-start"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AEA9] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00AEA9] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16 text-white">
            <motion.div {...fadeIn}>
              <Badge className="bg-[#00AEA9] text-white border-none px-6 py-2 mb-6 rounded-full">
                Investment in Your Future
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
              Limited spaces available. Don't miss this opportunity for
              transformation.
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
                        🔥 Limited Spots Available
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
                      className="flex items-center justify-center gap-3 mb-3"
                    >
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
                        497
                      </motion.span>
                    </motion.div>

                    <p className="text-xl text-zinc-600 mb-6 font-semibold">
                      Full 4-Day Experience
                    </p>

                    <motion.div
                      className="inline-block bg-gradient-to-r from-[#00AEA9]/10 to-[#00C4B8]/10 px-6 py-3 rounded-2xl border border-[#00AEA9]/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="text-[#00AEA9] text-lg font-semibold">
                        Early Bird:{" "}
                        <span className="text-2xl font-bold">$397</span> (Ends
                        March 1st, 2026)
                      </span>
                    </motion.div>
                  </div>

                  <div className="space-y-5 mb-10">
                    {[
                      "All teaching sessions & ministry times",
                      "Personal activation & prayer ministry",
                      "Conference materials & resources",
                      "Access to recorded sessions post-event",
                      "Certificate of completion",
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
                      className="relative w-full bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] hover:from-[#00C4B8] hover:to-[#00AEA9] h-16 text-xl rounded-full mb-4 shadow-xl shadow-[#00AEA9]/25 font-semibold text-white border-0 overflow-hidden group transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Register Now - $397
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
                    *Meals and lodging not included. Payment plans available.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-zinc-50 snap-start">
        <div className="container mx-auto px-6">
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
                  question: "What is an Advance?",
                  answer:
                    "An Advance is an intensive, multi-day event designed for deep spiritual growth, ministry, and activation. Unlike a typical conference, you'll receive personal ministry time, breakthrough sessions, and practical equipping for your spiritual journey. It's a focused time to press into God and experience lasting transformation.",
                },
                {
                  question: "Who should attend?",
                  answer:
                    "This advance is for anyone hungry for breakthrough, healing, and deeper intimacy with God. Whether you're new to deliverance ministry or experienced in spiritual warfare, you'll receive powerful teaching and ministry tailored to your journey. We welcome believers from all backgrounds who are ready for transformation.",
                },
                {
                  question: "Are meals or lodging included?",
                  answer:
                    "The registration fee covers all teaching sessions, ministry times, and conference materials. Meals and lodging are not included, allowing you flexibility to choose accommodations that fit your budget. We'll provide a list of recommended hotels near the venue with special group rates.",
                },
                {
                  question: "What should I bring?",
                  answer:
                    "Bring your Bible, a notebook for taking notes, and an open heart ready to receive. Dress comfortably as we'll have extended sessions. We also recommend bringing water and any personal items you need for comfort during ministry times. A detailed preparation guide will be sent after registration.",
                },
                {
                  question: "What if I can't attend all four days?",
                  answer:
                    "We strongly encourage attending all four days as each session builds upon the previous one for maximum breakthrough. However, we understand life happens. Recorded sessions will be available to registrants, so you won't miss any teaching if you need to step away. Contact us if you have specific schedule concerns.",
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
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
              Don't let this opportunity pass you by. Join us for four days that
              could change the trajectory of your spiritual life forever.
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
                className="relative bg-gradient-to-r from-[#00AEA9] to-[#00C4B8] hover:from-[#00C4B8] hover:to-[#00AEA9] px-12 py-8 text-2xl h-auto shadow-2xl shadow-[#00AEA9]/30 rounded-full font-semibold text-white border-0 overflow-hidden group transition-all duration-300"
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
      <footer className="bg-zinc-900 text-white py-16 snap-none">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & About */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4">Bride Tribe</h3>
              <p className="text-zinc-400 mb-6 max-w-md text-lg">
                Equipping the Bride of Christ for breakthrough, healing, and
                spiritual warfare through biblical teaching and powerful
                ministry.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-zinc-800 hover:bg-[#00AEA9] rounded-2xl flex items-center justify-center transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-zinc-800 hover:bg-[#00AEA9] rounded-2xl flex items-center justify-center transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-zinc-800 hover:bg-[#00AEA9] rounded-2xl flex items-center justify-center transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-[#00AEA9] transition-colors text-lg"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-[#00AEA9] transition-colors text-lg"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-[#00AEA9] transition-colors text-lg"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-[#00AEA9] transition-colors text-lg"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-zinc-400 text-lg">
                  <Mail className="h-5 w-5 text-[#00AEA9]" />
                  <span>info@brideministries.com</span>
                </li>
                <li className="text-zinc-400 text-lg">Houston, Texas</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400">
              © 2026 Bride Tribe. All rights reserved.
            </p>
            <div className="flex gap-6 items-center">
              <a
                href="#"
                className="text-zinc-400 hover:text-[#00AEA9] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-[#00AEA9] transition-colors"
              >
                Terms of Service
              </a>
            </div>
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
