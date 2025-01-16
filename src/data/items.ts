import { type Item } from '@/types/game';
export const items: Item[] = [
// Legendary Items
{
  id: 'quantum-blade',
  name: 'Quantum Blade',
  description: 'A sword that exists in multiple dimensions simultaneously',
  rarity: 'legendary',
  image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=300'
}, {
  id: 'neural-crown',
  name: 'Neural Crown',
  description: 'Amplifies cybernetic abilities to godlike levels',
  rarity: 'legendary',
  image: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=300'
},
// Rare Items
{
  id: 'plasma-shield',
  name: 'Plasma Shield',
  description: 'Projects an impenetrable energy barrier',
  rarity: 'rare',
  image: 'https://images.unsplash.com/photo-1569748130764-3fed0c102c59?w=300'
}, {
  id: 'cyber-wings',
  name: 'Cyber Wings',
  description: 'Nanotech wings enabling digital flight',
  rarity: 'rare',
  image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=300'
}, {
  id: 'time-glitch',
  name: 'Time Glitch',
  description: 'Temporal anomaly in a containment field',
  rarity: 'rare',
  image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300'
},
// Uncommon Items
{
  id: 'data-crystal',
  name: 'Data Crystal',
  description: 'Crystallized information from the digital realm',
  rarity: 'uncommon',
  image: "https://picsum.photos/200"
}, {
  id: 'neural-implant',
  name: 'Neural Implant',
  description: 'Basic cybernetic enhancement chip',
  rarity: 'uncommon',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300'
}, {
  id: 'tech-familiar',
  name: 'Tech Familiar',
  description: 'Small robotic companion drone',
  rarity: 'uncommon',
  image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300'
},
// Common Items
{
  id: 'energy-cell',
  name: 'Energy Cell',
  description: 'Standard power source for cyber gear',
  rarity: 'common',
  image: 'https://images.unsplash.com/photo-1517420879524-86d64ac2f339?w=300'
}, {
  id: 'repair-nanites',
  name: 'Repair Nanites',
  description: 'Basic healing nanobots',
  rarity: 'common',
  image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=300'
}, {
  id: 'data-shard',
  name: 'Data Shard',
  description: 'Fragment of digital memory',
  rarity: 'common',
  image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300'
}];

// Drop rate chances for each rarity
export const RARITY_CHANCES = {
  common: 0.60,
  // 60% chance
  uncommon: 0.25,
  // 25% chance
  rare: 0.12,
  // 12% chance
  legendary: 0.03 // 3% chance
};

// RP value when selling items
export const RARITY_VALUES = {
  common: 5,
  // 5 RP
  uncommon: 15,
  // 15 RP
  rare: 50,
  // 50 RP
  legendary: 200 // 200 RP
};