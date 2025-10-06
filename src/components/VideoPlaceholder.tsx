import { Play } from "lucide-react";

const VideoPlaceholder = () => {
  return (
    <section className="py-16 px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video bg-card/50 rounded-3xl border-2 border-primary/30 flex items-center justify-center backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:shadow-glow group">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 border-2 border-primary mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-glow">
              <Play className="w-8 h-8 text-primary ml-1" />
            </div>
            <h3 className="font-orbitron text-2xl font-bold text-foreground">
              First Look: The Aurakai Initiative
            </h3>
            <p className="text-muted-foreground mt-2">Video coming soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlaceholder;
