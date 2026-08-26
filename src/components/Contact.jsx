import React, { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@cortexnova.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 3233129528",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
  },
];

const projectTypes = [
  "Web Development",
  "App Development",
  "AI SaaS Solutions",
  "AI Automation",
  "Software Development",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Placeholder submit logic.
    // Replace this with your real form handler (API call, email service, etc.)
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
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
          opacity: [0.04, 0.09, 0.04],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#008cff] blur-[180px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="border-b border-white/10 pb-14"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#008cff]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-500">
              CortexNova / Contact
            </span>
          </div>

          <h2 className="max-w-4xl text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            LET'S BUILD
            <br />
            <span className="bg-gradient-to-r from-white via-[#d8dee7] to-[#168fff] bg-clip-text text-transparent">
              SOMETHING NEXT.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
            Tell us about your idea, and we'll help you turn it into
            technology that actually moves your business forward.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid gap-16 pt-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#168fff]">
              Get in touch
            </p>

            <h3 className="mt-6 max-w-sm text-2xl font-light leading-[1.3] tracking-[-0.02em] text-zinc-300 sm:text-3xl">
              Have a project in mind? We'd love to hear the details.
            </h3>

            <div className="mt-12 space-y-8">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-[#168fff]">
                      <Icon size={16} strokeWidth={1.6} />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                        {item.label}
                      </p>

                      <p className="mt-2 text-sm text-zinc-300 sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-14 border-t border-white/10 pt-8">
              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                Response time
              </p>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                We typically respond within 24 hours on business days.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="border border-white/10 bg-white/[0.02] p-7 sm:p-10"
          >
            <div className="grid gap-7 sm:grid-cols-2">
              {/* Name */}
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="text-[9px] uppercase tracking-[0.2em] text-zinc-500"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-sm text-white placeholder:text-zinc-600 focus:border-[#168fff] focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="text-[9px] uppercase tracking-[0.2em] text-zinc-500"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-sm text-white placeholder:text-zinc-600 focus:border-[#168fff] focus:outline-none"
                />
              </div>

              {/* Project type */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="projectType"
                  className="text-[9px] uppercase tracking-[0.2em] text-zinc-500"
                >
                  Project Type
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-sm text-white focus:border-[#168fff] focus:outline-none"
                >
                  <option value="" disabled className="bg-[#050505]">
                    Select a service
                  </option>

                  {projectTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-[#050505]"
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-[9px] uppercase tracking-[0.2em] text-zinc-500"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about what you're looking to build..."
                  className="mt-3 w-full resize-none border-b border-white/15 bg-transparent pb-3 text-sm text-white placeholder:text-zinc-600 focus:border-[#168fff] focus:outline-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group mt-10 inline-flex w-full items-center justify-center gap-3 border border-[#008cff] bg-[#008cff] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition-all duration-500 hover:bg-[#35a7ff] sm:w-auto"
            >
              Send Message

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
