'use client';

// Import necessary dependencies
import { useEffect } from 'react';
import { motion } from 'framer-motion'; // For animations
import { useGameStore } from '@/lib/store'; // Game state management
import PlayerStats from '@/components/PlayerStats';
import CodeRedeem from '@/components/CodeRedeem';
import GachaRoll from '@/components/GachaRoll';
import Inventory from '@/components/Inventory';

export default function HomePage() {
  // Get player stats and update function from game store
  const { stats, updateStats } = useGameStore();

  // Check for daily bonus when the page loads
  useEffect(() => {
    const now = new Date();
    const lastBonus = stats.lastDailyBonus ? new Date(stats.lastDailyBonus) : null;
    
    // Give daily bonus if 24 hours have passed since last bonus
    if (!lastBonus || now.getTime() - lastBonus.getTime() > 24 * 60 * 60 * 1000) {
      updateStats({
        rp: stats.rp + 10, // Add 10 RP as daily bonus
        lastDailyBonus: now.toISOString() // Update last bonus time
      });
    }
  }, []);

  return (
    // Main container with cyberpunk theme styling
    <div className="min-h-screen bg-black text-green-500 p-8 font-mono">
      {/* Animated title with fade-in effect */}
      <motion.h1 
        className="text-4xl mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Rebel Stash v0.1
      </motion.h1>
      
      {/* Content container with maximum width and spacing between components */}
      <div className="max-w-2xl mx-auto space-y-8">
        <PlayerStats /> {/* Display player level, XP and RP */}
        <CodeRedeem /> {/* Allow players to redeem bonus codes */}
        <GachaRoll />  {/* Main gacha game mechanic */}
        <Inventory />  {/* Show player's collected items */}
      </div>
    </div>
  );
}
