export type Rarity = 'common' | 'uncommon' | 'rare' | 'legendary';

export interface Item {
  id: string;
  name: string;
  description: string;
  rarity: Rarity;
  image: string;
}

export interface InventoryItem extends Item {
  obtainedAt: string;
}

export interface PlayerStats {
  level: number;
  xp: number;
  rp: number;
  lastDailyBonus: string | null;
}

export interface RedeemCode {
  code: string;
  rp: number;
  used: boolean;
}
