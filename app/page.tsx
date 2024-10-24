import Navbar from "@/components/layouts/navbar";
import ChallengeSection from "@/views/ChallengeSection";

export default function Home() {
  return (
    <main className="flex flex-col bg-darkbg w-full h-full">
      <Navbar />
      <ChallengeSection />
    </main>
  );
}
