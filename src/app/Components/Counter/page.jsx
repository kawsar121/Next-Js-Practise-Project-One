"use client";
import { useState } from "react";
import Button1 from "../FamerMotion/Button1/Button1";
import { motion } from "framer-motion";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="mt-10 w-5xl mx-auto h-96 pt-20 bg-amber-200">
      <h1 className="text-center text-lg p-5">
        Conter : <span className="text-red-500">{counter}</span>
      </h1>
      <div className="mt-10 flex justify-center gap-5">
        <button onClick={() => setCounter(counter + 1)} className="border p-2">
          Increment
        </button>
        <button onClick={() => setCounter(counter - 1)} className="border p-2">
          Dicrement
        </button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setCounter(counter * 0)} className="border p-2">
          Reset
        </motion.button>
      </div>
    </div>
  );
};

export default Counter;
