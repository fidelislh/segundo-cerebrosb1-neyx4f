import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Heart } from 'lucide-react';

export default function Player() {
  return (
    <footer className="bg-black border-t border-zinc-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Album cover"
            className="w-14 h-14 rounded"
          />
          <div>
            <h3 className="font-semibold">Neon Lights</h3>
            <span className="text-sm text-zinc-400">Electronic Dreams</span>
          </div>
          <Heart size={20} className="text-green-500 ml-4" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform">
              <Play size={20} fill="black" />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">2:14</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-green-500 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">3:45</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Volume2 size={20} className="text-zinc-200" />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-white w-16 h-1 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}