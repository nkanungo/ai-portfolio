import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Metrics from './components/Metrics';
import CustomerStories from './components/CustomerStories';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { theme, toggleTheme } = useTheme();

  /*
   * Streamlined executive portfolio structure:
   *
   * Home
   * Leadership Impact
   * Leadership & Architecture
   * Transformation Stories
   * Selected Projects
   * Technology Leadership
   * Experience
   * Contact
   *
   * AI Research, Innovation & CoE will be incorporated
   * into the Leadership & Architecture section rather than
   * appearing as a separate full-page section.
   */
  const sectionIds = [
    'home',
    'metrics',
    'about',
    'stories',
    'projects',
    'tech',
    'timeline',
    'contact'
  ];

  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen">

      {/* Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      <main>

        {/* =====================================================
            1. EXECUTIVE HERO
            Who I am + leadership positioning + executive profile
        ====================================================== */}
        <Hero />

        {/* =====================================================
            2. LEADERSHIP IMPACT
            Key measurable outcomes and transformation scale
        ====================================================== */}
        <Metrics />

        {/* =====================================================
            3. LEADERSHIP & ARCHITECTURE
            AI transformation, platforms, product architecture,
            AI research, innovation and CoE leadership
        ====================================================== */}
        <About />

        {/* =====================================================
            4. TRANSFORMATION STORIES
            Selected business transformation examples
        ====================================================== */}
        <CustomerStories />

        {/* =====================================================
            5. SELECTED PROJECTS
            Flagship AI/platform/architecture initiatives
        ====================================================== */}
        <Projects />

        {/* =====================================================
            6. TECHNOLOGY LEADERSHIP & ARCHITECTURE
            Strategic → Architecture → Hands-on expertise
        ====================================================== */}
        <TechStack />

        {/* =====================================================
            7. EXPERIENCE
            Executive career timeline
        ====================================================== */}
        <Timeline />

        {/* =====================================================
            8. CONTACT
            Leadership / advisory / research conversations
        ====================================================== */}
        <Contact />

      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;