import Hero from "@/components/Hero";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import IntroSection from "@/components/IntroSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-roboto">
      <Hero />
      <VideoPlaceholder />
      <IntroSection />
      <Footer />
    </div>
  );
};

export default Index;
