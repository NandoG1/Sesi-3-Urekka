"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Background from "@/components/ui/background";
import {motion} from 'framer-motion';
import Typewriter from 'typewriter-effect';
import FloatingCode from "@/components/ui/floating-code";
import AnimatedCursor from "@/components/ui/animated-cursor";

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Experience",
      link: "/experience",
    },
    {
      name: "Resume",
      link: "/resume",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen">

      {/* <AuroraBackground /> */}

      <AnimatedCursor/>

      <Background/>

      <FloatingCode/>

      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* <DummyContent /> */}

      {/* Navbar */}
      
      <div className="flex items-center justify-center h-[calc(100vh-5rem)]">
        <div className="container max-w-3xl px-4 text-center">
          <motion.div 
            initial={{opacity: 0 }} 
            animate={{opacity: 1}} 
            transition={{duration: .6}}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="blue-rainbow-text">Hello, I am</span>
              <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center">
                <Typewriter options={{
                  strings: ["Fernando Gunawan", "a Web Developer", "a Problem Solver"],
                  autoStart: true,
                  loop: true
                }} />
              </div>
            </h1>

            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-neutral-700">
              I create modern websites and applications with a focus on user experience and performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{opacity: 1}} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-black text-white rounded-lg font-medium shadow-lg"
              href="/experience"
            >
              Explore My Work
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-neutral-300rounded-lg font-medium hover:bg-neutral-100 transition-colors"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      
      
    </div>
  );
}