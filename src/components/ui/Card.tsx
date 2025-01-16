'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  delay?: number;
}

export function Card({ children, delay = 0 }: CardProps) {
  return (
    <motion.div 
      className="p-4 border border-green-500 rounded-lg w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
