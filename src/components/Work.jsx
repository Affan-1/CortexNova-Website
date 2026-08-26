import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "NEXORA",
    category: "AI AUTOMATION",
    description:
      "Intelligent workflow automation platform designed to connect business processes, AI agents, and third-party services into one scalable system.",
    features: [
      {
        title: "AI-driven",
        label: "WORKFLOW AUTOMATION",
      },
      {
        title: "Multi-system",
        label: "INTEGRATION",
      },
    ],
  },
  {
    number: "02",
    title: "VELORA",
    category: "WEB DEVELOPMENT",
    description:
      "Premium digital commerce platform built around a fast user experience, intelligent product discovery, and a conversion-focused interface.",
    features: [
      {
        title: "Dynamic",
        label: "PRODUCT EXPERIENCE",
      },
      {
        title: "Scalable",
        label: "E-COMMERCE SYSTEM",
      },
    ],
  },
  {
    number: "03",
    title: "SYNTRA",
    category: "AI SAAS",
    description:
      "AI-powered SaaS platform helping teams transform complex information into useful insights through intelligent processing and automation.",
    features: [
      {
        title: "Intelligent",
        label: "DATA ANALYSIS",
      },
      {
        title: "Real-time",
        label: "AI INSIGHTS",
      },
    ],
  },
  {
    number: "04",
    title: "ORVIX",
    category: "APP DEVELOPMENT",
    description:
      "Modern mobile application focused on seamless interactions, personalized experiences, and reliable performance across multiple devices.",
    features: [
      {
        title: "Cross-platform",
        label: "MOBILE EXPERIENCE",
      },
      {
        title: "Real-time",
        label: "USER EXPERIENCE",
      },
    ],
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Work = () => {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* Blue ambient glow */}
      <motion.div
        animate={{
          opacity: [0.04, 0.09, 0.04],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008cff] blur-[180px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#008cff]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-500">
                CortexNova / Selected Work
              </span>
            </div>

            <h2 className="text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Built for
              <br />
              <span className="bg-gradient-to-r from-white via-[#d8dee7] to-[#168fff] bg-clip-text text-transparent">
                what's next.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-500 sm:text-base">
            A selection of digital products, AI systems, and intelligent
            experiences built to solve real business challenges.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid border-l border-t border-white/10 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="group relative flex min-h-[560px] flex-col border-b border-r border-white/10 p-7 transition-colors duration-500 hover:bg-white/[0.025] sm:p-9"
            >
              {/* Animated blue top line */}
              <motion.div
                className="absolute left-0 top-0 h-px bg-[#008cff]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />

              {/* Number + category */}
              <div className="flex items-start justify-between">
                <span className="text-[10px] tracking-[0.2em] text-[#168fff]">
                  {project.number}
                </span>

                <span className="max-w-[120px] text-right text-[8px] leading-4 tracking-[0.18em] text-zinc-600">
                  {project.category}
                </span>
              </div>

              {/* Project title */}
              <div className="mt-16">
                <motion.h3
                  className="text-3xl font-semibold uppercase tracking-[-0.04em] sm:text-4xl"
                  whileHover={{ x: 6 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  {project.title}
                </motion.h3>

                <p className="mt-6 text-sm leading-7 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="mt-auto pt-12">
                <div className="space-y-6">
                  {project.features.map((feature) => (
                    <div key={feature.title}>
                      <h4 className="text-2xl font-semibold leading-none tracking-[-0.03em] text-[#168fff]">
                        {feature.title}
                      </h4>

                      <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                        {feature.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Case study link */}
                <a
                  href="#contact"
                  className="group/link mt-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#168fff] transition-colors duration-300 hover:text-white"
                >
                  Read the case study

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                  />
                </a>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-0 bg-[#008cff] transition-all duration-700 group-hover:w-full" />

              {/* Corner number */}
              <span className="pointer-events-none absolute bottom-6 right-6 text-[60px] font-semibold leading-none text-white/[0.025] transition-all duration-700 group-hover:text-[#168fff]/[0.06]">
                {project.number}
              </span>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Work;