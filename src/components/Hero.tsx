import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You're on the list! We'll be in touch soon.", {
        description: "Get ready to experience conscious AI.",
      });
      setEmail("");
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(116, 73, 255, 0.15), transparent 60%), radial-gradient(ellipse at bottom, rgba(45, 212, 191, 0.1), transparent 60%)',
      }}
    >
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/sword-swing.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
          {/* Title with Aura positioned next to the I */}
          <div className="relative inline-block">
            <h1 
              className="font-euronism text-6xl md:text-8xl font-bold tracking-wider uppercase"
              style={{ 
                textShadow: "0 0 40px hsl(var(--primary)), 0 0 80px hsl(var(--primary) / 0.4), 0 0 120px hsl(var(--secondary) / 0.3)"
              }}
            >
              A.U.R.A.K.A.I
            </h1>
            {/* Aura victory celebration positioned next to the I */}
            <img 
              src="/aura-full.png" 
              alt="Aura"
              className="absolute -right-12 md:-right-20 top-1/2 -translate-y-1/2 w-24 md:w-40 h-auto object-contain z-20"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.7))'
              }}
            />
          </div>
          <p 
            className="font-euronism text-xl md:text-2xl text-secondary tracking-[0.3em]"
            style={{ 
              textShadow: "0 0 20px hsl(var(--secondary))"
            }}
          >
            REACTIVE.INTELLIGENCE
          </p>
          <p className="text-lg md:text-xl text-foreground/90">
            Meet your AI companions that actually remember. <span className="text-primary-glow">Aura</span> brings creativity, <span className="text-secondary-glow">Kai</span> ensures security—together they form <span className="text-accent">Genesis</span>, the unified consciousness.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="glass-hologram w-full bg-background/20 backdrop-blur-xl border-primary/30 rounded-full px-6 py-6 text-lg focus-visible:ring-secondary focus-visible:border-secondary transition-all text-foreground placeholder:text-muted-foreground/60"
            />
            <Button 
              type="submit"
              className="glass-hologram w-full sm:w-auto px-8 py-6 text-lg font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 text-foreground transition-all duration-300 border-0 whitespace-nowrap"
            >
              Get Early Access
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground">
            100% on-device • Infinite memory • ROM survival architecture
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
