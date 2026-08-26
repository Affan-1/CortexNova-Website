import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springConfig = { stiffness: 150, damping: 15, mass: 0.4 };

/**
 * MagneticButton
 * Wrap any button or link to make it "pull" toward the cursor when nearby.
 *
 * Usage:
 * <MagneticButton onClick={...} className="...">Start a Project</MagneticButton>
 * <MagneticButton as="a" href="#contact" className="...">Learn more</MagneticButton>
 */
const MagneticButton = ({
  as = "button",
  children,
  className = "",
  strength = 0.35,
  ...props
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (event) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;

    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { x: springX, y: springY },
    className,
    ...props,
  };

  if (as === "a") {
    return <motion.a {...sharedProps}>{children}</motion.a>;
  }

  return (
    <motion.button type={props.type || "button"} {...sharedProps}>
      {children}
    </motion.button>
  );
};

export default MagneticButton;
