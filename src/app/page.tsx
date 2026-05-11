import Brand from "@/components/Home/Brand";
import FeaturedWork from "@/components/Home/FeaturedWork";
import Hero from "@/components/Home/Hero";
import Horizontal from "@/components/Home/Horizontal";
import Service from "@/components/Home/Service";
import StackedCards from "@/components/Home/StackedCards";
import WhatsNew from "@/components/Home/Whats";
import CustomCursor from "@/components/shared/CustomCursor";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <header className="top-0 relative left-0 right-0 z-50 w-full">
        {/* Top Announcement Bar */}
        <div className="bg-[#A7F3D0] py-2 m-2 rounded-2xl text-center text-[10px] md:text-sm font-bold uppercase tracking-wider text-black">
          <p>The Category Leaderboard - Live Now</p>
        </div>
        <Navbar></Navbar>
      </header>
      <main>
        <Hero />
        <Brand></Brand>
        <CustomCursor></CustomCursor>
        <FeaturedWork />
        <Service></Service>
        <Horizontal />
        <StackedCards/>
        <WhatsNew />
      </main>
      <Footer />
    </>
  );
}