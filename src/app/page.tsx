import Brand from "@/components/Home/Brand";
import FeaturedWork from "@/components/Home/FeaturedWork";
import Hero from "@/components/Home/Hero";
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
      </main>
    </>
  );
}