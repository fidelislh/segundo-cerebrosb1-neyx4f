import { Home, Search, Library, Plus, Heart } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black p-6">
      <nav className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-zinc-200 font-semibold hover:text-white transition-colors">
            <Home size={24} />
            Home
          </div>
          <div className="flex items-center gap-4 text-zinc-200 font-semibold hover:text-white transition-colors">
            <Search size={24} />
            Search
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-zinc-200 hover:text-white transition-colors">
              <Library size={24} />
              Your Library
            </div>
            <Plus className="text-zinc-200 hover:text-white transition-colors" size={20} />
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-zinc-900 rounded-lg p-4 hover:bg-zinc-800 transition-colors">
              <strong className="font-semibold">Create your first playlist</strong>
              <p className="text-sm text-zinc-400 mt-1">It's easy, we'll help you</p>
              <button className="mt-4 px-4 py-2 text-sm font-semibold rounded-full bg-white text-black hover:scale-105 transition-transform">
                Create playlist
              </button>
            </div>

            <div className="bg-zinc-900 rounded-lg p-4 hover:bg-zinc-800 transition-colors">
              <strong className="font-semibold">Let's find some podcasts</strong>
              <p className="text-sm text-zinc-400 mt-1">We'll keep you updated</p>
              <button className="mt-4 px-4 py-2 text-sm font-semibold rounded-full bg-white text-black hover:scale-105 transition-transform">
                Browse podcasts
              </button>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}