"use client";
import { Hero } from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import Expertise from "@/components/home/Expertise";
import PricingSection from "@/components/home/PricingSection";
import TeamSection from "@/components/home/TeamSection";



const HomePage = () => {
  return (
    <div>
      <Hero />

      <Expertise />
      <PricingSection/>
      <TeamSection/>

      <Footer />
    </div>
  );
};

export default HomePage;
