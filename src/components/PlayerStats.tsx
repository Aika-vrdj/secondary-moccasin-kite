'use client';

// Import necessary dependencies
import { useGameStore } from '@/lib/store'; // Game state management
import { motion } from 'framer-motion'; // For animations

export default function PlayerStats() {
  // Get player stats from game store
  const { stats } = useGameStore();

  return (
    // Animated container with fade-in and slide-up effect
    <motion.div 
      className="p-4 border border-green-500 rounded-lg"
      initial={{ opacity: 0, y: 20 }} // Start invisible and below final position
      animate={{ opacity: 1, y: 0 }} // Fade in and slide up
      transition={{ duration: 0.5 }} // Animation duration
    >
      <h2 className="text-2xl mb-4">PLAYER STATUS</h2>
      {/* Stats display with vertical spacing */}
      <div className="space-y-2">
        <p>LEVEL: {stats.level}</p> {/* Player's current level */}
        <p>XP: {stats.xp}</p>      {/* Experience points */}
        <p>RP: {stats.rp}</p>      {/* Resource points (currency) */}
      </div>
    </motion.div>
  );
}
