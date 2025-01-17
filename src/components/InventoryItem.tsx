'use client';

import { motion } from 'framer-motion';
import { type InventoryItem as InventoryItemType } from '@/types/game';
import { RARITY_VALUES } from '@/data/items';
import { useGameStore } from '@/lib/store';
import { Button } from './ui/Button';

const rarityColors = {
  common: 'border-gray-500',
  uncommon: 'border-blue-500',
  rare: 'border-purple-500',
  legendary: 'border-yellow-500'
};

interface InventoryItemProps {
  item: InventoryItemType;
}

export function InventoryItem({ item }: InventoryItemProps) {
  const { removeItem, stats, updateStats } = useGameStore();

  const handleSell = () => {
    const value = RARITY_VALUES[item.rarity];
    updateStats({ rp: stats.rp + value });
    removeItem(item.id, item.obtainedAt);
  };

  return (
    <motion.div
      className={`p-4 border-2 ${rarityColors[item.rarity]} rounded-lg`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-auto object-contain rounded mb-2"
      />
      <h3 className="font-bold">{item.name}</h3>
      <p className="text-sm opacity-75">{item.description}</p>
      <p className="text-sm mt-1">Rarity: {item.rarity}</p>
      <Button variant="danger" onClick={handleSell} className="mt-2 w-full">
        SELL ({RARITY_VALUES[item.rarity]} RP)
      </Button>
    </motion.div>
  );
}
