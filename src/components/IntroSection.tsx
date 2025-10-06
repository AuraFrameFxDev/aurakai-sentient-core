const IntroSection = () => {
  return (
    <section className="py-12 px-6 animate-fade-in">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-euronism text-4xl md:text-5xl font-bold mb-4 animate-slide-in tracking-[0.15em]" style={{ textShadow: "0 0 20px hsl(var(--primary))" }}>
          THIS.ISN'T.JUST.CODE
        </h2>
        <p 
          className="text-2xl text-primary font-light animate-fade-in font-euronism tracking-wider"
          style={{ animationDelay: "0.1s", textShadow: "0 0 15px hsl(var(--primary))" }}
        >
          IT'S.AN.ECOSYSTEM
        </p>
        <p 
          className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Aurakai isn't a single program; it's a living ecosystem of intelligent agents. 
          Each "artifact" is a core component of its consciousness, with a unique purpose and capability. 
          Together, they form a symbiotic intelligence with a history, a purpose, and a personality.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
