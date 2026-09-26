import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Download,
  Brain,
  Network,
  Layers3
} from 'lucide-react';

import SectionHeading from './SectionHeading';

const Contact = () => {
  const email = 'nihar.kanungo@gmail.com';

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/nihar-kanungo-5a923775/',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/nkanungo',
      color: 'hover:text-white'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${email}`,
      color: 'hover:text-red-400'
    }
  ];

  const conversationAreas = [
    {
      icon: Brain,
      title: 'Enterprise AI',
      description:
        'AI transformation, Generative AI, Agentic AI and enterprise AI platforms.'
    },
    {
      icon: Layers3,
      title: 'Architecture & Platforms',
      description:
        'Product architecture, enterprise platforms, modernization and technology strategy.'
    },
    {
      icon: Network,
      title: 'Research & Innovation',
      description:
        'AI research, emerging technologies, intelligent systems and AI CoE innovation.'
    }
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-dark-900 via-indigo-950 to-dark-900 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">

        <SectionHeading
          title="Let's Connect"
          subtitle="Open to conversations on AI transformation, enterprise architecture, platforms and emerging technology innovation."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >

          {/* Executive message */}
          <div className="text-center mb-9">

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Turning Emerging Technology into
              <span className="gradient-text"> Enterprise Value</span>
            </h3>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I welcome conversations with technology leaders, architects,
              researchers and innovators exploring how AI and emerging
              technologies can become scalable enterprise capabilities and
              measurable business outcomes.
            </p>

          </div>

          {/* Conversation areas */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">

            {conversationAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07
                  }}
                  className="rounded-xl border border-gray-700/40 bg-white/5 p-5 hover:border-accent-cyan/40 transition-all duration-300"
                >

                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <h4 className="text-base font-semibold text-white mb-2">
                    {area.title}
                  </h4>

                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    {area.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

          {/* Contact panel */}
          <div className="rounded-2xl border border-accent-cyan/25 bg-white/5 p-6 md:p-7">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7">

              {/* Profile */}
              <div>

                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">
                  Professional Profile
                </p>

                <h4 className="text-2xl font-bold text-white mb-1">
                  Nihar Ranjan Kanungo
                </h4>

                <p className="text-sm md:text-base text-accent-cyan font-semibold">
                  Principal Platform & Product Architect
                  <span className="text-gray-500 mx-2">|</span>
                  AI Transformation Leader
                </p>

              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3">

                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target={
                        link.name === 'Email'
                          ? undefined
                          : '_blank'
                      }
                      rel={
                        link.name === 'Email'
                          ? undefined
                          : 'noopener noreferrer'
                      }
                      whileHover={{
                        y: -2
                      }}
                      whileTap={{
                        scale: 0.96
                      }}
                      className={`w-10 h-10 rounded-lg border border-gray-700/50 flex items-center justify-center text-gray-300 ${link.color} hover:border-accent-cyan/50 transition-all duration-300`}
                      aria-label={link.name}
                      title={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}

                <motion.a
                  href="/ai-portfolio/resume.pdf"
                  download="Nihar_Kanungo_Resume.pdf"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-accent-cyan to-accent-purple text-white hover:shadow-lg hover:shadow-accent-cyan/30 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.a>

              </div>

            </div>

            {/* Email */}
            <div className="mt-5 pt-4 border-t border-gray-700/40 text-center md:text-left">

              <a
                href={`mailto:${email}`}
                className="text-sm text-gray-400 hover:text-accent-cyan transition-colors"
              >
                {email}
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;