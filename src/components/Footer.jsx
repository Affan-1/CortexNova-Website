import React from "react";
import { ArrowUpRight, Code2, Link2, AtSign } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Process", href: "#process" },
      { label: "Technology", href: "#technology" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "App Development", href: "#services" },
      { label: "AI SaaS Solutions", href: "#services" },
      { label: "AI Automation", href: "#services" },
      { label: "Software Development", href: "#services" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "hello@cortexnova.com", href: "mailto:hello@cortexnova.com" },
      { label: "+92 3233129528", href: "tel:+92 3233129528" },
      { label: "Karachi, Pakistan", href: "#contact" },
    ],
  },
];

const socials = [
  { icon: Link2, label: "LinkedIn", href: "https://www.linkedin.com/company/cortexnova/?viewAsMember=true" },
  { icon: AtSign, label: "Twitter", href: "#" },
  { icon: Code2, label: "GitHub", href: "#" },
];

const Footer = () => {
  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return;
      }
    }

    window.location.href = href;
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pt-20 sm:px-10 lg:px-14">
        {/* Top: big CTA line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-8 border-b border-white/10 pb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#168fff]">
              CortexNova
            </p>

            <h3 className="mt-5 max-w-2xl font-display text-4xl font-medium uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              We build technology
              <br />
              that moves ahead.
            </h3>
          </div>

          <button
            type="button"
            onClick={() => handleNavigation("#contact")}
            className="group inline-flex shrink-0 items-center gap-4 border border-white/15 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:border-[#008cff] hover:bg-[#008cff] hover:text-black"
          >
            Start a Project

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </button>
        </motion.div>

        {/* Middle: link columns */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {/* Logo / description column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-xl font-semibold tracking-[-0.03em] text-white">
              CORTEX
              <span className="text-[#008cff]">NOVA</span>
            </span>

            <p className="mt-5 max-w-xs text-sm leading-7 text-zinc-500">
              A technology studio building websites, apps, AI systems, and
              automation for businesses that want to move forward.
            </p>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="group flex h-10 w-10 items-center justify-center border border-white/10 text-zinc-400 transition-all duration-300 hover:border-[#008cff] hover:text-[#168fff]"
                  >
                    <Icon size={15} strokeWidth={1.6} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Link columns */}
          {footerLinks.map((group, index) => (
            <motion.div
              key={group.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.08 * (index + 1) }}
            >
              <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                {group.heading}
              </p>

              <ul className="mt-6 space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => handleNavigation(link.href)}
                      className="text-left text-sm text-zinc-400 transition-colors duration-300 hover:text-[#168fff]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-[10px] uppercase tracking-[0.15em] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CortexNova. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              className="transition-colors duration-300 hover:text-[#168fff]"
            >
              Privacy Policy
            </button>

            <button
              type="button"
              className="transition-colors duration-300 hover:text-[#168fff]"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
