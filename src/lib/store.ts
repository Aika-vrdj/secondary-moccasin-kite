'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type InventoryItem, type PlayerStats, type RedeemCode } from '@/types/game';

interface GameState {
  inventory: InventoryItem[];
  stats: PlayerStats;
  usedCodes: string[];
  addItem: (item: InventoryItem) => void;
  removeItem: (itemId: string, obtainedAt: string) => void;
  updateStats: (stats: Partial<PlayerStats>) => void;
  addUsedCode: (code: string) => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      inventory: [],
      stats: {
        level: 1,
        xp: 0,
        rp: 100,
        lastDailyBonus: null,
      },
      usedCodes: [],
      addItem: (item) =>
        set((state) => ({
          inventory: [...state.inventory, item],
        })),
      removeItem: (itemId: string, obtainedAt: string) =>
        set((state) => ({
          inventory: state.inventory.filter((item) => 
            !(item.id === itemId && item.obtainedAt === obtainedAt)
          ),
        })),
      updateStats: (newStats) =>
        set((state) => ({
          stats: { ...state.stats, ...newStats },
        })),
      addUsedCode: (code) =>
        set((state) => ({
          usedCodes: [...state.usedCodes, code],
        })),
    }),
    {
      name: 'gacha-game',
    }
  )
);
