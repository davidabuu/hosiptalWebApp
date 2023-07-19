import React from "react";

const Intro = () => {
  return (
    <div>
      <div className=" pb-20 text-white flex justify-center items-start flex-col h-screen">
        <h1 className="mx-32 text-[45px]">Making Health</h1>
        <h1 className="mx-32 text-[45px] pb-2">Care Better Together</h1>
        <p className="mx-32 text-3xl text-white font-bold md:text-2xl  ">
          Our hospital website provides convenient online appointment booking,
        </p>
        <p className="mx-32 text-3xl text-white md:text-2xl font-bold">
          access to medical records, and detailed information on our
          specialized departments.
        </p>
      </div>
    </div>
  );
};

export default Intro;
