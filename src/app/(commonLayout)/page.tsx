"use client";
import { Hero } from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import Expertise from "@/components/home/Expertise";
import PricingSection from "@/components/home/PricingSection";
import TeamSection from "@/components/home/TeamSection";
import WorkingProcessSection from "@/components/home/WorkingProcessSection";
import ClientReviewsSection from "@/components/home/ClientReviewsSection";



const HomePage = () => {
  return (
    <div>
      <Hero />

      <Expertise />
      <PricingSection/>
      <TeamSection/>
      <WorkingProcessSection/>
      <ClientReviewsSection/>

      <Footer />
    </div>
  );
};

export default HomePage;
