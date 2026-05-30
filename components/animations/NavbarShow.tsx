"use client";

import { motion } from "framer-motion";

const NavbarShow = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0, transition: { duration: 0.7 } }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default NavbarShow;
