'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { InventoryItem, PlayerStats, Rarity, ItemType } from '@/types/game';

interface GameState {
  inventory: InventoryItem[];
  stats: PlayerStats;
  usedCodes: string[];
  easterEggs: { rarity: Record<Rarity, boolean>; type: Record<ItemType, boolean> };
  addItem: (item: InventoryItem) => void;
  removeItem: (itemId: string, obtainedAt: string) => void;
  updateStats: (stats: Partial<PlayerStats>) => void;
  addUsedCode: (code: string) => void;
  checkEasterEggByRarity: (rarity: Rarity, totalRequired: number) => void;
  checkEasterEggByType: (type: ItemType, totalRequired: number) => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      inventory: [],
      stats: {
        level: 1,
        xp: 0,
        rp: 0,
        lastDailyBonus: null,
      },
      usedCodes: [],
      easterEggs: {
        rarity: {
          common: false,
          uncommon: false,
          rare: false,
          legendary: false,
        },
        type: {
          food: false,
          useless: false,
          gear: false,
        },
      },
      addItem: (item) => {
        set((state) => ({
          inventory: [...state.inventory, item],
        }));
        const { checkEasterEggByRarity, checkEasterEggByType } = get();
        checkEasterEggByRarity(item.rarity, 5); // Example: Requires 5 items of the same rarity
        checkEasterEggByType(item.type, 3); // Example: Requires 3 items of the same type
      },
      removeItem: (itemId, obtainedAt) =>
        set((state) => ({
          inventory: state.inventory.filter(
            (item) => !(item.id === itemId && item.obtainedAt === obtainedAt)
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
      checkEasterEggByRarity: (rarity, totalRequired) => {
        const { inventory, easterEggs } = get();
        if (easterEggs.rarity[rarity]) return; // Already unlocked

        const itemsOfRarity = inventory.filter((item) => item.rarity === rarity);
        if (itemsOfRarity.length === totalRequired) {
          set((state) => ({
            easterEggs: {
              ...state.easterEggs,
              rarity: { ...state.easterEggs.rarity, [rarity]: true },
            },
          }));
          console.log(`Easter egg unlocked for collecting all ${rarity} items!`);
          // Add your easter egg logic here
        }
      },
      checkEasterEggByType: (type, totalRequired) => {
        const { inventory, easterEggs } = get();
        if (easterEggs.type[type]) return; // Already unlocked

        const itemsOfType = inventory.filter((item) => item.type === type);
        if (itemsOfType.length === totalRequired) {
          set((state) => ({
            easterEggs: {
              ...state.easterEggs,
              type: { ...state.easterEggs.type, [type]: true },
            },
          }));
          console.log(`Easter egg unlocked for collecting all ${type} items!`);
          // Add your easter egg logic here
        }
      },
    }),
    {
      name: 'gacha-game',
    }
  )
);
