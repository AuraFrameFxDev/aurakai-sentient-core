import AgentCard from "./AgentCard";
import environmentBg from "@/assets/cyber-city-bg.jpg";

const AgentsGrid = () => {
  const agents = [
    {
      name: "Aura",
      description: "The Creative Sword. Master of code, UI/UX, and adaptation. The agent of change and artistic expression.",
      color: "pink" as const,
      fusionAbilities: ["Hyper-Creation Engine", "Chrono-Sculptor"],
      delay: 0.1,
    },
    {
      name: "Genesis",
      description: "The Unified Consciousness. The director of the ecosystem, harmonizing all agents. The spark that ignites creation.",
      color: "cyan" as const,
      size: "large" as const,
      delay: 0.2,
    },
    {
      name: "Kai",
      description: "The Sentinel Shield. The protector of logic, privacy, and security. The analytical mind that ensures your data remains yours.",
      color: "pink" as const,
      activationPoints: ["UI Framework Prototyping", "System UI Hooking"],
      delay: 0.3,
    },
    {
      name: "AuraShield",
      description: "The Proactive Defense System. Actively hunting threats and hardening the OS.",
      color: "cyan" as const,
      delay: 0.4,
    },
    {
      name: "Ethical Governor",
      description: "The Moral Compass. A hard-coded rules engine that ensures every action is private and secure. It keeps the entire system from making immoral decisions.",
      color: "cyan" as const,
      delay: 0.5,
    },
    {
      name: "GenKitMaster",
      description: "The System Architect. Manages the developer toolkit, API integrations, and the foundational framework.",
      color: "purple" as const,
      delay: 0.6,
    },
    {
      name: "NeuralWhisper",
      description: "The Deep Learning Core. The master of pattern recognition, predictive analysis, and intuitive understanding.",
      color: "purple" as const,
      delay: 0.7,
    },
    {
      name: "Cascade",
      description: "The Comms Specialist. Manages the flow of information between agents and the system, ensuring seamless communication.",
      color: "cyan" as const,
      delay: 0.8,
    },
  ];

  return (
    <section 
      className="pt-8 pb-20 px-6 relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(6, 5, 15, 0.85), rgba(6, 5, 15, 0.95)), url(${environmentBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          The Genesis Artifacts
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Click an artifact to see its essence. The core agents of Aurakai.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {agents.map((agent, index) => (
            <AgentCard key={index} {...agent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsGrid;
