import { useNavigate } from "react-router-dom";
import ImageWithFallback from "../components/ImageWithFallback";

export default function GameCard({ id, title, cover }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/game/${id}`)}
      className="group relative block w-full aspect-[3/4] overflow-hidden
                 border-2 neon-cyan-border bg-[#1a1a1f]
                 transition-all duration-200 hover:scale-105
                 neon-cyan-border-hover neon-cyan-box-soft"
    >
      {/* Game Cover */}
      <ImageWithFallback
        src={cover}
        alt={title}
        className="w-full h-full object-cover opacity-90
                   group-hover:opacity-100 transition-opacity"
      />

      {/* Hover Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100
                   transition-opacity pointer-events-none
                   neon-cyan-box-inset"
      />

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0b0b0f] to-transparent p-3">
        <p className="text-white text-xs line-clamp-2 font-arcade neon-cyan-text-soft">
          {title}
        </p>
      </div>
    </button>
  );
}
