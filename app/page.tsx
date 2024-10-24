import Navbar from "@/components/layouts/navbar";
import ChallengeSection from "@/views/ChallengeSection";

export default function Home() {
  return (
    <main className="flex flex-col space-y-5 w-full h-full min-h-screen container mx-auto items-start justify-start bg-darkbg">
      <Navbar />
      <ChallengeSection />
    </main>
  );
}
