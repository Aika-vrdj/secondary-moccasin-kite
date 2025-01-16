'use client';

import { useGameStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { RARITY_VALUES } from '@/data/items';

const rarityColors = {
  common: 'border-gray-500',
  uncommon: 'border-blue-500',
  rare: 'border-purple-500',
  legendary: 'border-yellow-500'
};

import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { InventoryItem } from './InventoryItem';

export default function Inventory() {
  const { inventory } = useGameStore();

  return (
    <Card delay={0.6}>
      <h2 className="text-2xl mb-4">INVENTORY</h2>
      <div className="grid grid-cols-2 gap-4">
        {inventory.map((item) => (
          <InventoryItem key={item.obtainedAt} item={item} />
        ))}
      </div>
    </Card>
  );
}
