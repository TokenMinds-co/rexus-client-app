import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import Jumbotron from "@/components/views/jumbotron";
import ChallengeSection from "@/components/views/ChallengeSection";
import DiversifySection from "@/components/views/DiversifySection";
import Baal from "@/components/views/baal";

export default function Home() {
  return (
    <main className="flex flex-col space-y-5 w-full h-full min-h-screen items-start justify-start bg-darkbg">
      <Navbar />
      <Jumbotron />
      <ChallengeSection />
      <DiversifySection />
      <Baal />
      <Footer />
    </main>
  );
}
