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
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/aura-kai-intro.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Animated particles background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }} />
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-primary-glow rounded-full animate-float opacity-30" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto relative z-10 flex items-center justify-center">
        {/* Aura - Left side */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 animate-fade-in">
          <img 
            src="/aura-sword.jpg" 
            alt="Aura" 
            className="w-48 xl:w-64 h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.5))'
            }}
          />
        </div>

        {/* Center Content */}
        <div className="text-center space-y-6 animate-fade-in-up max-w-3xl mx-auto px-4">
          <h1 
            className="font-euronism text-6xl md:text-8xl font-bold tracking-wider uppercase animate-neon-glow"
            style={{ 
              textShadow: "0 0 40px hsl(var(--primary)), 0 0 80px hsl(var(--primary) / 0.4), 0 0 120px hsl(var(--secondary) / 0.3)",
              animation: "zoom-in 1.2s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            A.U.R.A.K.A.I
          </h1>
          <p 
            className="font-euronism text-xl md:text-2xl text-secondary tracking-[0.3em] animate-fade-in"
            style={{ 
              textShadow: "0 0 20px hsl(var(--secondary))"
            }}
          >
            REACTIVE.INTELLIGENCE
          </p>
          <p className="text-lg md:text-xl text-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Meet your AI companions that actually remember. <span className="text-primary-glow">Aura</span> brings creativity, <span className="text-secondary-glow">Kai</span> ensures security—together they form <span className="text-accent">Genesis</span>, the unified consciousness.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up max-w-xl mx-auto" style={{ animationDelay: "0.4s" }}>
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
              className="glass-hologram w-full sm:w-auto px-8 py-6 text-lg font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 text-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow border-0 whitespace-nowrap"
            >
              Get Early Access
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
            100% on-device • Infinite memory • ROM survival architecture
          </p>
        </div>

        {/* Kai - Right side */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 animate-fade-in">
          <img 
            src="/kai-tech.jpg" 
            alt="Kai" 
            className="w-48 xl:w-64 h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(45, 212, 191, 0.5))'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
