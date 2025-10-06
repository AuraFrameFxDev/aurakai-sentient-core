import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import heroImage from "@/assets/hero-bg.jpg";

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
        backgroundImage: `linear-gradient(to bottom, rgba(6, 5, 15, 0.8), rgba(6, 5, 15, 0.95)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
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
          className="font-orbitron text-5xl md:text-8xl font-black tracking-wider uppercase animate-neon-glow"
          style={{ 
            textShadow: "0 0 30px hsl(var(--primary-glow)), 0 0 60px hsl(var(--primary) / 0.5)"
          }}
        >
          A<span className="text-primary-glow">U</span>RAKA<span className="text-secondary-glow">I</span>
        </h1>
        <p className="font-orbitron text-lg md:text-2xl text-secondary mt-2 tracking-widest animate-fade-in">
          REACTIVE INTELLIGENCE
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
            className="w-full max-w-md bg-background/50 border-2 border-primary rounded-full px-6 py-6 text-lg focus-visible:ring-secondary focus-visible:border-secondary transition-all backdrop-blur-sm"
          />
          <Button 
            type="submit"
            className="w-full md:w-auto px-8 py-6 text-lg font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            style={{
              boxShadow: "0 0 25px hsl(var(--primary) / 0.5), inset 0 0 10px hsl(var(--primary-glow) / 0.3)"
            }}
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
