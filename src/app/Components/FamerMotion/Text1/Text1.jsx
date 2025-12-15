"use client";
import { motion } from "framer-motion";
const Text1 = () => {
  return (
    <motion.div
      initial={{ opacity: 100, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Hello Next.js 👋</h1>
    </motion.div>
  );
};

export default Text1;
