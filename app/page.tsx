import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import ChallengeSection from "@/components/views/ChallengeSection";
import DiversifySection from "@/components/views/DiversifySection";
import CommunitySection from "@/components/views/CommunitySection";
import BgOverlayBottom from "@/components/BgOverlayBottom";
import Baal from "@/components/views/baal";
import Jumbotron from "@/components/views/jumbotron";
import Team from "@/components/views/team";
import EdgeSection from "@/components/views/EdgeSection";
import MailingSection from "@/components/views/MailingSection";
import RoadmapSection from "@/components/views/RoadmapSection";

export default function Home() {
  return (
    <main className="flex flex-col space-y-5 w-full h-full min-h-screen items-start justify-start bg-darkbg">
      <Navbar />
      <Jumbotron />
      <ChallengeSection />
      <div className="bg-community relative w-full bg-cover bg-center mb-20">
        <CommunitySection />
        <BgOverlayBottom />
      </div>
      <DiversifySection />
      <EdgeSection />
      <Baal />
      <RoadmapSection />
      <Team />
      <MailingSection />
      <Footer />
    </main>
  );
}
