import React from "react";
import img3 from "../assets/img-3.png";
import teamImg from "../assets/people.jpeg";

const WhoWeAre = () => {
  return (
    <section className="px-4 md:px-6 lg:px-6 py-16 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        <div
          className="w-full lg:w-1/3 md:w-1/2 relative rounded-3xl overflow-hidden h-[350px] max-h-[350px] bg-cover bg-center flex flex-col justify-between p-8 text-white"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <p className="text-xs uppercase tracking-widest z-10">
            Our Company <br /> In Numbers
          </p>

          <div className="flex gap-10 z-10">
            <div>
              <h2 className="text-3xl font-bold mb-1">150+</h2>
              <p className="text-sm">Furniture Suppliers</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-1">15+</h2>
              <p className="text-sm">Years of Industry Experience</p>
            </div>
          </div>

          <div className="absolute inset-0 bg-black/10 rounded-3xl z-0" />
        </div>

        <div
          className="w-full md:w-2/3 bg-[#e8dfd6] rounded-3xl overflow-hidden flex h-[350px] max-h-[350px]"
          //   style={{ minHeight: "350px" }}
        >
          <div className="flex-1 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-4">
              Who <span className="text-[#a0784e]">We</span> Are
            </h2>
            <p className="text-gray-700 mb-4 text-sm md:text-base">
              At Compatto, we understand the challenges of creating exceptional
              spaces that blend elegance, quality, and functionality.
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              As Greece’s premier furniture solutions provider, we’ve made it
              our mission to simplify the furnishing process, ensuring that
              every project is executed flawlessly from initial consultation to
              final installation.
            </p>
          </div>

          <div className="relative hidden lg:block w-full md:w-[300px] h-[200px] md:h-full flex-shrink-0">
            <div className="absolute inset-0 bg-[#f9f7f4] rounded-l-[160px] shadow-inner p-5 z-0" />

            <div className="absolute inset-0 z-10">
              <img
                src={teamImg}
                alt="Team"
                className="w-full h-full object-cover object-center rounded-l-[1540px] max-h-[350px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
