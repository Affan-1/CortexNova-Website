import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const dotSpring = { stiffness: 800, damping: 35, mass: 0.4 };
const ringSpring = { stiffness: 200, damping: 22, mass: 0.6 };

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const dotX = useSpring(x, dotSpring);
  const dotY = useSpring(y, dotSpring);
  const ringX = useSpring(x, ringSpring);
  const ringY = useSpring(y, ringSpring);

  useEffect(() => {
    // Only enable on devices with a real mouse (skip touch/tablet)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);

    if (!isFinePointer) return;

    document.body.classList.add("custom-cursor-active");

    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);

      if (!visible) setVisible(true);
    };

    const handleOver = (event) => {
      const interactive = event.target.closest(
        "a, button, input, textarea, select, [data-cursor='pointer']"
      );

      setIsPointer(Boolean(interactive));
    };

    const handleLeaveWindow = () => setVisible(false);
    const handleEnterWindow = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseleave", handleLeaveWindow);
    document.addEventListener("mouseenter", handleEnterWindow);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", handleLeaveWindow);
      document.removeEventListener("mouseenter", handleEnterWindow);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Center dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cortex-blue"
        style={{
          x: dotX,
          y: dotY,
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[999] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cortex-blue/50"
        style={{
          x: ringX,
          y: ringY,
          opacity: visible ? 1 : 0,
        }}
        animate={{
          scale: isPointer ? 1.7 : 1,
          backgroundColor: isPointer
            ? "rgba(0, 140, 255, 0.1)"
            : "rgba(0, 140, 255, 0)",
          borderColor: isPointer
            ? "rgba(0, 140, 255, 0.9)"
            : "rgba(0, 140, 255, 0.5)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </>
  );
};

export default CustomCursor;
