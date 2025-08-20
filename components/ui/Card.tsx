import React from 'react';

'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({ children, className, hover = true, glass = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-2xl p-6 border transition-all duration-300',
        glass 
          ? 'bg-white/10 backdrop-blur-lg border-pink-500/20' 
          : 'bg-gray-800 border-gray-600',
        hover && 'hover:border-pink-400/40 hover:shadow-lg hover:shadow-pink-500/10',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
    >
      {children}
    </motion.div>
  );
}