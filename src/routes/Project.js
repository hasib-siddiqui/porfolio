import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";
function project() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Projects." text="Some Of My Most Recnet Works" />
      <Work />
      <PricingCard />

      <Footer />
    </div>
  );
}

export default project;
