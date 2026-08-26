import React from "react";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  BrainCircuit,
  Bot,
  Laptop,
} from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { dramaticReveal, dramaticRevealStagger, revealViewport } from "../lib/motionVariants";

const services = [
  {
    number: "01",
    title: "WEB DEVELOPMENT",
    description:
      "High-performance websites and digital products designed to turn ideas into powerful online experiences.",
    icon: Code2,
    tags: ["Websites", "E-Commerce", "Web Apps"],
  },
  {
    number: "02",
    title: "APP DEVELOPMENT",
    description:
      "Modern mobile applications built around usability, performance, scalability, and a seamless user experience.",
    icon: Smartphone,
    tags: ["iOS", "Android", "Cross-Platform"],
  },
  {
    number: "03",
    title: "AI SAAS SOLUTIONS",
    description:
      "Intelligent SaaS products that use AI to solve real business problems, automate workflows, and create new possibilities.",
    icon: BrainCircuit,
    tags: ["AI Products", "SaaS", "LLM Solutions"],
  },
  {
    number: "04",
    title: "AI AUTOMATION",
    description:
      "Smart automation systems that reduce repetitive work, connect your tools, and help your business operate more efficiently.",
    icon: Bot,
    tags: ["AI Agents", "Workflows", "Integrations"],
  },
  {
    number: "05",
    title: "SOFTWARE DEVELOPMENT",
    description:
      "Scalable software solutions engineered around your business needs, from custom platforms to complex enterprise applications.",
    icon: Laptop,
    tags: ["Custom Software", "Enterprise", "APIs"],
  },
];

const Services = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Blue ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-[#008cff]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        {/* Section heading */}
        <motion.div
          variants={dramaticReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mb-20 grid gap-10 lg:grid-cols-[0.8fr_1.8fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#008cff]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-400">
                CortexNova / Services
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              Technology
              <br />
              <span className="bg-gradient-to-r from-white via-[#d9e0e8] to-[#168fff] bg-clip-text text-transparent">
                built to perform.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              From digital products to intelligent automation, we build
              technology that solves real problems and gives businesses room
              to move forward.
            </p>
          </div>
        </motion.div>

        {/* Services */}
        <div className="border-t border-white/10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                custom={index}
                variants={dramaticRevealStagger}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                className="group relative border-b border-white/10"
              >
                <div className="grid min-h-[300px] gap-8 py-12 lg:grid-cols-[100px_1.1fr_1fr_100px] lg:items-center lg:gap-12">
                  {/* Number */}
                  <div className="text-xs tracking-[0.2em] text-[#168fff]">
                    {service.number}
                  </div>

                  {/* Title */}
                  <div className="flex items-start gap-6">
                    <div className="mt-1 hidden h-12 w-12 shrink-0 items-center justify-center border border-white/10 transition-all duration-500 group-hover:border-[#168fff]/50 group-hover:bg-[#168fff]/10 sm:flex">
                      <Icon
                        size={21}
                        strokeWidth={1.4}
                        className="text-zinc-400 transition-colors duration-500 group-hover:text-[#168fff]"
                      />
                    </div>

                    <h3 className="text-3xl font-medium uppercase leading-none tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="max-w-xl text-sm leading-7 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300 sm:text-base">
                      {service.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/10 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-zinc-500 transition-colors duration-500 group-hover:border-[#168fff]/30 group-hover:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow — now magnetic */}
                  <div className="hidden justify-end lg:flex">
                    <MagneticButton
                      onClick={scrollToContact}
                      strength={0.5}
                      aria-label={`Start a project — ${service.title}`}
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition-colors duration-500 group-hover:border-[#168fff] group-hover:bg-[#168fff] group-hover:text-black group-hover:rotate-45"
                    >
                      <ArrowUpRight size={21} strokeWidth={1.5} />
                    </MagneticButton>
                  </div>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#168fff] transition-all duration-700 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
