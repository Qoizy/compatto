import React from "react";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-4.png";
import img4 from "../assets/fur-4.png";

const WhyChooseUs = () => {
  return (
    <section className="py-2 px-10 text-[#1c1c1e]">
      <h2 className="text-3xl font-semibold mb-8">
        Why <span className="text-[#c9a26b]">Choose</span> Compatto
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-rows-2">
        <div
          className="rounded-2xl bg-cover bg-center bg-no-repeat p-4 text-white flex items-end min-h-[300px]"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="p-4 text-[#B17C56] h-full w-full items-start">
            <h3 className="text-lg font-semibold">End-to-End Solutions</h3>
            <p className="text-sm mt-2">
              We manage every aspect of your furnishing project, saving you time
              and resources.
            </p>
          </div>
        </div>

        <div
          className="rounded-2xl bg-cover bg-center bg-no-repeat p-4 text-white flex items-end min-h-[300px]"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="p-4 text-[#B17C56] w-full h-full items-start">
            <h3 className="text-lg font-semibold">After-Sales Support</h3>
            <p className="text-sm mt-2">
              We are committed to provided ongoing support & after-sales service
              to address any future needs or concerns.
            </p>
          </div>
        </div>

        <div
          className="rounded-2xl bg-cover bg-center bg-no-repeat text-white flex flex-col justify-between lg:row-span-2 min-h-[300px]"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className="p-6 mt-6 rounded-t-2xl">
            <h3 className="text-lg font-semibold">
              No Variety <br /> Restrictions
            </h3>
            <p className="text-sm mt-2">
              We partner with any vendor meeting our quality standards,
              providing the broadest selection of furniture solutions to suit
              your needs and preferences.
            </p>
          </div>
          <div className="p-4 mb-4 text-start rounded-b-2xl">
            <h3 className="text-lg font-semibold">Bespoke Furniture</h3>
            <p className="text-sm mt-2">
              We specialize in sourcing custom-made furniture pieces that
              perfectly match your unique vision and requirements.
            </p>
          </div>
        </div>

        <div
          className="rounded-2xl bg-cover bg-center bg-no-repeat p-4 text-white flex items-end sm:col-span-2 lg:col-span-2 md:col-span-3 min-h-[300px]"
          style={{ backgroundImage: `url(${img4})` }}
        >
          <div className="p-4 w-full h-full flex items-end">
            <div>
              <h3 className="text-lg font-semibold">Superior Quality</h3>
              <p className="text-sm mt-2">
                Our partnerships with the best suppliers grant us access to the
                finest materials, craftmanship, and quality control processess.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
