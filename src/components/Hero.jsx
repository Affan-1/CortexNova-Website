import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const headingItem = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function Hero() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] overflow-hidden bg-cortex-black"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:75px_75px]" />

        {/* Main blue glow */}
        <motion.div
          className="absolute right-[-10%] top-[18%] h-[500px] w-[500px] rounded-full bg-cortex-blue/10 blur-[150px]"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small blue light */}
        <motion.div
          className="absolute bottom-[15%] left-[35%] h-[250px] w-[250px] rounded-full bg-cortex-blue/5 blur-[120px]"
          animate={{
            x: [-40, 40, -40],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Diagonal lines */}
        <motion.div
          className="absolute right-[-15%] top-[30%] h-px w-[65%] rotate-[-34deg] bg-gradient-to-r from-transparent via-cortex-blue/40 to-transparent"
          animate={{
            x: [-100, 150, -100],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[-10%] top-[45%] h-px w-[55%] rotate-[-34deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: [100, -100, 100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Dark vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,transparent_0%,rgba(5,5,5,0.2)_40%,#050505_85%)]" />
      </div>

      {/* Hero content */}
      <div className="cortex-container relative z-10 flex min-h-[92vh] flex-col justify-center pt-28 pb-16">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-7 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-cortex-blue" />

          <span className="cortex-label">
            CortexNova / Digital Technology
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={headingContainer}
          initial="hidden"
          animate="visible"
          className="max-w-[1050px] font-display text-[clamp(44px,7.6vw,128px)] font-semibold leading-[0.9] tracking-[-0.06em]"
        >
          <motion.span variants={headingItem} className="block">
            WE BUILD
          </motion.span>

          <motion.span
            variants={headingItem}
            className="cortex-gradient-text block"
          >
            TECHNOLOGY
          </motion.span>

          <motion.span variants={headingItem} className="block">
            THAT MOVES
          </motion.span>

          <motion.span variants={headingItem} className="block">
            AHEAD.
          </motion.span>
        </motion.h1>

        {/* Bottom hero area */}
        <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <p className="max-w-[650px] text-sm leading-7 text-cortex-silver md:text-base md:leading-8">
              We build modern digital products, AI solutions, and intelligent
              automation that help businesses turn ideas into scalable
              technology.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <MagneticButton
                onClick={scrollToContact}
                strength={0.4}
                className="group inline-flex items-center justify-center bg-cortex-blue px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-cortex-black transition-colors duration-500 hover:bg-cortex-blue-bright hover:shadow-[0_0_40px_rgba(0,140,255,0.25)]"
              >
                Start a Project

                <ArrowUpRight
                  size={15}
                  className="ml-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </MagneticButton>

              <MagneticButton
                onClick={scrollToServices}
                strength={0.4}
                className="group inline-flex items-center justify-center border border-white/15 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-cortex-white transition-colors duration-500 hover:border-cortex-blue hover:text-cortex-blue"
              >
                Explore Services

                <ArrowUpRight
                  size={15}
                  className="ml-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 1,
            }}
            className="hidden border-l border-white/10 pl-7 lg:block"
          >
            <p className="text-[8px] uppercase tracking-[0.25em] text-cortex-silver">
              Independent
            </p>

            <p className="mt-2 font-display text-4xl tracking-[-0.05em]">
              01
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-cortex-blue">
              Digital Studio
            </p>
          </motion.div>
        </div>

        {/* Scroll */}
        <motion.button
          type="button"
          onClick={scrollToServices}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-7 right-7 hidden items-center gap-3 text-cortex-silver transition-colors duration-300 hover:text-cortex-blue md:flex"
        >
          <span className="text-[8px] uppercase tracking-[0.25em]">
            Scroll to explore
          </span>

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={14} />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
