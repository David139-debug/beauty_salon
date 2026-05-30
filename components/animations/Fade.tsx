"use client";

import { motion } from "framer-motion";

const Fade = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      viewport={{ once: true }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 1.5 } }}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
