import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0b0f]">
      
      {/* CRT Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0, 255, 255, 0.1) 0px, transparent 2px, transparent 4px)",
        }}
      />

      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1666861986943-b78b9cafd208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1
          className="mb-16 tracking-wider animate-pulse"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
            color: "#00ffff",
            textShadow:
              "0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff",
          }}
        >
          SYSTEM ONLINE
        </h1>

        <button
          onClick={() => navigate("/login")}
          className="group relative px-12 py-6 bg-transparent border-4 border-[#00ffff] transition-all duration-200 hover:bg-[#00ffff]"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
          }}
        >
          <span
            className="text-[#00ffff] group-hover:text-[#0b0b0f] transition-colors duration-200"
            style={{ textShadow: "0 0 10px #00ffff" }}
          >
            PRESS START
          </span>

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{
              boxShadow:
                "0 0 20px #00ffff, 0 0 40px #00ffff, inset 0 0 20px #00ffff",
            }}
          />
        </button>

        <p
          className="mt-12 text-[#ffff00] text-xs tracking-widest animate-pulse"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            textShadow: "0 0 10px #ffff00",
          }}
        >
          INSERT COIN
        </p>
      </div>

      <Footer />
    </div>
  );
}

