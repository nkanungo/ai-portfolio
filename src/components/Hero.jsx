import { motion } from 'framer-motion';
import { ArrowDown, Mail, Briefcase, Users, Brain } from 'lucide-react';

const Hero = () => {
  const specialties = [
    'Generative AI',
    'Agentic AI',
    'Enterprise AI',
    'AI Platforms',
    'Product Architecture',
    'Cloud & Data'
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-dark-900 dark:via-indigo-950 dark:to-dark-900" />

        {/* Animated gradient orb - left */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/25 rounded-full blur-3xl"
        />

        {/* Animated gradient orb - right */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/25 rounded-full blur-3xl"
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-custom w-full section-padding pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center max-w-7xl mx-auto">

          {/* =========================================================
              LEFT COLUMN — PROFILE & POSITIONING
          ========================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-5 inline-block"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple p-1 shadow-lg shadow-accent-cyan/20">
                <img
                  src="./profile.jpg"
                  alt="Nihar Ranjan Kanungo"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-3 text-shadow leading-tight"
            >
              Nihar Ranjan Kanungo
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-semibold gradient-text mb-5 leading-snug"
            >
              Principal Platform & Product Architect
              <span className="block">
                AI Transformation Leader
              </span>
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Architecting Enterprise AI. Building Intelligent Platforms.
              Transforming Businesses with Generative AI, Agentic AI,
              Data and Cloud.
            </motion.p>

            {/* Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-7"
            >
              {specialties.map((specialty, index) => (
                <motion.span
                  key={specialty}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.65 + index * 0.08
                  }}
                  className="px-3 py-1.5 rounded-full glass-effect text-xs md:text-sm text-gray-200 border border-accent-cyan/30"
                >
                  {specialty}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                Explore My Work
              </button>

              <button
                onClick={() => scrollToSection('stories')}
                className="btn-secondary flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Transformation Stories
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Let's Connect
              </button>
            </motion.div>
          </motion.div>

          {/* =========================================================
              RIGHT COLUMN — EXECUTIVE ABOUT
          ========================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="glass-effect rounded-2xl border border-accent-cyan/20 p-7 md:p-8 lg:p-9 shadow-xl shadow-black/10">

              {/* About Heading */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-white" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-cyan mb-1">
                    Executive Profile
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    About Me
                  </h3>
                </div>
              </div>

              {/* About Text */}
              <div className="space-y-4">
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  I am an{' '}
                  <strong className="text-accent-cyan">
                    AI Transformation Leader
                  </strong>{' '}
                  and{' '}
                  <strong className="text-accent-purple">
                    Principal Platform & Product Architect
                  </strong>{' '}
                  with 22+ years of experience turning emerging technologies
                  into scalable enterprise capabilities and measurable
                  business outcomes.
                </p>

                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  My journey spans{' '}
                  <strong className="text-white">
                    Financial Services, Banking, Insurance, Supply Chain,
                    and Enterprise Technology
                  </strong>
                  , where I have shaped AI, Data, Cloud, Product, and
                  Platform strategies and partnered with senior technology
                  and business leaders on large-scale transformation
                  initiatives.
                </p>

                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  From architecting{' '}
                  <strong className="text-white">
                    enterprise Agentic AI platforms and multi-agent systems
                  </strong>{' '}
                  to establishing reusable AI capabilities, AI-assisted
                  software factories, and enterprise reference architectures,
                  I focus on translating innovation into{' '}
                  <strong className="text-accent-cyan">
                    secure, governed, production-scale business impact
                  </strong>
                  .
                </p>
              </div>

              {/* Leadership Highlights */}
              <div className="mt-7 pt-6 border-t border-gray-700/40">
                <div className="grid grid-cols-3 gap-4 text-center">

                  <div>
                    <div className="text-xl md:text-2xl font-bold gradient-text">
                      22+
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Years Experience
                    </div>
                  </div>

                  <div>
                    <div className="text-xl md:text-2xl font-bold gradient-text">
                      30+
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      AI Products
                    </div>
                  </div>

                  <div>
                    <div className="text-xl md:text-2xl font-bold gradient-text">
                      100+
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Leaders & Engineers
                    </div>
                  </div>

                </div>
              </div>

              {/* View More */}
              <motion.button
                whileHover={{ x: 4 }}
                onClick={() => scrollToSection('about')}
                className="mt-6 text-sm font-medium text-accent-cyan hover:text-white transition-colors flex items-center gap-2"
              >
                Explore my leadership & architecture focus
                <ArrowDown className="w-4 h-4 -rotate-90" />
              </motion.button>

            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="w-5 h-5 text-accent-cyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;