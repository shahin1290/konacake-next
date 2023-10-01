"use client";
import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Explore from "./components/Explore";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="">
     
        <HeroSection />
        <Explore />
        <ProjectsSection />
  
      <Footer />
    </main>
  );
}
