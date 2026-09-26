import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Metrics from './components/Metrics';
import CustomerStories from './components/CustomerStories';
import Projects from './components/Projects';
import TechStack from './components/TechStack.jsx';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { theme, toggleTheme } = useTheme();

  /*
   * Executive portfolio structure:
   *
   * 1. Home
   * 2. Leadership Impact
   * 3. Career Journey
   * 4. Leadership & Transformation Mandate
   * 5. AI & Technology Transformation Stories
   * 6. Selected Projects
   * 7. Technical Skills
   * 8. Contact
   */

  const sectionIds = [
    'home',
    'metrics',
    'experience',
    'leadership',
    'transformation',
    'projects',
    'technology',
    'contact'
  ];

  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen">

      {/* =====================================================
          NAVIGATION
      ====================================================== */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      <main>

        {/* =====================================================
            1. EXECUTIVE HERO
            Who I am + leadership positioning
        ====================================================== */}
        <Hero />

        {/* =====================================================
            2. LEADERSHIP IMPACT
            Key measurable outcomes and transformation scale
        ====================================================== */}
        <Metrics />

        {/* =====================================================
            3. CAREER JOURNEY
            22+ year progression from engineering to
            enterprise AI, architecture and transformation
            leadership
        ====================================================== */}
        <Timeline />

        {/* =====================================================
            4. LEADERSHIP & TRANSFORMATION MANDATE
            Leadership capabilities, enterprise architecture,
            AI architecture, AI CoE, strategy, governance,
            transformation, talent and innovation
        ====================================================== */}
        <About />

        {/* =====================================================
            5. AI & TECHNOLOGY TRANSFORMATION STORIES
            Selected business and technology transformation
            examples demonstrating application of leadership
            and architecture capabilities
        ====================================================== */}
        <CustomerStories />

        {/* =====================================================
            6. SELECTED PROJECTS
            Flagship AI, platform and architecture initiatives
        ====================================================== */}
        <Projects />

        {/* =====================================================
            7. TECHNICAL SKILLS
            Strategic → Architecture → Hands-on expertise
        ====================================================== */}
        <TechStack />

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