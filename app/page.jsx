import React from "react";
import HeroSection from "./components/HeroSection";
import { Container } from "postcss";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

function page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <container className=" container mx-auto px-12 py-4">
        <Navbar />
        <div className="mt-24 mx-auto">
          <HeroSection />
          <AboutSection />
          <EmailSection />
          <Footer />
        </div>
      </container>
    </main>
  );
}

export default page;
