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
    
    // First time user gets 100 RP
    if (!lastBonus) {
      updateStats({
        rp: stats.rp + 100,
        lastDailyBonus: now.toISOString()
      });
    }
    // Daily bonus of 10 RP if 24 hours have passed
    else if (now.getTime() - lastBonus.getTime() > 24 * 60 * 60 * 1000) {
      updateStats({
        rp: stats.rp + 10,
        lastDailyBonus: now.toISOString()
      });
    }
  }, [stats.lastDailyBonus]); // Dependency to track `lastDailyBonus`

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
    <PlayerStats /> {/* Display player level, XP and RP */}
    <CodeRedeem /> {/* Allow players to redeem bonus codes */}
    <GachaRoll />  {/* Main gacha game mechanic */}
    <Inventory />  {/* Show player's collected items */}
  </div>
</div>
  );
}
