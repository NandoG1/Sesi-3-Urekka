"use client";
import { useState, useEffect } from "react";
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
import Background from "@/components/ui/background";
import { Button } from "@/components/ui/button";

export default function Experience() {
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

  const projects = [
    {
      slug: "https://github.com/NandoG1/food-share-hub-Project",
      author: "Fernando Gunawan",
      date: "March 15, 2025",
      title: "Food Share Hub",
      description: "A full-stack e-commerce platform with user login/signup, food registration, admin functionality, and history integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
      authorAvatar: "/",
      languages: ['Laravel', 'Blade.PHP', 'PHP', 'MySQL'],
      hasAI: false,
      category: "Web Development"
    },
    {
      slug: "https://github.com/NandoG1/mini-mind-map-web",
      author: "Fernando Gunawan",
      date: "April 01, 2025",
      title: "Mini Mind Map Web",
      description: "A task management application with drag-and-drop functionality for manage user task.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop",
      authorAvatar: "/",
      languages: ['HTML', 'JavaScript', 'CSS'],
      hasAI: false,
      category: "Web Development"
    },
    {
      slug: "https://github.com/NandoG1/diamonds-cut-motors",
      author: "Fernando Gunawan",
      date: "May 10, 2024",
      title: "Car Website",
      description: "A modern car website with dark mode, animations, and responsive design.",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000&auto=format&fit=crop",
      authorAvatar: "/",
      languages: ["HTML", "CSS", "JavaScript"],
      hasAI: false,
      category: "Web Development"
    },
    {
      slug: "https://github.com/NandoG1/money-manager",
      author: "Fernando Gunawan",
      date: "May 2, 2025",
      title: "Money Manager",
      description: "A website that can help user to manage their money with AI recommendation and database integration.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop",
      authorAvatar: "/",
      languages: ["Next.js", "TypeScript", "Flask", "MongoDB"],
      hasAI: true,
      category: "AI & Machine Learning"
    },
    {
      slug: "https://github.com/NandoG1/Front-End-Index-Air-Quality-In-Jakarta",
      author: "Fernando Gunawan",
      date: "April 18, 2025",
      title: "Weather App",
      description: "A weather application that displays Jakarta weather based on parameter and date with AI-powered predictions.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop",
      authorAvatar: "-",
      languages: ["React", "TypeScript", "Tailwind CSS"],
      hasAI: true,
      category: "AI & Machine Learning"
    },
    {
      slug: "https://github.com/NandoG1/IdentifyAI",
      author: "Fernando Gunawan",
      date: "December 3, 2024",
      title: "IdentifyAI",
      description: "A AI website that can help user to identify and explain a animal based on photo that user input.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      authorAvatar: "/",
      languages: ["Flask", "Python", "HTML", "CSS", "JavaScript"],
      hasAI: true,
      category: "AI & Machine Learning"
    }
  ];

  const allLanguages = [...new Set(projects.flatMap(project => project.languages))].sort();
  const categories = [...new Set(projects.map(project => project.category))].sort();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by languages
    if (selectedLanguages.length > 0) {
      filtered = filtered.filter(project => 
        project.languages.some(lang => selectedLanguages.includes(lang))
      );
    }

    setFilteredProjects(filtered);
  }, [selectedLanguages, selectedCategory]);

  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prevSelected => 
      prevSelected.includes(language)
        ? prevSelected.filter(lang => lang !== language)
        : [...prevSelected, language]
    );
  };

  const clearAllFilters = () => {
    setSelectedLanguages([]);
    setSelectedCategory("");
  };

  return (
    <div className="relative w-full min-h-screen">
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
      
      <div className="container mx-auto py-16">
            <div className="text-center mb-16 mt-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">My Experience</h1>
                <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Explore my portfolio of work across various technologies that I already made.
                </p>
            </div>

            <div className="mb-12 space-y-6">
                {/* Category Filter */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedCategory("")}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                selectedCategory === ""
                                    ? "bg-gray-800 text-white"
                                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                        >
                            All Projects
                        </button>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                                    selectedCategory === category
                                        ? category === "AI & Machine Learning" 
                                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                                            : "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                }`}
                            >
                                {category === "AI & Machine Learning" && (
                                    <span className="text-xs"></span>
                                )}
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Technology Filter */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Filter by Technology</h2>
                    <div className="flex flex-wrap gap-2">
                        {allLanguages.map((language, index) => (
                        <button
                            key={index}
                            onClick={() => toggleLanguage(language)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedLanguages.includes(language)
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                        >
                            {language}
                        </button>
                        ))}
                    </div>
                </div>

                {/* Clear Filters */}
                {(selectedLanguages.length > 0 || selectedCategory) && (
                    <button
                        onClick={clearAllFilters}
                        className="px-6 py-2 rounded-full text-sm font-medium bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                    >
                        Clear All Filters
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="flex">
                        <div className={`group relative h-full overflow-hidden rounded-2xl border transition duration-200 hover:shadow-xl w-full ${
                            project.hasAI 
                                ? 'border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50' 
                                : 'border-zinc-100 bg-white'
                        }`}>
                            {/* AI Badge */}
                            {project.hasAI && (
                                <div className="absolute top-4 right-4 z-10">
                                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                        <span>🤖</span>
                                        AI-Powered
                                    </div>
                                </div>
                            )}
                            
                            <div className="relative aspect-video w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
                                <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <h2 className={`text-xl font-bold ${
                                        project.hasAI ? 'text-purple-800' : 'text-zinc-800'
                                    }`}>
                                        {project.title}
                                    </h2>
                                </div>
                                <p className="mb-4 text-sm text-zinc-600">
                                {project.description}
                                </p>
                            
                                <div className="mb-6 flex flex-wrap gap-2">
                                {project.languages.map((lang, idx) => (
                                    <span 
                                    key={idx} 
                                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                                        project.hasAI
                                            ? 'bg-purple-100 text-purple-800'
                                            : 'bg-gray-100 text-gray-800'
                                    }`}
                                    >
                                    {lang}
                                    </span>
                                ))}
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">{project.date}</span>
                                    <Button 
                                        onClick={() => window.open(project.slug, "_blank")}
                                        className={project.hasAI ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : ''}
                                    >
                                        View Project
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}