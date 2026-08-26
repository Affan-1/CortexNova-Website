import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "We start by understanding your business, goals, users, and the problem we need to solve.",
  },
  {
    number: "02",
    title: "DEFINE",
    description:
      "We turn ideas into a clear strategy, technical direction, and roadmap built around your priorities.",
  },
  {
    number: "03",
    title: "BUILD",
    description:
      "Our team designs and develops the product using modern technologies, keeping performance and scalability in focus.",
  },
  {
    number: "04",
    title: "LAUNCH",
    description:
      "We test, refine, deploy, and help your product move from development into the real world.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Ambient blue glow */}
      <motion.div
        animate={{
          opacity: [0.03, 0.07, 0.03],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-60 top-1/3 h-[550px] w-[550px] rounded-full bg-[#008cff] blur-[170px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        {/* Heading */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#008cff]" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                CortexNova / Process
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              From idea
              <br />
              <span className="bg-gradient-to-r from-white via-[#d8dee7] to-[#168fff] bg-clip-text text-transparent">
                to impact.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
              A clear process keeps ambitious projects focused, efficient,
              and moving in the right direction.
            </p>
          </motion.div>
        </div>

        {/* Process timeline */}
        <div className="relative mt-20">
          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-[55px] hidden h-px bg-white/10 lg:block" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-[55px] hidden h-px origin-left bg-gradient-to-r from-[#008cff] via-[#168fff] to-transparent lg:block"
          />

          <div className="grid border-l border-t border-white/10 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative min-h-[430px] border-b border-r border-white/10 p-7 transition-colors duration-500 hover:bg-white/[0.025] sm:p-10 lg:min-h-[480px]"
              >
                {/* Step number */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#050505] transition-all duration-500 group-hover:border-[#168fff] group-hover:bg-[#168fff] group-hover:text-black">
                    <span className="text-[9px] tracking-[0.15em]">
                      {step.number}
                    </span>
                  </div>

                  <ArrowDownRight
                    size={20}
                    strokeWidth={1.2}
                    className="text-zinc-700 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#168fff]"
                  />
                </div>

                {/* Content */}
                <div className="mt-20">
                  <p className="mb-4 text-[9px] uppercase tracking-[0.25em] text-[#168fff]">
                    Step {step.number}
                  </p>

                  <h3 className="text-3xl font-medium uppercase tracking-[-0.04em] sm:text-4xl">
                    {step.title}
                  </h3>

                  <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
                    {step.description}
                  </p>
                </div>

                {/* Bottom progress */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#168fff] transition-all duration-700 group-hover:w-full" />

                {/* Large background number */}
                <span className="pointer-events-none absolute bottom-5 right-6 text-[100px] font-semibold leading-none text-white/[0.025] transition-colors duration-500 group-hover:text-[#168fff]/[0.05]">
                  {step.number}
                </span>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Process;