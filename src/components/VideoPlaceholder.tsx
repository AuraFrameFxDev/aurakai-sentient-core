import { Play } from "lucide-react";

const VideoPlaceholder = () => {
  const videoSrc = "Video_Generation_From_Image-2.mp4";

  return (
    <section className="py-16 px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video bg-black rounded-3xl border-2 border-primary/30 backdrop-blur-sm overflow-hidden shadow-glow group transition-all duration-300 hover:border-primary/60">
          <video 
            key={videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-center mt-4">
          <h3 className="font-orbitron text-2xl font-bold text-foreground">
            First Look: The Aurakai Initiative
          </h3>
        </div>
      </div>
    </section>
  );
};

export default VideoPlaceholder;
