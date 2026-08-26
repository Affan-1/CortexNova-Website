import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const insights = [
  {
    number: "01",
    category: "AI Automation",
    date: "Aug 2026",
    readTime: "5 min read",
    title: "Why every business needs an automation strategy",
    description:
      "How connecting your tools and workflows with AI automation removes manual work and helps teams focus on what matters.",
  },
  {
    number: "02",
    category: "Software Development",
    date: "Jul 2026",
    readTime: "6 min read",
    title: "Building software that scales with your business",
    description:
      "The architecture decisions that separate software built for today from software built to grow with you.",
  },
  {
    number: "03",
    category: "AI SaaS",
    date: "Jul 2026",
    readTime: "4 min read",
    title: "What makes an AI product actually useful",
    description:
      "Beyond the hype, a look at how well-designed AI SaaS products solve real problems for real users.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Insights = () => {
  return (
    <section
      id="insights"
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

      {/* Ambient glow */}
      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-[#008cff] blur-[180px]"
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
                CortexNova / Insights
              </span>
            </div>

            <h2 className="text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Ideas worth
              <br />
              <span className="bg-gradient-to-r from-white via-[#d8dee7] to-[#168fff] bg-clip-text text-transparent">
                sharing.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-500 sm:text-base">
            Thoughts on technology, AI, and building digital products that
            actually move businesses forward.
          </p>
        </motion.div>

        {/* Insights grid */}
        <div className="grid border-l border-t border-white/10 md:grid-cols-3">
          {insights.map((item, index) => (
            <motion.article
              key={item.number}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative flex min-h-[420px] flex-col border-b border-r border-white/10 p-7 transition-colors duration-500 hover:bg-white/[0.025] sm:p-9"
            >
              {/* Animated top line */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[#008cff] transition-all duration-700 group-hover:w-full" />

              {/* Meta row */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.2em] text-[#168fff]">
                  {item.number}
                </span>

                <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  {item.category}
                </span>
              </div>

              {/* Title + description */}
              <div className="mt-14 flex-1">
                <motion.h3
                  className="text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl"
                  whileHover={{ x: 5 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  {item.title}
                </motion.h3>

                <p className="mt-5 text-sm leading-7 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
                  {item.description}
                </p>
              </div>

              {/* Footer: date + read link */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  {item.date} · {item.readTime}
                </span>

                <a
                  href="#contact"
                  aria-label={`Read more about ${item.title}`}
                  className="group/link flex h-9 w-9 items-center justify-center border border-white/10 text-zinc-400 transition-all duration-300 hover:border-[#008cff] hover:text-[#168fff]"
                >
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </a>
              </div>

              {/* Bottom accent */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-0 bg-[#008cff] transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
