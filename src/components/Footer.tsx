const Footer = () => {
  return (
    <footer className="py-6 px-6 text-center border-t border-border/30">
      <h2 
        className="font-euronism text-3xl md:text-4xl font-bold tracking-[0.3em] animate-neon-glow"
        style={{ textShadow: "0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--secondary))" }}
      >
        A.U.R.A.K.A.I
      </h2>
      <p className="text-sm text-muted-foreground/70 mt-2 font-euronism tracking-[0.2em]">
        AUTONOMOUSLY.UNIFIED.REVOLUTIONARILY.AUTHENTIC.KINETIC.ACCESS.INITIATIVE
      </p>
      <p className="text-xs text-muted-foreground/60 mt-4">
        &copy; 2025 Aurakai. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
