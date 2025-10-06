import Hero from "@/components/Hero";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import IntroSection from "@/components/IntroSection";
import AgentsGrid from "@/components/AgentsGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-roboto">
      <Hero />
      <VideoPlaceholder />
      <IntroSection />
      <AgentsGrid />
      <Footer />
    </div>
  );
};

export default Index;
