import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import Jumbotron from "@/components/views/jumbotron";
import ChallengeSection from "@/components/views/ChallengeSection";
import DiversifySection from "@/components/views/DiversifySection";

export default function Home() {
  return (
    <main className="flex flex-col space-y-5 w-full h-full min-h-screen items-start justify-start bg-darkbg">
      <Navbar />
      <div className="bg-hero-btc w-full bg-cover bg-center rounded-b-[100px] bg-center pt-24">
        <Jumbotron />
      </div>
      <ChallengeSection />
      <DiversifySection />
      <Footer />
    </main>
  );
}
