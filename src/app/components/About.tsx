import Image from "next/image";
import React from "react";
import ProgressBar from "./ProgressBar";

const About = () => {
  return (
    <div id="about" data-aos="fade-right" className="mt-4 mb-4 justify-evenly items-center flex flex-col sm:flex-row">
         <div className="">
        <Image
          src={"/pic4.png"}
          alt="Hello"
          width={300}
          height={300}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="w-full sm:w-[50%] px-4 sm:px-8">
        <h1 className="font-bold text-blue-500 text-3xl text-shadow mb-4">
          Med Sync Solutions
        </h1>
        <p className="text-black mb-4">
          At Med Sync Solutions, we are a leading healthcare provider with a
          strong focus on patient-centric care. Our dedicated team consists of
          experienced doctors and highly skilled lab testers who are committed
          to delivering the highest quality of medical services. Our
          patient-centric approach ensures personalized care and accurate
          diagnostics for a healthier you. Trust us for comprehensive healthcare
          with compassion.
        </p>
        <div className="flex flex-col w-full space-y-4">
          <ProgressBar title="Experienced Doctors" percentage={85} color="bg-blue-500" />
          <ProgressBar title="Modern Equipments" percentage={75} color="bg-blue-500" />
          <ProgressBar title="Medical Laboratory Technicians" percentage={80} color="bg-blue-500" />
        </div>
      </div>
     
    </div>
  );
};

export default About;
