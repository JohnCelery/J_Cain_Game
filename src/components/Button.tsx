import { motion } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

/** Animated button used throughout the app */
export default function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      {...props}
    >
      {children}
    </motion.button>
  );
}
