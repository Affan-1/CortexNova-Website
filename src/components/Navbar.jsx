import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
];

const mobileMenuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, y: 15 },
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Highlight the nav link for the section currently in view
  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavigation = (href) => {
    setMenuOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Desktop / Mobile Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-white/10 bg-[#050505]/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="cortex-container flex h-[82px] items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative flex items-center"
            aria-label="CortexNova home"
          >
            <span className="font-display text-lg font-semibold tracking-[-0.03em] text-cortex-white transition-colors duration-300 group-hover:text-cortex-blue md:text-xl">
              CORTEX
              <span className="text-cortex-blue">NOVA</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavigation(item.href)}
                  className={`group relative text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive
                      ? "text-cortex-white"
                      : "text-cortex-silver hover:text-cortex-white"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-cortex-blue transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <MagneticButton
            onClick={() => handleNavigation("#contact")}
            strength={0.3}
            className="group hidden items-center gap-2 border border-white/15 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.17em] text-cortex-white transition-colors duration-500 hover:border-cortex-blue hover:bg-cortex-blue hover:text-cortex-black lg:flex"
          >
            Start a Project

            <ArrowUpRight
              size={13}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </MagneticButton>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center border border-white/10 text-cortex-white transition-colors duration-300 hover:border-cortex-blue hover:text-cortex-blue lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.25 }}
                  className="flex"
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.25 }}
                  className="flex"
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-[#050505] lg:hidden"
          >
            <div className="flex h-full flex-col px-7 pb-8 pt-28">
              {/* Mobile menu label */}
              <motion.div
                variants={mobileLinkVariants}
                className="mb-8 flex items-center gap-4"
              >
                <span className="h-px w-8 bg-cortex-blue" />

                <span className="cortex-label">Navigation</span>
              </motion.div>

              {/* Mobile links */}
              <nav className="flex flex-col">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.label}
                    variants={mobileLinkVariants}
                    type="button"
                    onClick={() => handleNavigation(item.href)}
                    className="group flex items-center justify-between border-b border-white/10 py-5 text-left"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-[9px] tracking-[0.15em] text-cortex-blue">
                        0{index + 1}
                      </span>

                      <span className="font-display text-3xl font-medium tracking-[-0.03em] text-cortex-white transition-transform duration-300 group-hover:translate-x-2">
                        {item.label}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-cortex-silver transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cortex-blue"
                    />
                  </motion.button>
                ))}
              </nav>

              {/* Mobile CTA */}
              <motion.div variants={mobileLinkVariants} className="mt-auto">
                <button
                  type="button"
                  onClick={() => handleNavigation("#contact")}
                  className="group flex w-full items-center justify-between border border-cortex-blue bg-cortex-blue px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.17em] text-cortex-black transition-all duration-500 hover:bg-cortex-blue-bright"
                >
                  <span>Start a Project</span>

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </button>

                <p className="mt-5 text-[9px] uppercase tracking-[0.2em] text-cortex-silver">
                  We build technology that moves ahead.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
