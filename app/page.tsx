import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import BgOverlayBottom from "@/components/bottom-overlay";
import Baal from "@/components/views/baal";
import Jumbotron from "@/components/views/jumbotron";
import Team from "@/components/views/team";
import Challenge from "@/components/views/challenge";
import Community from "@/components/views/community";
import Diversify from "@/components/views/diversify";
import Edge from "@/components/views/edge";
import Roadmap from "@/components/views/roadmap";
import Mailing from "@/components/views/mailing";

export default function Home() {
  return (
    <main className="flex flex-col space-y-5 w-full h-full min-h-screen items-start justify-start bg-darkbg">
      <Navbar />
      <Jumbotron />
      <Challenge />
      <div className="bg-community relative w-full bg-cover bg-center mb-20">
        <Community />
        <BgOverlayBottom />
      </div>
      <Diversify />
      <Edge />
      <div className="w-full bg-gold relative rounded-[40px] lg:rounded-[80px] bg-bottom bg-cover">
        <Baal />
      </div>
      <Roadmap />
      <Team />
      <Mailing />
      <Footer />
    </main>
  );
}
