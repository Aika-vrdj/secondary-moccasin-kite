'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import PlayerStats from '@/components/PlayerStats';
import CodeRedeem from '@/components/CodeRedeem';
import GachaRoll from '@/components/GachaRoll';
import Inventory from '@/components/Inventory';

export default function HomePage() {
  const [stats, setStats] = useState(() => {
    // Load stats from local storage or initialize defaults
    const savedStats = localStorage.getItem('playerStats');
    return savedStats ? JSON.parse(savedStats) : { rp: 0, lastDailyBonus: null };
  });

  useEffect(() => {
    const now = new Date();
    const lastBonus = stats.lastDailyBonus ? new Date(stats.lastDailyBonus) : null;

    if (!lastBonus) {
      // First-time user: Give 50 RP
      const updatedStats = {
        ...stats,
        rp: stats.rp + 50,
        lastDailyBonus: now.toISOString(),
      };
      setStats(updatedStats);
      localStorage.setItem('playerStats', JSON.stringify(updatedStats));
    } else if (now.getTime() - lastBonus.getTime() > 24 * 60 * 60 * 1000) {
      // Daily bonus: Add 10 RP if 24 hours have passed
      const updatedStats = {
        ...stats,
        rp: stats.rp + 10,
        lastDailyBonus: now.toISOString(),
      };
      setStats(updatedStats);
      localStorage.setItem('playerStats', JSON.stringify(updatedStats));
    }
  }, [stats]);

  return (
// Main container with cyberpunk theme styling
<div className="min-h-screen bg-black text-green-500 p-8 font-mono">
  {/* Header for Rebel */}
  <h1 
    className="text-center text-4xl font-bold text-green-400 mb-4"
    style={{
      textShadow: "0 0 8px #00ff00, 0 0 16px #00ff00",
    }}
  >
    Rebel
  </h1>

  {/* Subheader with creative ASCII art */}
  <pre
    className="text-center text-sm leading-4 text-green-400 mt-2"
    style={{ whiteSpace: "pre-wrap" }}
  >
    {`
 ██╗    ██╗ █████╗ ███████╗████████╗███████╗██╗      █████╗ ███╗   ██╗██████╗ 
 ██║    ██║██╔══██╗██╔════╝╚══██╔══╝██╔════╝██║     ██╔══██╗████╗  ██║██╔══██╗
 ██║ █╗ ██║███████║███████╗   ██║   █████╗  ██║     ███████║██╔██╗ ██║██║  ██║
 ██║███╗██║██╔══██║╚════██║   ██║   ██╔══╝  ██║     ██╔══██║██║╚██╗██║██║  ██║
 ╚███╔███╔╝██║  ██║███████║   ██║   ███████╗███████╗██║  ██║██║ ╚████║██████╔╝
  ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ 
                   by Aika Ioka, version 0.1, aikavrdj.com
    `}
  </pre>

  {/* Content container with maximum width and spacing between components */}
  <div className="max-w-2xl mx-auto space-y-8 mt-8">
     <motion.div>
        <PlayerStats stats={stats} />
      <CodeRedeem />
      <GachaRoll />
      <Inventory />
    </motion.div>
  );
}
