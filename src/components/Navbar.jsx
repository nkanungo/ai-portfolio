import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, toggleTheme, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'metrics', label: 'Impact' },
    { id: 'about', label: 'Leadership' },
    { id: 'stories', label: 'Transformation' },
    { id: 'projects', label: 'Projects' },
    { id: 'tech', label: 'Technology' },
    { id: 'timeline', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 80;

      const elementPosition =
        element.getBoundingClientRect().top;

      const offsetPosition =
        elementPosition +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-effect shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold gradient-text"
              aria-label="Go to home"
            >
              NRK
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-accent-cyan font-semibold bg-accent-cyan/5'
                      : 'text-gray-700 dark:text-gray-300 hover:text-accent-cyan'
                  }`}
                >
                  {item.label}
                </button>
              ))}

            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">

              <ThemeToggle
                theme={theme}
                toggleTheme={toggleTheme}
              />

              {/* Mobile menu */}
              <button
                className="lg:hidden p-2 rounded-lg glass-effect"
                onClick={() =>
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }
                aria-label={
                  isMobileMenuOpen
                    ? 'Close navigation menu'
                    : 'Open navigation menu'
                }
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>

            </div>

          </div>

        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: '100%'
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: '100%'
            }}
            transition={{
              type: 'tween',
              duration: 0.25
            }}
            className="fixed inset-y-0 right-0 z-40 w-full sm:w-80 glass-effect shadow-2xl lg:hidden"
          >

            <div className="flex flex-col h-full pt-24 pb-8 px-5 overflow-y-auto">

              <div className="mb-5 px-3">

                <p className="text-[10px] uppercase tracking-[0.2em] text-accent-cyan">
                  Navigation
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Nihar Ranjan Kanungo
                </p>

              </div>

              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{
                    opacity: 0,
                    x: 30
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: index * 0.035
                  }}
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                  className={`text-left py-3.5 px-4 rounded-lg mb-1.5 transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-accent-cyan/15 text-accent-cyan font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setIsMobileMenuOpen(false)
            }
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;