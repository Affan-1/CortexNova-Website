import React from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "INNOVATION",
    text: "We explore better ways to solve problems, combining modern engineering with emerging technologies.",
  },
  {
    number: "02",
    title: "PRECISION",
    text: "Every detail matters. We focus on clean experiences, reliable systems, and technology that performs.",
  },
  {
    number: "03",
    title: "COLLABORATION",
    text: "Great products are built together. We work closely with clients to understand their goals and challenges.",
  },
  {
    number: "04",
    title: "FORWARD THINKING",
    text: "We build with tomorrow in mind, creating scalable solutions that can grow with your business.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-60 top-20 h-[600px] w-[600px] rounded-full bg-[#008cff]/[0.05] blur-[160px]" />

        <div className="absolute left-0 top-0 h-full w-px bg-white/[0.04] lg:left-[16%]" />
        <div className="absolute right-0 top-0 h-full w-px bg-white/[0.04] lg:right-[16%]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        {/* Top heading */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#008cff]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-400">
                CortexNova / About
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="max-w-6xl text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Technology
              <br />
              <span className="bg-gradient-to-r from-white via-[#d8dee7] to-[#168fff] bg-clip-text text-transparent">
                with purpose.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Main story */}
        <div className="mt-24 grid gap-16 border-t border-white/10 pt-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#168fff]">
              Who we are
            </p>

            <p className="mt-8 text-3xl font-light leading-[1.15] tracking-[-0.03em] text-zinc-200 sm:text-4xl">
              CortexNova is a technology studio focused on building digital
              products that help businesses{" "}
              <span className="text-zinc-600">
                move forward.
              </span>
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-7 text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8"
          >
            <p>
              We work at the intersection of software, design, artificial
              intelligence, and automation. Our goal is simple: take ambitious
              ideas and turn them into technology people can actually use.
            </p>

            <p>
              Whether it is a high-performance website, a mobile application,
              an AI-powered SaaS product, or an automated business workflow, we
              approach every project with the same focus on quality,
              scalability, and long-term value.
            </p>

            <p>
              We believe technology should not only look impressive. It should
              solve problems, create opportunities, and make businesses better.
            </p>
          </motion.div>
        </div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
          className="relative mt-28 overflow-hidden border border-white/10 bg-white/[0.02] px-7 py-14 sm:px-12 sm:py-20 lg:px-20"
        >
          <div className="absolute right-0 top-0 h-px w-1/3 bg-gradient-to-l from-[#168fff] to-transparent" />

          <div className="absolute bottom-0 left-0 h-px w-1/3 bg-gradient-to-r from-[#168fff] to-transparent" />

          <p className="relative z-10 max-w-5xl text-4xl font-medium uppercase leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
            We don't just build
            <br />
            <span className="text-zinc-600">digital products.</span>
            <br />
            We build what comes next.
          </p>
        </motion.div>

        {/* Values */}
        <div className="mt-28">
          <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#168fff]">
                Our principles
              </p>

              <h3 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                What drives us.
              </h3>
            </div>

            <span className="hidden text-[9px] uppercase tracking-[0.2em] text-zinc-600 sm:block">
              04 Core Values
            </span>
          </div>

          <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="group relative min-h-[280px] border-b border-r border-white/10 p-7 transition-colors duration-500 hover:bg-white/[0.025] sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[9px] tracking-[0.2em] text-[#168fff]">
                    {value.number}
                  </span>

                  <Plus
                    size={18}
                    strokeWidth={1.2}
                    className="text-zinc-600 transition-all duration-500 group-hover:rotate-90 group-hover:text-[#168fff]"
                  />
                </div>

                <div className="mt-20">
                  <h4 className="text-2xl font-medium tracking-[-0.03em]">
                    {value.title}
                  </h4>

                  <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
                    {value.text}
                  </p>
                </div>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#168fff] transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* About CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-12 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-500">
              Ready to move ahead?
            </p>

            <p className="mt-3 text-xl font-light text-zinc-300 sm:text-2xl">
              Let's build something meaningful together.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-5 border border-white/20 px-7 py-4 text-[10px] font-medium uppercase tracking-[0.22em] transition-all duration-300 hover:border-[#168fff] hover:bg-[#168fff] hover:text-black"
          >
            Work with us

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;