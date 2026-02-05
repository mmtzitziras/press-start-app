/* eslint-disable no-unused-vars */
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ImageWithFallback from "../components/ImageWithFallback";
import { ArrowLeft } from "lucide-react";

export default function GameDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock game data (will be replaced by API later)
  const game = {
    title: "CYBER RUNNER",
    cover:
      "https://images.unsplash.com/photo-1745223676002-b881b2a19089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    developer: "NEON STUDIOS",
    releaseYear: "2024",
    genre: "ACTION / PLATFORMER",
    description:
      "Race through neon-lit cityscapes in this high-octane arcade platformer. Master the grid, defeat your enemies, and become the ultimate cyber runner.",
  };

  const states = [
    { label: "NOW PLAYING", color: "#ffff00" },
    { label: "PLAYED", color: "#ff00ff" },
    { label: "WISHLIST", color: "#00ffff" },
  ];

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

      <main className="max-w-5xl mx-auto px-4 py-8 pb-24">
        {/* Back */}
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center gap-2 text-[#888899] hover:text-[#00ffff] transition-colors mb-8 font-arcade text-xs"
        >
          <ArrowLeft size={16} />
          BACK
        </button>

        {/* Cover / Marquee */}
        <div className="border-4 border-[#00ffff] mb-8 overflow-hidden neon-cyan-box">
          <div className="relative h-64 md:h-96">
            <ImageWithFallback
              src={game.cover}
              alt={game.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="font-arcade tracking-wider text-[clamp(1rem,4vw,2rem)] neon-cyan-text">
                {game.title}
              </h1>
            </div>
          </div>
        </div>

        {/* State selector */}
        <div className="mb-8">
          <p className="mb-4 font-arcade text-xs text-[#888899]">
            SELECT STATE
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {states.map((state) => (
              <button
                key={state.label}
                className="group px-4 py-3 border-2 transition-all hover:scale-105 font-arcade text-xs"
                style={{ borderColor: state.color }}
              >
                <span
                  className="group-hover:text-[#0b0b0f]"
                  style={{ color: state.color }}
                >
                  {state.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Metadata */}
        <div className="space-y-6">
          <Meta label="DEVELOPER" value={game.developer} />
          <Meta label="RELEASE" value={game.releaseYear} />
          <Meta label="GENRE" value={game.genre} />
          <Meta label="DESCRIPTION" value={game.description} />
        </div>
      </main>
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <h3 className="font-arcade text-xs tracking-wider neon-cyan-text mb-2">
        {label}
      </h3>
      <p className="text-white leading-relaxed">{value}</p>
    </div>
  );
}
