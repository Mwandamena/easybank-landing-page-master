// motion
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Motion({ children, i, del }) {
  // motion ref
  const ref = useRef(null);

  // framer motion
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  // useEffect
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.4,
        delay: `${i ? i * 0.2 : del}`,
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
