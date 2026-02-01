import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Login() {
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

      <div className="relative z-20 w-full max-w-md">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-arcade tracking-wider neon-cyan-text text-[clamp(1.2rem,4vw,2rem)]">
            PLAYER SELECT
          </h1>
        </div>

        {/* Panel */}
        <div className="border-4 border-[#00ffff] bg-[#0b0b0f] p-8 neon-cyan-box">
          
          {/* Inputs */}
          <div className="space-y-6 mb-8">
            {[
              { label: "EMAIL", type: "email" },
              { label: "PASSWORD", type: "password" },
            ].map(({ label, type }) => (
              <div key={label}>
                <label className="block mb-2 tracking-wider font-arcade neon-cyan-text text-[0.7rem]">
                  {label}
                </label>
                <input
                  type={type}
                  className="w-full bg-[#1a1a1f] border-2 border-[#00ffff]/30 px-4 py-3 text-white focus:border-[#00ffff] focus:outline-none transition-all"
                />
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => navigate("/profile")}
              className="group w-full px-6 py-4 bg-transparent border-[3px] border-[#00ffff]
                         hover:bg-[#00ffff] transition-all font-arcade
                         text-[0.8rem] neon-cyan-text hover:text-[#0b0b0f]"
            >
              LOGIN
            </button>

            <button
              onClick={() => navigate("/register")}
              className="group w-full px-6 py-4 bg-transparent border-[3px] border-[#ff00ff]
                         hover:bg-[#ff00ff] transition-all font-arcade
                         text-[0.8rem] neon-magenta-text hover:text-[#0b0b0f]"
            >
              SIGN UP
            </button>
          </div>
        </div>

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="block mx-auto mt-6 tracking-wider font-arcade text-[0.7rem]
                     text-[#888899] hover:text-[#00ffff] transition-colors"
        >
          ← BACK
        </button>
      </div>

      <Footer />
    </div>
  );
}
