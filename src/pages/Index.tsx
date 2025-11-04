import Hero from "@/components/Hero";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import IntroSection from "@/components/IntroSection";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-roboto">
      <Hero />
      <VideoPlaceholder />
      <IntroSection />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <ComparisonTable />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
