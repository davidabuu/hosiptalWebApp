import React from "react";
import Image from "next/image";

interface ServiceProps {
  title: string;
  description: string;
}

const ServiceSection: React.FC<ServiceProps> = ({ title, description }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex services flex-col justify-center items-center">
        <h2 className="text-2xl text-center sm:text-3xl md:text-3xl font-bold mt-4">{title}</h2>
        <p className="text-base sm:text-lg md:text-xl text-center mt-4">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="img2-bg text-white">
      <div className="bg-[#1e4165b9] h-full">
        <h2 className="text-center pt-4 text-3xl sm:text-4xl md:text-5xl">Our Services</h2>
        <div className="h-full flex flex-col sm:flex-row justify-center items-center">
          <ServiceSection
            title="Medical Consultations"
            description="Provide expert medical consultations with qualified doctors specialized in various fields. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada consectetur lacus eget suscipit."
          />

          <ServiceSection
            title="Diagnostic Laboratory Services"
            description="State-of-the-art diagnostic laboratory services with skilled lab testers for accurate and timely test results. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada consectetur lacus eget suscipit."
          />

          <ServiceSection
            title="Health Screenings & Preventive Care"
            description="Offer comprehensive health screenings and preventive care programs to promote overall wellness. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada consectetur lacus eget suscipit."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
