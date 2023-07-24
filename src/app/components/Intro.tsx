import React from "react";
const Intro = () => {
  return (
    <div>
      <div
        data-aos="fade-right"
        className="pb-10 md:pb-20 intro-div text-white flex justify-center items-start flex-col min-h-screen"
      >
        <h1 className="mx-4 md:mx-32 text-2xl md:text-4xl lg:text-5xl xl:text-5xl">
          Making Health
        </h1>
        <h1 className="mx-4 md:mx-32 text-2xl md:text-4xl lg:text-5xl xl:text-5xl pb-1">
          Care Better Together
        </h1>
        <p className="mx-4 md:mx-32 text-lg md:text-2xl lg:text-3xl font-bold ">
          Our hospital website provides convenient online appointment booking,
        </p>
        <p className="mx-4 md:mx-32 text-lg md:text-2xl lg:text-3xl font-bold ">
          access to medical records, and detailed information on our specialized
          departments.
        </p>
      </div>
    </div>
  );
};

export default Intro;
