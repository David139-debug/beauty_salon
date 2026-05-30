"use client";

import { motion } from "framer-motion";

const ShowUp = ({
  children,
  width,
}: {
  children: React.ReactNode;
  width: boolean;
}) => {
  return (
    <motion.div
      className={`${width ? "w-full" : ""}`}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      {children}
    </motion.div>
  );
};

export default ShowUp;
