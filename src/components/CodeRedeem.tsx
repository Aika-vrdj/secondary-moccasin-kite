'use client';

import { useState } from 'react';
import { useGameStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { redeemCodes } from '@/data/codes';

export default function CodeRedeem() {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const { stats, updateStats, usedCodes, addUsedCode } = useGameStore();

  const handleRedeem = () => {
    const redeemCode = redeemCodes.find(c => c.code === code.toUpperCase());
    
    if (!redeemCode) {
      setMessage('Invalid code');
      return;
    }

    if (usedCodes.includes(code.toUpperCase())) {
      setMessage('Code already used');
      return;
    }

    updateStats({ rp: stats.rp + redeemCode.rp });
    addUsedCode(code.toUpperCase());
    setMessage(`Successfully redeemed ${redeemCode.rp} RP!`);
    setCode('');
  };

  return (
    <motion.div 
      className="p-4 border border-green-500 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl mb-4">LOOT CODE REDEEM</h2>
      <div className="flex gap-4">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="bg-black border border-green-500 text-green-500 px-4 py-2 rounded-lg flex-1"
          placeholder="Enter code..."
        />
        <button
          onClick={handleRedeem}
          className="px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400"
        >
          REDEEM
        </button>
      </div>
      {message && (
        <p className="mt-2 text-sm">{message}</p>
      )}
    </motion.div>
  );
}
