import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import Jumbotron from "@/components/views/jumbotron";
import ChallengeSection from "@/components/views/ChallengeSection";
import DiversifySection from "@/components/views/DiversifySection";
import CommunitySection from "@/components/views/CommunitySection";
import BgOverlayBottom from "@/components/BgOverlayBottom";
import Baal from "@/components/views/baal";

export default function Home() {
  return (
    <main className="flex flex-col space-y-5 w-full h-full min-h-screen items-start justify-start bg-darkbg">
      <Navbar />
      <div className="bg-hero-btc w-full bg-cover rounded-b-[100px] bg-center pt-24">
        <Jumbotron />
      </div>
      <ChallengeSection />
      <div className="bg-community relative w-full bg-cover bg-center mb-20">
        <CommunitySection />
        <BgOverlayBottom />
      </div>
      <DiversifySection />
      <Baal />
      <Footer />
    </main>
  );
}
