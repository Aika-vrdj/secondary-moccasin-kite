'use client';

import { useGameStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { items, RARITY_CHANCES } from '@/data/items';
import type { Rarity } from '@/types/game';

export default function GachaRoll() {
  const { stats, updateStats, addItem } = useGameStore();

  const rollGacha = () => {
    if (stats.rp < 10) return;

    const roll = Math.random();
    let selectedRarity: Rarity;
    
    if (roll < RARITY_CHANCES.legendary) selectedRarity = 'legendary';
    else if (roll < RARITY_CHANCES.legendary + RARITY_CHANCES.rare) selectedRarity = 'rare';
    else if (roll < RARITY_CHANCES.legendary + RARITY_CHANCES.rare + RARITY_CHANCES.uncommon) selectedRarity = 'uncommon';
    else selectedRarity = 'common';

    const possibleItems = items.filter(item => item.rarity === selectedRarity);
    const selectedItem = possibleItems[Math.floor(Math.random() * possibleItems.length)];
    
    if (!selectedItem) return; // Guard against empty array

    addItem({
      id: selectedItem.id,
      name: selectedItem.name,
      description: selectedItem.description,
      rarity: selectedItem.rarity,
      image: selectedItem.image,
      obtainedAt: new Date().toISOString()
    });

    updateStats({
      rp: stats.rp - 10,
      xp: stats.xp + 10,
      level: Math.floor((stats.xp + 10) / 100) + 1
    });
  };

  return (
    <motion.div 
      className="p-4 border border-green-500 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-2xl mb-4">LOOT</h2>
      <button
        onClick={rollGacha}
        disabled={stats.rp < 10}
        className="w-full px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Scavenge and Scout (10 RP)
      </button>
    </motion.div>
  );
}
