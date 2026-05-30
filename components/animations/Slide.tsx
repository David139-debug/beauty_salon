"use client";

import { motion } from "framer-motion";

const Slide = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: 0.5 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Slide;
