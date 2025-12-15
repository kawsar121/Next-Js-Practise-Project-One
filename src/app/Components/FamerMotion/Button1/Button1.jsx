"use client";
import { motion } from "framer-motion";

const Button1 = () => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      Click Me
    </motion.button>
  );
};

export default Button1;
