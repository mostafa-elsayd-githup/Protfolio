import { useState } from "react";
import { motion } from "framer-motion";
import type { RouteProp } from "../../Types/Navbar";
import Logo from "../Logo/Logo";
import { Menu, X } from "lucide-react";

const routes: RouteProp[] = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState("home");
  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header className="fixed top-2 left-0 w-full z-50">
      <section className="text-white bg-(--bg-glassy) backdrop-blur-md container mx-auto py-4 px-4 rounded-2xl">
        <nav className="relative flex items-center justify-between md:justify-around  gap-10 ">
          <Logo />
          <ul className="hidden md:flex items-center gap-8 relative">
            {routes.map((item) => {
              const isActive = activeSection === item.path;
              return (
                <li key={item.name} className="relative">
                  <button
                    onClick={() => handleScrollToSection(item.path)}
                    className={`text-sm font-medium transition-colors duration-200 px-2 py-1 cursor-pointer bg-transparent border-none ${
                      isActive
                        ? "text-(--color-primary) font-bold"
                        : "text-(--color-text) hover:text-(--color-text)/60"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-(--color-primary) via-blue-500 to-(--color-accent) rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            className="flex md:hidden cursor-pointer hover:text-(--color-accent)"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
          <ul
            className={`flex md:hidden p-4 absolute top-16 left-0 flex-col gap-2 w-full transition-all duration-300 origin-top bg-(--bg-glassy) backdrop-blur-xl rounded-2xl shadow-xl ${
              isOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"
            }`}
          >
            {routes.map((item) => {
              const isActive = activeSection === item.path;
              return (
                <li key={item.name} className="relative w-full">
                  <button
                    onClick={() => {
                      handleScrollToSection(item.path);
                      setIsOpen(!isOpen);
                    }}
                    className={`w-full text-start text-sm font-medium px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-between group border ${
                      isActive
                        ? "bg-(--color-primary)/15 text-(--color-accent) border-(--color-primary)/40 shadow-lg shadow-(--color-primary)/10 font-semibold"
                        : "bg-transparent text-(--color-text) border-transparent hover:bg-(--bg-card) hover:text-(--color-accent) hover:border-(--color-border)"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-(--color-accent) shadow-sm" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </header>
  );
}
