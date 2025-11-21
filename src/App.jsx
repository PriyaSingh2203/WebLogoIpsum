import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import WhyHire from "./components/WhyHire.jsx";
import TechGrid from "./components/TechGrid.jsx";
import HireIndia from "./components/HireIndia.jsx";
import Trust from "./components/Trust.jsx";
import HiringProcess from "./components/HiringProcess.jsx";
import UserGuide from "./components/UserGuide.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <WhyHire />
        <TechGrid />
        <HireIndia />
        <Trust />
        <HiringProcess />
        <UserGuide />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
