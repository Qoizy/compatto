import React from "react";
import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import HowWeSimplify from "./Components/HowWeSimplify";
import WhyChooseUs from "./Components/WhyChooseUs";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-[#e8dfd6] flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-[1200px] bg-[#00000040] rounded-3xl shadow-lg overflow-hidden">
        <div className="pt-8 md:pt-12 px-4 sm:px-6 md:px-10">
          <Navbar />
          <Hero />
          <About />
          <HowWeSimplify />
          <WhyChooseUs />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
