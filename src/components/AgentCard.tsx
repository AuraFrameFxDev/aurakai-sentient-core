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
  image?: string;
}

const AgentCard = ({ 
  name, 
  description, 
  color, 
  size = "normal",
  fusionAbilities,
  activationPoints,
  delay = 0,
  image
}: AgentCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

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
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="relative h-full cursor-pointer perspective-1000"
      style={{ 
        perspective: "1000px",
        animationDelay: `${delay}s`,
      }}
      onClick={handleClick}
    >
      <div 
        className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)",
        }}
      >
        {/* Front Face */}
        <Card
          className={`
            glass-hologram absolute inset-0
            animate-fade-in
            ${size === "large" ? "p-8" : "p-6"}
            bg-card/20 backdrop-blur-xl
            transition-all duration-300
            hover:-translate-y-2 hover:scale-[1.02]
            flex flex-col justify-center
            border-2 ${colorClasses[color]}
          `}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            boxShadow: `0 0 20px hsl(var(--${color === "pink" ? "accent" : color === "cyan" ? "secondary" : "primary"}) / 0.4), inset 0 0 30px hsl(var(--${color === "pink" ? "accent" : color === "cyan" ? "secondary" : "primary"}) / 0.1)`,
          }}
        >
          <CardContent className="p-0 text-center relative z-10">
            <h3 
              className={`
                font-euronism font-bold ${textColorClasses[color]} 
                ${size === "large" ? "text-5xl md:text-6xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-[0.2em]" : "text-2xl tracking-[0.15em]"}
                animate-neon-glow
              `}
              style={{
                textShadow: size === "large" ? "0 0 30px currentColor, 0 0 60px currentColor" : "0 0 15px currentColor, 0 0 30px currentColor"
              }}
            >
              {name}
            </h3>
            <p className="mt-4 text-sm md:text-base text-foreground/90">
              {description}
            </p>

            {fusionAbilities && (
              <div className="glass-hologram mt-4 p-3 rounded-xl bg-accent/5 backdrop-blur-sm">
                <h4 className="font-euronism text-xs font-bold text-accent mb-2 tracking-wider">
                  FUSION.ABILITIES
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
              <div className="glass-hologram mt-4 p-3 rounded-xl bg-accent/5 backdrop-blur-sm">
                <h4 className="font-euronism text-xs font-bold text-accent mb-2 tracking-wider">
                  ACTIVATION.POINTS
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

        {/* Back Face */}
        {image && (
          <Card
            className={`
              glass-hologram absolute inset-0
              ${size === "large" ? "p-2" : "p-2"}
              bg-card/20 backdrop-blur-xl
              overflow-hidden
              border-2 ${colorClasses[color]}
            `}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              boxShadow: `0 0 20px hsl(var(--${color === "pink" ? "accent" : color === "cyan" ? "secondary" : "primary"}) / 0.4), inset 0 0 30px hsl(var(--${color === "pink" ? "accent" : color === "cyan" ? "secondary" : "primary"}) / 0.1)`,
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-lg"
                style={{
                  filter: "brightness(0.9) contrast(1.1)",
                }}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"
              />
              <h3 
                className={`
                  absolute bottom-4 left-0 right-0 text-center
                  font-euronism font-bold ${textColorClasses[color]} 
                  ${size === "large" ? "text-4xl tracking-[0.2em]" : "text-xl tracking-[0.15em]"}
                `}
                style={{
                  textShadow: "0 0 20px currentColor, 0 0 40px currentColor, 0 2px 10px rgba(0,0,0,0.8)"
                }}
              >
                {name}
              </h3>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AgentCard;
