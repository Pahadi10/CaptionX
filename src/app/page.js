import DemoSection from "@/components/DemoSection";
import HeroText from "@/components/HeroText";
import UploadForm from "@/components/UploadForm";
export default function Home() {
  return (
    <>
      <HeroText
        h1Text={"Create the eye catching captions for your videos"}
        h2Text={"Upload your shorts and reels, we will do rest for you"}
      />
      <div className="text-center">
        <UploadForm />
      </div>
      <DemoSection />
    </>
  );
}
