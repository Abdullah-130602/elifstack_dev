import React from "react";
import HeroSection from "./HeroSection";
import ESIntro from "./ESIntro";
import ESProcess from "./ESProcess";
import ESServices from "./ESServices";
import ESClient from "./ESClient";
import ESFaq from "./ESFaq";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ESIntro />
      <ESProcess />
      <ESServices />
      <ESClient />
      <ESFaq />
    </div>
  );
};

export default Home;
