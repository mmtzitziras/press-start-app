import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import Footer from "../components/Footer";

// Mock game data
const mockGames = {
  playing: [
    {
      id: "1",
      title: "CYBER RUNNER",
      cover:
        "https://images.unsplash.com/photo-1745223676002-b881b2a19089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    },
  ],
  played: [
    {
      id: "2",
      title: "ARCADE LEGENDS",
      cover:
        "https://images.unsplash.com/photo-1759171053096-e7dbe7c36eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    },
    {
      id: "3",
      title: "GRID RUNNER",
      cover:
        "https://images.unsplash.com/photo-1668119065849-d8a7e9d73a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    },
  ],
  wishlist: [
    {
      id: "4",
      title: "NEON NIGHTS",
      cover:
        "https://images.unsplash.com/photo-1745223676002-b881b2a19089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    },
  ],
};

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] relative">
      
      {/* CRT Scanlines */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10 z-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0, 255, 255, 0.1) 0px, transparent 2px, transparent 4px)",
        }}
      />

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8 pb-24">
        
        {/* NOW PLAYING */}
        <section className="mb-12">
          <h2
            className="mb-6 font-arcade tracking-wider text-[1.2rem] text-[#ffff00]"
            style={{ textShadow: "0 0 15px #ffff00" }}
          >
            NOW PLAYING
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mockGames.playing.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </section>

        {/* PLAYED */}
        <section className="mb-12">
          <h2
            className="mb-6 font-arcade tracking-wider text-[1.2rem] text-[#ff00ff]"
            style={{ textShadow: "0 0 15px #ff00ff" }}
          >
            PLAYED
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mockGames.played.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </section>

        {/* WISHLIST */}
        <section className="mb-12">
          <h2
            className="mb-6 font-arcade tracking-wider text-[1.2rem] text-[#00ffff]"
            style={{ textShadow: "0 0 15px #00ffff" }}
          >
            WISHLIST
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mockGames.wishlist.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
