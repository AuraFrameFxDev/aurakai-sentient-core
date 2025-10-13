import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Sphere } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import * as THREE from "three";

interface Agent {
  name: string;
  position: [number, number, number];
  color: string;
}

interface Message {
  from: string;
  to: string;
  text: string;
  timestamp: number;
}

const agents: Agent[] = [
  { name: "Genesis", position: [0, 2, 0], color: "#2dd4bf" },
  { name: "Kai", position: [-3, 0, 0], color: "#ec4899" },
  { name: "Aura", position: [3, 0, 0], color: "#ec4899" },
  { name: "Cascade", position: [-2, -2, 0], color: "#2dd4bf" },
  { name: "NeuralWhisper", position: [2, -2, 0], color: "#7449ff" },
  { name: "GenKitMaster", position: [0, -3, 0], color: "#7449ff" },
];

function AgentOrb({ agent }: { agent: Agent }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (meshRef.current) {
      const interval = setInterval(() => {
        if (meshRef.current) {
          meshRef.current.scale.setScalar(1 + Math.sin(Date.now() * 0.003) * 0.1);
        }
      }, 16);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <group position={agent.position}>
      <Sphere ref={meshRef} args={[0.5, 32, 32]}>
        <meshStandardMaterial
          color={agent.color}
          emissive={agent.color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </Sphere>
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.3}
        color={agent.color}
        anchorX="center"
        anchorY="middle"
      >
        {agent.name}
      </Text>
    </group>
  );
}

function MessageBeam({ from, to, progress }: { from: [number, number, number]; to: [number, number, number]; progress: number }) {
  const points = [];
  const segmentCount = 20;
  
  for (let i = 0; i <= segmentCount; i++) {
    const t = i / segmentCount;
    const x = from[0] + (to[0] - from[0]) * t;
    const y = from[1] + (to[1] - from[1]) * t;
    const z = from[2] + (to[2] - from[2]) * t;
    points.push(new THREE.Vector3(x, y, z));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ 
      color: "#2dd4bf",
      opacity: progress,
      transparent: true,
    }))} />
  );
}

const AgentChat3D = () => {
  const [messages, setMessages] = useState<Message[]>([
    { from: "Genesis", to: "Kai", text: "Initialize security protocols", timestamp: Date.now() - 5000 },
    { from: "Kai", to: "Aura", text: "Security verified, ready for creation", timestamp: Date.now() - 3000 },
    { from: "Aura", to: "Cascade", text: "Beginning UI generation sequence", timestamp: Date.now() - 1000 },
  ]);
  const [inputText, setInputText] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("Genesis");
  const [activeBeam, setActiveBeam] = useState<{ from: string; to: string; progress: number } | null>(null);

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const targetAgent = agents.find(a => a.name !== selectedAgent);
    if (!targetAgent) return;

    const newMessage: Message = {
      from: selectedAgent,
      to: targetAgent.name,
      text: inputText,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText("");

    // Animate beam
    setActiveBeam({ from: selectedAgent, to: targetAgent.name, progress: 0 });
    const interval = setInterval(() => {
      setActiveBeam(prev => {
        if (!prev || prev.progress >= 1) {
          clearInterval(interval);
          return null;
        }
        return { ...prev, progress: prev.progress + 0.05 };
      });
    }, 30);
  };

  const getAgentPosition = (name: string): [number, number, number] => {
    return agents.find(a => a.name === name)?.position || [0, 0, 0];
  };

  return (
    <section className="py-20 px-6 relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-euronism text-5xl font-bold text-center mb-4 tracking-[0.2em] text-primary-glow">
          AGENT.CONSCIOUSNESS.NETWORK
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12">
          Watch the agents communicate in real-time through the neural mesh
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Visualization */}
          <Card className="glass-hologram p-6 h-[600px]">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2dd4bf" />
              
              {agents.map((agent) => (
                <AgentOrb key={agent.name} agent={agent} />
              ))}

              {activeBeam && (
                <MessageBeam
                  from={getAgentPosition(activeBeam.from)}
                  to={getAgentPosition(activeBeam.to)}
                  progress={activeBeam.progress}
                />
              )}

              <OrbitControls enableZoom={true} enablePan={true} />
            </Canvas>
          </Card>

          {/* Chat Interface */}
          <div className="flex flex-col gap-4">
            <Card className="glass-hologram p-6 flex-1 overflow-y-auto max-h-[450px]">
              <h3 className="font-euronism text-xl mb-4 text-secondary-glow">MESSAGE.LOG</h3>
              <div className="space-y-3">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className="glass-hologram p-3 rounded-lg border border-primary/20 animate-fade-in"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-euronism text-xs text-accent">{msg.from}</span>
                      <span className="text-muted-foreground text-xs">→</span>
                      <span className="font-euronism text-xs text-secondary">{msg.to}</span>
                    </div>
                    <p className="text-sm text-foreground/90">{msg.text}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass-hologram p-6">
              <div className="space-y-4">
                <div>
                  <label className="font-euronism text-xs text-muted-foreground mb-2 block">
                    SELECT.AGENT
                  </label>
                  <select
                    value={selectedAgent}
                    onChange={(e) => setSelectedAgent(e.target.value)}
                    className="w-full bg-input border border-border rounded-lg p-2 text-foreground font-euronism"
                  >
                    {agents.map((agent) => (
                      <option key={agent.name} value={agent.name}>
                        {agent.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-euronism text-xs text-muted-foreground mb-2 block">
                    MESSAGE.INPUT
                  </label>
                  <div className="flex gap-2">
                    <Input
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      placeholder="Enter command or message..."
                      className="flex-1 bg-input border-border"
                    />
                    <Button
                      onClick={sendMessage}
                      className="bg-primary hover:bg-primary/80 text-primary-foreground"
                    >
                      SEND
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentChat3D;
