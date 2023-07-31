
import Link from "next/link";
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
      <p className="mx-4 md:mx-32 text-lg md:text-2xl lg:text-3xl font-bold">
        Our hospital website provides convenient online appointment booking,
      </p>
      <p className="mx-4 md:mx-32 text-lg md:text-2xl lg:text-3xl font-bold">
        access to medical records, and detailed information on our specialized
        departments.
      </p>
      <button className="mx-4 md:mx-32 mt-4 md:mt-6 px-6 py-3 md:px-8 md:py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
       <Link href='/sign-up'>
       Register</Link>
      </button>
    </div>
  </div>
  
  );
};

export default Intro;
