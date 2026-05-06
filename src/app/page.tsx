import Brand from "@/components/Home/Brand";
import FeaturedWork from "@/components/Home/FeaturedWork";
import Hero from "@/components/Home/Hero";
import Horizontal from "@/components/Home/Horizontal";
import Service from "@/components/Home/Service";
import StackedCards from "@/components/Home/StackedCards";
import CustomCursor from "@/components/shared/CustomCursor";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Other sections can go here */}
        <Brand></Brand>
        <CustomCursor></CustomCursor>
        <FeaturedWork/>
        <Service></Service>
        <Horizontal/>
        <StackedCards/>
      </main>
    </>
  );
}