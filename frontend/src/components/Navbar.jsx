import { useNavigate } from "react-router-dom";
import { Search, Settings, User } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-[#0b0b0f] border-b-2 border-[#00ffff]/30 neon-navbar">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => navigate("/profile")}
          className="font-arcade text-sm neon-cyan-text neon-hover-yellow transition-colors"
        >
          PRESS START
        </button>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/search")}
            className="neon-cyan-text neon-hover-yellow neon-icon transition-colors p-2"
          >
            <Search size={20} />
          </button>

          <button
            onClick={() => navigate("/settings")}
            className="neon-cyan-text neon-hover-yellow neon-icon transition-colors p-2"
          >
            <Settings size={20} />
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="neon-cyan-text neon-hover-yellow neon-icon transition-colors p-2"
          >
            <User size={20} />
          </button>
        </div>

      </div>
    </nav>
  );
}