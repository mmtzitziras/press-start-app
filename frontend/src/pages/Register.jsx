import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0b0b0f] px-4">
      
      {/* CRT Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0, 255, 255, 0.1) 0px, transparent 2px, transparent 4px)",
        }}
      />

      {/* Arcade Panel */}
      <div className="relative z-20 w-full max-w-md">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="mb-2 tracking-wider"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "clamp(1.2rem, 4vw, 2rem)",
              color: "#ff00ff",
              textShadow: "0 0 20px #ff00ff",
            }}
          >
            NEW PLAYER
          </h1>
        </div>

        {/* Panel */}
        <div
          className="border-4 border-[#ff00ff] bg-[#0b0b0f] p-8"
          style={{
            boxShadow:
              "0 0 20px rgba(255, 0, 255, 0.3), inset 0 0 20px rgba(255, 0, 255, 0.1)",
          }}
        >
          {/* Inputs */}
          <div className="space-y-6 mb-8">
            <div>
              <label
                className="block mb-2 text-[#ff00ff] text-xs tracking-wider"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                USERNAME
              </label>
              <input
                type="text"
                className="w-full bg-[#1a1a1f] border-2 border-[#ff00ff]/30 px-4 py-3 text-white focus:border-[#ff00ff] focus:outline-none transition-all"
                style={{ boxShadow: "0 0 10px rgba(255, 0, 255, 0.1)" }}
              />
            </div>

            <div>
              <label
                className="block mb-2 text-[#ff00ff] text-xs tracking-wider"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                PASSWORD
              </label>
              <input
                type="password"
                className="w-full bg-[#1a1a1f] border-2 border-[#ff00ff]/30 px-4 py-3 text-white focus:border-[#ff00ff] focus:outline-none transition-all"
                style={{ boxShadow: "0 0 10px rgba(255, 0, 255, 0.1)" }}
              />
            </div>

            <div>
              <label
                className="block mb-2 text-[#ff00ff] text-xs tracking-wider"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                className="w-full bg-[#1a1a1f] border-2 border-[#ff00ff]/30 px-4 py-3 text-white focus:border-[#ff00ff] focus:outline-none transition-all"
                style={{ boxShadow: "0 0 10px rgba(255, 0, 255, 0.1)" }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => navigate("/profile")}
              className="group w-full px-6 py-4 bg-transparent border-[3px] border-[#ff00ff] transition-all duration-200 hover:bg-[#ff00ff]"
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "0.8rem" }}
            >
              <span className="text-[#ff00ff] group-hover:text-[#0b0b0f] transition-colors">
                CREATE PLAYER
              </span>
            </button>

            <button
              onClick={() => navigate("/login")}
              className="group w-full px-6 py-4 bg-transparent border-[3px] border-[#00ffff] transition-all duration-200 hover:bg-[#00ffff]"
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "0.8rem" }}
            >
              <span className="text-[#00ffff] group-hover:text-[#0b0b0f] transition-colors">
                BACK TO LOGIN
              </span>
            </button>
          </div>
        </div>

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="block mx-auto mt-6 text-[#888899] hover:text-[#00ffff] transition-colors text-xs tracking-wider"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          ← BACK
        </button>
      </div>

      <Footer />
    </div>
  );
}
