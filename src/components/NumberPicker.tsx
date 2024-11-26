import React, { useState } from 'react';
import { Dice, RefreshCw } from 'lucide-react';

export default function NumberPicker() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateNumbers = () => {
    setIsGenerating(true);
    const newNumbers: number[] = [];
    while (newNumbers.length < 7) {
      const num = Math.floor(Math.random() * 15) + 1;
      if (!newNumbers.includes(num)) {
        newNumbers.push(num);
      }
    }
    setNumbers(newNumbers.sort((a, b) => a - b));
    setIsGenerating(false);
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-6 w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Dice className="text-green-500" />
          Number Picker
        </h2>
        <button
          onClick={generateNumbers}
          disabled={isGenerating}
          className="p-2 rounded-full bg-green-500 hover:bg-green-400 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`text-black ${isGenerating ? 'animate-spin' : ''}`} size={20} />
        </button>
      </div>

      <div className="grid grid-cols-5 gap-2 mb-6 sm:grid-cols-7">
        {[...Array(15)].map((_, i) => (
          <div
            key={i + 1}
            className={`aspect-square rounded-full flex items-center justify-center text-sm font-bold
              ${numbers.includes(i + 1)
                ? 'bg-green-500 text-black'
                : 'bg-zinc-800 text-zinc-400'
              }`}
          >
            {i + 1}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {numbers.map((num) => (
          <div
            key={num}
            className="bg-zinc-800 px-4 py-2 rounded-full text-green-500 font-bold"
          >
            {num}
          </div>
        ))}
      </div>

      {numbers.length === 0 && (
        <p className="text-zinc-400 text-center mt-4">
          Click the refresh button to generate numbers
        </p>
      )}
    </div>
  );
}