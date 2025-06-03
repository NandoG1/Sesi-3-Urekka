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
import { motion } from 'framer-motion';
import { Code, Palette, Layout, Globe, Zap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

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

  const skills = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks."
    },
    {
      icon: <Layout size={24} />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing designs focused on user experience and accessibility."
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description: "Improving website speed and efficiency through code optimization and modern best practices."
    },
    {
      icon: <Globe size={24} />,
      title: "Web Applications",
      description: "Developing full-stack web applications with secure authentication and database integration."
    },
    {
      icon: <Palette size={24} />,
      title: "Creative Solutions",
      description: "Solving complex problems with creative approaches and innovative thinking."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Continuous Learning",
      description: "Constantly expanding knowledge and staying updated with the latest web technologies."
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative w-full min-h-screen pb-16">
      <Background />

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

      <div className="container max-w-5xl px-4 mx-auto pt-16 md:pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 mt-10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Me</h1>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-neutral-700">
            Get to know more about me, my background, and what drives my passion for web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Who am I?</h2>
            <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
              <p>
                Hi there! I <span className="font-semibold">Fernando Gunawan</span>, a passionate web developer with a keen eye for creating beautiful, functional websites and applications.
              </p>
              <p>
                With several years of experience in the field, I have developed a deep understanding of both frontend and backend technologies. My approach combines technical expertise with creativity to deliver solutions that not only work flawlessly but also provide an exceptional user experience.
              </p>
              <p>
                I believe that the best digital products come from understanding user needs and business goals. Thats why I focus on creating websites that are not just visually appealing but also intuitive, accessible, and optimized for performance.
              </p>
              <p>
                When I am not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through writing and mentoring.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Personal Details</h2>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex">
                <span className="font-semibold w-32">Name:</span>
                <span className="text-neutral-700">Fernando Gunawan</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-32">Experience:</span>
                <span className="text-neutral-700">1+ Years</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-32">Location:</span>
                <span className="text-neutral-700">Jakarta, Indonesia</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-32">Email:</span>
                <span className="text-neutral-700">fernando.gunawan003@binus.ac.id</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-32">Education:</span>
                <span className="text-neutral-700">Bachelor of Computer Science</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-32">Languages:</span>
                <span className="text-neutral-700">English, Indonesian</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-3 py-1 bg-neutral-100 rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-neutral-100 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-neutral-100 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-neutral-100 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-neutral-100 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-neutral-100 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-neutral-100 rounded-full text-sm">UI/UX</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-20"
        >
          <h2 className="text-2xl font-semibold mb-10 text-center">My Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-lg border border-neutral-20 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-600 dark:text-blue-400">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{skill.title}</h3>
                </div>
                <p className="text-neutral-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-neutral-5 p-10 rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Interested in working together?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-neutral-700">
            I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Button onClick={() => router.push('/contact')}>
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </div>
  );
}