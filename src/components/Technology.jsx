import React from "react";
import { motion } from "framer-motion";

const technologies = [
    {
        number: "01",
        title: "FRONTEND",
        technologies: "React · Next.js · JavaScript · Tailwind CSS",
    },
    {
        number: "02",
        title: "BACKEND",
        technologies: "Node.js · Express · REST APIs · MongoDB",
    },
    {
        number: "03",
        title: "AI & ML",
        technologies: "AI Agents · LLMs · Generative AI · AI APIs",
    },
    {
        number: "04",
        title: "AUTOMATION",
        technologies: "n8n · Workflow Automation · API Integrations",
    },
    {
        number: "05",
        title: "MOBILE",
        technologies: "React Native · Cross-platform Applications",
    },
    {
        number: "06",
        title: "CLOUD",
        technologies: "Cloud Platforms · Deployment · Scalable Infrastructure",
    },
    {
        number: "07",
        title: "SAAS",
        technologies: "SaaS Platforms · Subscription Systems · Multi-tenant Architecture",
    },
];

const Technology = () => {
    return (
        <section
            id="technology"
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
                    opacity: [0.025, 0.07, 0.025],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008cff] blur-[180px]"
            />

            <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.8 }}
                    className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_0.8fr] lg:items-end"
                >
                    <div>
                        <div className="mb-6 flex items-center gap-4">
                            <span className="h-px w-10 bg-[#008cff]" />

                            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                                CortexNova / Technology
                            </span>
                        </div>

                        <h2 className="text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                            Technology
                            <br />
                            <span className="bg-gradient-to-r from-white via-[#d8dee7] to-[#168fff] bg-clip-text text-transparent">
                                without limits.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-7 text-zinc-500 sm:text-base">
                        We combine modern development tools, AI technologies, and scalable
                        infrastructure to create digital products built for what's next.
                    </p>
                </motion.div>

                {/* Technology grid */}
                <div className="mt-16 grid border-l border-t border-white/10 md:grid-cols-2 xl:grid-cols-3">
                    {technologies.map((tech, index) => (
                        <motion.article
                            key={tech.number}
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{
                                y: -4,
                            }}
                            className="group relative min-h-[300px] overflow-hidden border-b border-r border-white/10 p-8 transition-colors duration-500 hover:bg-white/[0.025] sm:p-10"
                        >
                            {/* Hover blue background */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#008cff]/[0.06] via-transparent to-transparent"
                            />

                            {/* Animated top border */}
                            <div className="absolute left-0 top-0 h-px w-0 bg-[#168fff] transition-all duration-700 group-hover:w-full" />

                            {/* Number */}
                            <div className="relative z-10 flex items-center justify-between">
                                <span className="text-[10px] tracking-[0.2em] text-[#168fff]">
                                    {tech.number}
                                </span>

                                <span className="h-2 w-2 rounded-full border border-zinc-700 transition-all duration-500 group-hover:border-[#168fff] group-hover:bg-[#168fff] group-hover:shadow-[0_0_12px_rgba(22,143,255,0.8)]" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 mt-16">
                                <motion.h3
                                    className="text-3xl font-medium uppercase tracking-[-0.04em] sm:text-4xl"
                                    whileHover={{
                                        x: 5,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                >
                                    {tech.title}
                                </motion.h3>

                                <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-600 transition-colors duration-500 group-hover:text-zinc-300">
                                    {tech.technologies}
                                </p>
                            </div>

                            {/* Large background number */}
                            <span className="pointer-events-none absolute -bottom-4 -right-2 text-[130px] font-semibold leading-none text-white/[0.02] transition-all duration-700 group-hover:text-[#168fff]/[0.05]">
                                {tech.number}
                            </span>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-[#008cff] transition-all duration-700 group-hover:w-full" />
                        </motion.article>
                    ))}
                </div>

                {/* Technology statement */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 border-t border-white/10 pt-12"
                >
                </motion.div>
            </div>
        </section>
    );
};

export default Technology;