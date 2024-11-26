import React, { useState, useEffect } from 'react';
import { Calendar, BarChart2, Settings2 } from 'lucide-react';

interface TimePoint {
  date: Date;
  value: number;
  type: 'fibonacci' | 'regular';
}

export default function FibonacciCycles() {
  const [cycles, setCycles] = useState<TimePoint[]>([]);
  const [useFibonacci, setUseFibonacci] = useState(true);
  const [numCycles, setNumCycles] = useState(8);
  const [baseInterval, setBaseInterval] = useState(21);

  useEffect(() => {
    const generateCycles = () => {
      const startDate = new Date();
      const fibSequence = [1, 2, 3, 5, 8, 13, 21, 34];
      const newCycles: TimePoint[] = [];

      if (useFibonacci) {
        fibSequence.slice(0, numCycles).forEach(fib => {
          const date = new Date(startDate);
          date.setDate(date.getDate() + (baseInterval * fib));
          newCycles.push({
            date,
            value: fib,
            type: 'fibonacci'
          });
        });
      } else {
        for (let i = 1; i <= numCycles; i++) {
          const date = new Date(startDate);
          date.setDate(date.getDate() + (baseInterval * i));
          newCycles.push({
            date,
            value: i,
            type: 'regular'
          });
        }
      }

      setCycles(newCycles);
    };

    generateCycles();
  }, [useFibonacci, numCycles, baseInterval]);

  return (
    <div className="bg-zinc-900 rounded-lg p-6 w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <BarChart2 className="text-green-500" />
          Time Cycles Visualization
        </h2>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setUseFibonacci(!useFibonacci)}
            className="px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors flex items-center gap-2"
          >
            <Settings2 size={18} />
            {useFibonacci ? 'Fibonacci' : 'Regular'} Cycles
          </button>
        </div>
      </div>

      <div className="relative h-64 border-b border-zinc-800">
        {cycles.map((cycle, index) => (
          <div
            key={index}
            className="absolute bottom-0 flex flex-col items-center"
            style={{
              left: `${(index / (cycles.length - 1)) * 100}%`,
              height: '100%'
            }}
          >
            <div
              className="w-px bg-green-500/30 h-full relative group"
              style={{
                height: `${(cycle.value / Math.max(...cycles.map(c => c.value))) * 100}%`
              }}
            >
              <div className="hidden group-hover:block absolute bottom-full mb-2 bg-zinc-800 px-3 py-1 rounded text-sm whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  {cycle.date.toLocaleDateString()}
                </div>
                <div className="text-green-500 font-medium">
                  {cycle.type === 'fibonacci' ? 'Fib: ' : 'Cycle: '}
                  {cycle.value}
                </div>
              </div>
            </div>
            <span className="text-xs text-zinc-500 mt-2">{cycle.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <div className="flex-1">
          <label className="block text-sm text-zinc-400 mb-2">Base Interval (days)</label>
          <input
            type="number"
            value={baseInterval}
            onChange={(e) => setBaseInterval(Number(e.target.value))}
            className="w-full bg-zinc-800 rounded px-3 py-2 text-white"
            min="1"
            max="100"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm text-zinc-400 mb-2">Number of Cycles</label>
          <input
            type="number"
            value={numCycles}
            onChange={(e) => setNumCycles(Number(e.target.value))}
            className="w-full bg-zinc-800 rounded px-3 py-2 text-white"
            min="1"
            max="8"
          />
        </div>
      </div>
    </div>
  );
}