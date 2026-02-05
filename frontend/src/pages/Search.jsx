import { useState } from "react";
import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import { Search as SearchIcon } from "lucide-react";

// Mock search results (to be replaced by API)
const mockSearchResults = [
  { id: "1", title: "CYBER RUNNER", cover: "https://images.unsplash.com/photo-1745223676002-b881b2a19089?fm=jpg&w=400" },
  { id: "2", title: "NEON STRIKER", cover: "https://images.unsplash.com/photo-1668119065849-d8a7e9d73a7b?fm=jpg&w=400" },
  { id: "3", title: "PIXEL WARFARE", cover: "https://images.unsplash.com/photo-1696621629216-dfed30d4427d?fm=jpg&w=400" },
  { id: "4", title: "RETRO QUEST", cover: "https://images.unsplash.com/photo-1666861986943-b78b9cafd208?fm=jpg&w=400" },
  { id: "5", title: "ARCADE LEGENDS", cover: "https://images.unsplash.com/photo-1759171053096-e7dbe7c36eb6?fm=jpg&w=400" },
  { id: "6", title: "SPACE INVADER", cover: "https://images.unsplash.com/photo-1745223676002-b881b2a19089?fm=jpg&w=400" },
  { id: "7", title: "GRID RUNNER", cover: "https://images.unsplash.com/photo-1668119065849-d8a7e9d73a7b?fm=jpg&w=400" },
  { id: "8", title: "SYNTH WAVE", cover: "https://images.unsplash.com/photo-1696621629216-dfed30d4427d?fm=jpg&w=400" },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#0b0b0f] relative">
      
      {/* CRT Scanlines */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10 z-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,255,255,.1) 0px, transparent 2px, transparent 4px)",
        }}
      />

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8 pb-24">
        
        {/* Header */}
        <h1 className="mb-8 font-arcade tracking-wider text-[clamp(1rem,4vw,1.5rem)] neon-cyan-text">
          ROM SELECTOR
        </h1>

        {/* Search bar */}
        <div className="mb-8">
          <div className="relative border-2 border-[#00ffff]/30 bg-[#1a1a1f] focus-within:border-[#00ffff] neon-cyan-box-soft">
            <div className="flex items-center px-4 py-3">
              <SearchIcon className="text-[#00ffff] mr-3" size={20} />
              <input
                type="text"
                placeholder="SEARCH GAMES..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-[#888899] focus:outline-none font-arcade text-[0.7rem]"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="border-2 border-[#00ffff]/30 bg-[#1a1a1f] p-6 relative neon-cyan-box-soft">
          
          {/* Scanlines inside panel */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(0,255,255,.2) 0px, transparent 1px, transparent 3px)",
            }}
          />

          <div className="relative z-10">
            <p className="mb-6 font-arcade text-xs text-[#888899]">
              {mockSearchResults.length} GAMES FOUND
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {mockSearchResults.map((game) => (
                <GameCard key={game.id} {...game} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
