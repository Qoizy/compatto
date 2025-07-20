import React from "react";
import fur1 from "../assets/fur-1.png";
import fur2 from "../assets/fur-2.png";
import fur3 from "../assets/fur-3.png";
import fur4 from "../assets/fur-4.png";
import fur5 from "../assets/fur-1.png";

const steps = [
  {
    step: "1",
    title: "Consultation",
    description:
      "We begin with a conversation to understand your vision, style, and goals.",
    image: fur1,
  },
  {
    step: "2",
    title: "Planning",
    description:
      "We develop a detailed furnishing plan tailored to your space and budget.",
    image: fur2,
  },
  {
    step: "3",
    title: "Selection",
    description:
      "Choose from a curated selection of furniture, materials, and finishes.",
    image: fur3,
  },
  {
    step: "4",
    title: "Delivery",
    description:
      "We handle all logistics and ensure timely, damage-free delivery.",
    image: fur4,
  },
  {
    step: "5",
    title: "After-Sales Support and Maintenance",
    description:
      "Our commitment to your satisfaction extends beyond the final installation. We conduct a thorough final walkthrough to ensure your satisfaction, and also offer comprehensive after-sales support including warranty claims, maintenance, and care instructions.",
    image: fur5,
  },
];

const HowWeSimplify = () => {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-20 relative z-10">
      <div className="max-w-5xl mx-auto text-start mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c]">
          How We <span className="text-[#a0784e]">Simplify</span> Your
          <br className="md:block hidden" /> Furnishing Experience
        </h2>
      </div>

      <div className="relative h-auto md:h-[550px] max-w-5xl mx-auto">
        {steps.map((step, index) => {
          const zIndex = 10 + index;
          const isTop = index === steps.length - 1;
          const yOffset = index * 12;

          return (
            <div
              key={index}
              className={`md:absolute relative w-full rounded-2xl bg-white shadow-xl transition-all duration-500 ${
                isTop ? "opacity-100" : "opacity-60"
              }`}
              style={{
                transform: `translateY(${yOffset}px)`,
                zIndex,
              }}
            >
              <div className="flex flex-col md:flex-row h-auto md:h-full">
                <div className="w-full md:w-1/2 flex flex-col justify-between p-6">
                  <div>
                    <p className="text-5xl text-[#a0784e] font-semibold mb-4 leading-snug tracking-wide">
                      {step.step}
                    </p>
                  </div>
                  <div className="">
                    <h3 className="text-xl md:text-3xl font-semibold text-[#1c1c1c] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>

                <div className="hidden md:block w-1/2 h-[380px]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowWeSimplify;
