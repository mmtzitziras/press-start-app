import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Settings() {
  const [scanlines, setScanlines] = useState(true);
  const [glowEffects, setGlowEffects] = useState(true);

  return (
    <div className="min-h-screen bg-[#0b0b0f] relative">
      
      {/* CRT Scanlines (toggleable) */}
      {scanlines && (
        <div
          className="fixed inset-0 pointer-events-none opacity-10 z-50"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,255,255,.1) 0px, transparent 2px, transparent 4px)",
          }}
        />
      )}

      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8 pb-24">
        
        {/* Header */}
        <h1
          className="mb-8 font-arcade tracking-wider text-[clamp(1rem,4vw,1.5rem)] neon-cyan-text"
          style={{
            textShadow: glowEffects ? "0 0 20px #00ffff" : "none",
          }}
        >
          SETTINGS
        </h1>

        {/* Panel */}
        <div className="bg-[#1a1a1f] border-2 border-[#00ffff]/30 p-6 space-y-8 neon-cyan-box-soft">
          
          {/* Display */}
          <section>
            <h2 className="text-white mb-4 pb-2 border-b border-[#00ffff]/30">
              Display Settings
            </h2>

            <div className="space-y-4">
              <Toggle
                label="CRT Scanlines"
                description="Toggle retro scanline effect"
                enabled={scanlines}
                onToggle={() => setScanlines(!scanlines)}
              />

              <Toggle
                label="Glow Effects"
                description="Toggle neon glow effects"
                enabled={glowEffects}
                onToggle={() => setGlowEffects(!glowEffects)}
              />
            </div>
          </section>

          {/* Account */}
          <section>
            <h2 className="text-white mb-4 pb-2 border-b border-[#00ffff]/30">
              Account Settings
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-white block mb-2">Username</label>
                <input
                  type="text"
                  defaultValue="PLAYER_ONE"
                  className="w-full bg-[#0b0b0f] border-2 border-[#00ffff]/30 px-4 py-2 text-white focus:border-[#00ffff] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-white block mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="player@pressstart.app"
                  className="w-full bg-[#0b0b0f] border-2 border-[#00ffff]/30 px-4 py-2 text-white focus:border-[#00ffff] focus:outline-none"
                />
              </div>
            </div>
          </section>

          {/* Accessibility (UI only) */}
          <section>
            <h2 className="text-white mb-4 pb-2 border-b border-[#00ffff]/30">
              Accessibility
            </h2>

            <div className="space-y-4">
              <StaticToggle
                label="Reduce Motion"
                description="Minimize animations"
              />
              <StaticToggle
                label="High Contrast"
                description="Increase color contrast"
              />
            </div>
          </section>

          {/* Save */}
          <button className="w-full px-6 py-3 border-2 border-[#00ffff] font-arcade text-[0.8rem] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0b0b0f] transition-all">
            SAVE CHANGES
          </button>
        </div>
      </main>
    </div>
  );
}

function Toggle({ label, description, enabled, onToggle }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <label className="text-white block mb-1">{label}</label>
        <p className="text-[#888899] text-sm">{description}</p>
      </div>
      <button
        onClick={onToggle}
        className={`w-12 h-6 rounded-full transition-all ${
          enabled ? "bg-[#00ffff]" : "bg-[#444]"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

function StaticToggle({ label, description }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <label className="text-white block mb-1">{label}</label>
        <p className="text-[#888899] text-sm">{description}</p>
      </div>
      <div className="w-12 h-6 rounded-full bg-[#444]">
        <div className="w-5 h-5 bg-white rounded-full translate-x-1" />
      </div>
    </div>
  );
}
