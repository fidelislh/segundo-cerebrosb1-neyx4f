import { Play, Heart } from 'lucide-react';
import NumberPicker from './NumberPicker';

const playlists = [
  {
    id: 1,
    title: "Today's Top Hits",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Jung Kook is on top of the Hottest 50!"
  },
  {
    id: 2,
    title: "RapCaviar",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "New music from Drake, 21 Savage and more"
  },
  {
    id: 3,
    title: "All Out 2010s",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "The biggest songs of the 2010s"
  },
  {
    id: 4,
    title: "Rock Classics",
    cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Rock legends & epic songs"
  },
  {
    id: 5,
    title: "Chill Hits",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Kick back to the best new and recent chill hits"
  }
];

export default function Main() {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-black/20 p-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40">
            <Play size={16} fill="white" />
          </button>
        </div>
        <button className="p-1 rounded-full hover:bg-black/5">
          <Heart size={32} className="text-green-500" />
        </button>
      </div>

      <h1 className="font-bold text-3xl mt-10">Good afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {playlists.slice(0, 6).map((playlist) => (
          <div
            key={playlist.id}
            className="group relative bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
          >
            <img src={playlist.cover} alt={playlist.title} className="w-24 h-24" />
            <strong>{playlist.title}</strong>
            <button className="invisible group-hover:visible w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black absolute right-4 group-hover:scale-105 transition-transform">
              <Play fill="black" />
            </button>
          </div>
        ))}
      </div>

      <h2 className="font-bold text-2xl mt-10">Made for You</h2>

      <div className="grid grid-cols-5 gap-4 mt-4">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="bg-white/5 p-3 rounded-md hover:bg-white/10 transition-colors group relative"
          >
            <div className="relative">
              <img
                src={playlist.cover}
                className="w-full aspect-square rounded-md"
                alt={playlist.title}
              />
              <button className="invisible group-hover:visible w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black absolute right-2 bottom-2 group-hover:scale-105 transition-transform">
                <Play fill="black" />
              </button>
            </div>
            <strong className="font-semibold block mt-2">{playlist.title}</strong>
            <span className="text-sm text-zinc-400 block mt-1">
              {playlist.description}
            </span>
          </div>
        ))}
      </div>

      <h2 className="font-bold text-2xl mt-10">Number Generator</h2>
      <div className="mt-4">
        <NumberPicker />
      </div>
    </main>
  );
}