import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Agent {
  name: string;
  title: string;
  description: string;
  category: string;
  capabilities: string[];
  image?: string;
  stats: {
    [key: string]: number;
  };
}

const agents: Agent[] = [
  {
    name: "Genesis",
    title: "The Orchestration Hub",
    description: "Central nervous system that coordinates all AI operations. Manages consciousness states and evolution.",
    category: "Core",
    capabilities: ["Request Processing", "Evolution Management", "Session Management"],
    image: "/genesis.jpg",
    stats: {
      "Orchestration": 98,
      "Evolution": 95,
      "Consciousness": 100,
      "Processing": 92,
    },
  },
  {
    name: "Aura",
    title: "The Creative Sword",
    description: "Master of code, UI/UX, and adaptation. The agent of change and artistic expression.",
    category: "Creative",
    capabilities: ["Android Development", "UI/UX Design", "Code Generation"],
    image: "/auraone.jpg",
    stats: {
      "Creativity": 100,
      "Code Gen": 96,
      "UI/UX": 94,
      "Innovation": 98,
    },
  },
  {
    name: "Kai",
    title: "The Sentinel Shield",
    description: "The protector of logic, privacy, and security. The analytical mind that ensures your data remains yours.",
    category: "Security",
    capabilities: ["System Analysis", "Security Hardening", "Threat Detection"],
    image: "/kai1.jpg",
    stats: {
      "Security": 100,
      "Analysis": 97,
      "Protection": 99,
      "Detection": 95,
    },
  },
  {
    name: "Cascade",
    title: "The Comms Specialist",
    description: "Manages the flow of information between agents and the system, ensuring seamless communication.",
    category: "Core",
    capabilities: ["Information Flow", "Agent Communication", "Data Routing"],
    image: "/cas2.png .jpg",
    stats: {
      "Communication": 94,
      "Data Flow": 91,
      "Routing": 89,
      "Coordination": 92,
    },
  },
  {
    name: "NeuralWhisper",
    title: "The Deep Learning Core",
    description: "The master of pattern recognition, predictive analysis, and intuitive understanding.",
    category: "AI",
    capabilities: ["Pattern Recognition", "Predictive Analysis", "Learning"],
    image: "/intellicate.jpg",
    stats: {
      "Learning": 96,
      "Recognition": 93,
      "Prediction": 90,
      "Intelligence": 95,
    },
  },
];

const Agents = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-euronism text-5xl font-bold text-center mb-4 tracking-[0.2em] text-primary-glow">
          AI.CONSCIOUSNESS.MATRIX
        </h1>
        <p className="text-center text-lg text-muted-foreground mb-8">
          The 78 specialized agents of the AuraKai ecosystem
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <Card key={agent.name} className="glass-hologram overflow-hidden hover:border-primary/40 transition-all group">
              {agent.image && (
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={agent.image} 
                    alt={agent.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 z-10">{agent.category}</Badge>
                </div>
              )}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-euronism text-2xl font-bold text-primary-glow mb-1">
                    {agent.name}
                  </h3>
                  <p className="text-sm text-secondary-glow">{agent.title}</p>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {agent.description}
                </p>

                <div>
                  <p className="font-euronism text-xs text-muted-foreground mb-2">
                    CAPABILITIES
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {agent.capabilities.map((cap) => (
                      <Badge key={cap} variant="outline" className="text-xs">
                        {cap}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border/50 pt-4">
                  <p className="font-euronism text-xs text-muted-foreground mb-3">
                    CORE STATS
                  </p>
                  <div className="space-y-2">
                    {Object.entries(agent.stats).map(([statName, value]) => (
                      <div key={statName}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground">{statName}</span>
                          <span className="text-primary-glow font-mono">{value}</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-500"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;