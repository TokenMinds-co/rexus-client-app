import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import Jumbotron from "@/components/views/jumbotron";
import ChallengeSection from "@/views/ChallengeSection";

export default function Home() {
  return (
    <main className="flex flex-col space-y-5 w-full h-full min-h-screen items-start justify-start bg-darkbg">
      <Navbar />
      <div className="flex w-full h-full min-h-screen bg-[-900px] md:bg-[-700px] lg:bg-[-400px] bg-cover pt-32 bg-hero-btc rounded-b-[80px]">
        <Jumbotron />
      </div>
      <ChallengeSection />
      <Footer />
    </main>
  );
}
