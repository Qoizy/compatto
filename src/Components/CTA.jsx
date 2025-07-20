import React from "react";
import call from "../assets/phone-call.jpeg";

const CTA = () => {
  return (
    <section className="px-6 md:px-8 lg:px-12 w-full">
      <div
        className="rounded-2xl bg-cover bg-center bg-no-repeat w-full h-[400px] flex flex-col items-center justify-center text-white px-4 md:px-12 text-center"
        style={{ backgroundImage: `url(${call})` }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#ffffff] mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="text-white-600 mb-8 text-sm md:text-base">
          Let’s bring your vision to life with expert support every step of the
          way.
        </p>
        <a
          href="#"
          className="inline-block bg-[#a0784e] text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#8a623d] transition-colors"
        >
          Book a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default CTA;
