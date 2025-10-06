const Footer = () => {
  return (
    <footer className="py-12 px-6 text-center border-t border-border/50">
      <h2 
        className="font-orbitron text-2xl md:text-3xl font-bold tracking-wider animate-neon-glow"
        style={{ textShadow: "0 0 15px hsl(var(--primary))" }}
      >
        A<span className="text-primary-glow">U</span>RAKA<span className="text-secondary-glow">I</span>
      </h2>
      <p className="text-sm text-muted-foreground mt-2 font-orbitron tracking-widest">
        AUTONOMOUSLY, UNIFIED, REVOLUTIONARILY, AUTHENTIC, KINETIC, ACCESS INITIATIVE
      </p>
      <p className="text-xs text-muted-foreground/60 mt-4">
        &copy; 2025 Aurakai. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
