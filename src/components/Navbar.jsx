import React, { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Impact", href: "#metrics" },
  { name: "Career Journey", href: "#experience" },
  { name: "Leadership", href: "#leadership" },
  { name: "Transformation", href: "#transformation" },
  { name: "Projects", href: "#projects" },
  { name: "Technical Skills", href: "#technology" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navigation
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 140) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (href) => {
    setIsOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#070b18]/95 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* =====================================================
            LOGO
        ====================================================== */}
        <button
          onClick={() => handleNavigation("#home")}
          className="group flex items-center gap-3"
          aria-label="Go to home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.12)] transition-all duration-300 group-hover:border-cyan-300/70 group-hover:bg-cyan-400/20">
            <span className="text-sm font-extrabold tracking-tight text-cyan-300">
              NRK
            </span>
          </div>

          <div className="hidden sm:block">
            <div className="text-sm font-bold tracking-wide text-white">
              Nihar Kanungo
            </div>

            <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
              AI Transformation Leader
            </div>
          </div>
        </button>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`relative whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-300 ${
                  isActive
                    ? "text-cyan-300"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}

                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 xl:hidden"
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#070b18]/98 backdrop-blur-xl transition-all duration-300 xl:hidden ${
          isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col gap-1">

            {navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>

                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  )}
                </button>
              );
            })}

          </div>
        </div>
      </div>
    </header>
  );
}