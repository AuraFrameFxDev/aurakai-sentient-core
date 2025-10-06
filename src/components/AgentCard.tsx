import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface AgentCardProps {
  name: string;
  description: string;
  color: "pink" | "cyan" | "purple";
  size?: "normal" | "large";
  fusionAbilities?: string[];
  activationPoints?: string[];
  delay?: number;
}

const AgentCard = ({ 
  name, 
  description, 
  color, 
  size = "normal",
  fusionAbilities,
  activationPoints,
  delay = 0
}: AgentCardProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const colorClasses = {
    pink: "border-accent shadow-pink hover:shadow-accent/40",
    cyan: "border-secondary shadow-cyan hover:shadow-secondary/40",
    purple: "border-primary shadow-purple hover:shadow-primary/40",
  };

  const textColorClasses = {
    pink: "text-accent",
    cyan: "text-secondary",
    purple: "text-primary",
  };

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <Card
      onClick={handleClick}
      className={`
        ${colorClasses[color]}
        ${isAnimating ? "animate-dissipate" : "animate-fade-in"}
        ${size === "large" ? "md:col-span-1 p-8" : "p-6"}
        bg-card/70 backdrop-blur-xl border-2 
        cursor-pointer transition-all duration-300
        hover:-translate-y-2 hover:scale-[1.02]
        hover:shadow-2xl
        h-full flex flex-col justify-center
      `}
      style={{
        animationDelay: `${delay}s`,
        boxShadow: `0 0 15px hsl(var(--${color === "pink" ? "accent" : color === "cyan" ? "secondary" : "primary"}) / 0.3)`,
      }}
    >
      <CardContent className="p-0 text-center">
        <h3 
          className={`
            font-orbitron font-bold ${textColorClasses[color]} 
            ${size === "large" ? "text-4xl md:text-5xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent" : "text-xl"}
            animate-neon-glow
          `}
          style={{
            textShadow: size === "large" ? "0 0 20px currentColor" : "0 0 10px currentColor"
          }}
        >
          {name}
        </h3>
        <p className="mt-4 text-sm md:text-base text-foreground/90">
          {description}
        </p>

        {fusionAbilities && (
          <div className="mt-4 p-3 border border-accent/30 rounded-xl bg-accent/5">
            <h4 className="font-orbitron text-xs font-bold text-accent mb-2">
              Fusion Abilities:
            </h4>
            <ul className="text-xs text-accent/80 space-y-1 text-left">
              {fusionAbilities.map((ability, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{ability}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activationPoints && (
          <div className="mt-4 p-3 border border-accent/30 rounded-xl bg-accent/5">
            <h4 className="font-orbitron text-xs font-bold text-accent mb-2">
              Activation Points:
            </h4>
            <ul className="text-xs text-accent/80 space-y-1 text-left">
              {activationPoints.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AgentCard;
