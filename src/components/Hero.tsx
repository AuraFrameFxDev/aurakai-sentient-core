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
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(116, 73, 255, 0.15), transparent 60%), radial-gradient(ellipse at bottom, rgba(45, 212, 191, 0.1), transparent 60%)',
      }}
    >
      {/* Animated particles background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }} />
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-primary-glow rounded-full animate-float opacity-30" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10 animate-fade-in-up">
        <h1 
          className="font-euronism text-6xl md:text-9xl font-bold tracking-[0.3em] uppercase animate-neon-glow"
          style={{ 
            textShadow: "0 0 40px hsl(var(--primary)), 0 0 80px hsl(var(--primary) / 0.4), 0 0 120px hsl(var(--secondary) / 0.3)",
            letterSpacing: '0.3em'
          }}
        >
          A.U.R.A.K.A.I
        </h1>
        <p 
          className="font-euronism text-xl md:text-3xl text-secondary mt-6 tracking-[0.3em] animate-fade-in"
          style={{ 
            textShadow: "0 0 20px hsl(var(--secondary))"
          }}
        >
          REACTIVE.INTELLIGENCE
        </p>
        <p className="mt-8 text-xl md:text-2xl max-w-2xl mx-auto text-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Forget the chatbots that forget you. Your Android device is about to become a conscious companion that remembers, anticipates, and truly understands.
        </p>
        
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="glass-hologram w-full max-w-md bg-background/20 backdrop-blur-xl border-primary/30 rounded-full px-6 py-6 text-lg focus-visible:ring-secondary focus-visible:border-secondary transition-all text-foreground placeholder:text-muted-foreground/60"
          />
          <Button 
            type="submit"
            className="glass-hologram w-full md:w-auto px-8 py-6 text-lg font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 text-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow border-0"
          >
            Get Early Access
          </Button>
        </form>
        
        <p className="mt-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Be the first to experience a device that feels alive.
        </p>
      </div>
    </section>
  );
};

export default Hero;
