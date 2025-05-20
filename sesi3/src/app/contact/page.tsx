"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Background from "@/components/ui/background";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      details: "fernando.gunawan003@binus.ac.id",
      link: "mailto:fernando.gunawan003@binus.ac.id"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      details: "+62 811 1105 723",
      link: "tel:+628111105723"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      details: "Jakarta, Indonesia",
      link: "https://maps.google.com/?q=Jakarta,Indonesia"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: "GitHub",
      link: "https://github.com/NandoG1"
    },
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/fernando-gunawan-bo/"
    },
    {
      icon: <Twitter size={20} />,
      name: "Twitter",
      link: "https://x.com/xi_gunawan41973"
    }
  ];

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

      <div className="container max-w-6xl px-4 mx-auto pt-16 md:pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-10">Get In Touch</h1>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-neutral-700">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 space-y-4"
          >
            {contactInfo.map((item, index) => (
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="flex items-center p-6 rounded-lg border border-neutral-200 hover:shadow-md transition-all"
              >
                <div className="bg-neutral-100 p-3 rounded-full mr-4">
                  <div className="text-blue-600">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="text-neutral-600">{item.details}</p>
                </div>
              </a>
            ))}

            <div className="pt-6">
              <h3 className="font-medium text-lg mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    whileHover={{ y: -3 }}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Send me a message</h2>
            
            {submitSuccess && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 text-green-800 dark:text-green-300 rounded-lg p-4 mb-6">
                Thank you for your message! I'll get back to you as soon as possible.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-neutral-800 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-neutral-800 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-neutral-800 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-neutral-800 transition-colors resize-none"
                  placeholder="Hello, I'd like to discuss a potential project..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-black text-white rounded-lg font-medium shadow-lg transition-all flex justify-center items-center ${isSubmitting ? 'opacity-75' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}