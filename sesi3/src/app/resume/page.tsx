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
export default function Resume(){

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

    return(
        <div>
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
            
            <div className="mx-auto container pt-35 flex justify-center items-center flex-col ">
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">My Resume</h1>
                    <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl text-center">Explore my Resume!</p> 
                </div>
                <iframe src="/CV_ATS.pdf" className="w-full h-[80vh]"></iframe>
            </div>

              <div className="mx-auto container py-35 flex justify-center items-center flex-col ">
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">My Mini Portofolio</h1>
                    <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl text-center">Explore my Mini Portofolio!</p> 
                </div>
                <iframe src="/Portofolio_BNCC.pdf" className="w-full h-[80vh]"></iframe>
            </div>


            
        </div>
    )
}