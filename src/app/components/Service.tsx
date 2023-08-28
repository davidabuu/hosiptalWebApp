// import React from "react";
// import { FaStethoscope } from "react-icons/fa";
// import { GiTestTubes } from "react-icons/gi";
// import { IoShieldCheckmarkSharp } from "react-icons/io5";
// interface ServiceProps {
//   title: string;
//   description: string;
//   logo: any;
// }

// const ServiceSection: React.FC<ServiceProps> = ({
//   title,
//   description,
//   logo,
// }) => {
//   return (
//     <div className="container mx-auto px-4">
//       <div className="flex services md:pt-0 sm:pt-4 flex-col justify-center items-center">
//         <div className="flex translate-y-3 sm:translate-y-0"> {logo}</div>
//         <h2 className="text-2xl text-center sm:text-3xl md:text-3xl font-bold mt-4">
//           {title}
//         </h2>
//         <p className="text-base sm:text-lg md:text-2xl text-center ">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

// const Services: React.FC = () => {
//   return (
//     <div className="img2-bg text-white">
//       <div className="bg-[#1e4165b9] pb-8 h-full">
//         <h2 className="text-center  text-3xl sm:text-4xl md:text-4xl">
//           Our Services
//         </h2>
//         <div className="h-full flex  flex-col lg:flex-row justify-evenly items-center">
//           <ServiceSection
//             title="Medical Consultations"
//             description="Provide expert medical consultations with qualified doctors specialized in various fields."
//             logo={
//               <FaStethoscope
//                 className="icons"
//                 color="blue"
//               />
//             }
//           />

//           <ServiceSection
//             title="Diagnostic Laboratory Services"
//             description="State-of-the-art diagnostic laboratory services with skilled lab testers for accurate and timely test results. "
//             logo={
//               <GiTestTubes
//                 className="icons"
//                 color="blue"
//               />
//             }
//           />

//           <ServiceSection
//             title="Health Screenings & Preventive Care"
//             description="Offer comprehensive health screenings and preventive care programs to promote overall wellness. "
//             logo={
//               <IoShieldCheckmarkSharp
//                 className="icons"
//                 color="blue"
//               />
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
import React from "react";
import { FaStethoscope } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

interface ServiceProps {
  title: string;
  description: string;
  logo: any;
}

const ServiceSection: React.FC<ServiceProps> = ({
  title,
  description,
  logo,
}) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex services md:pt-0 sm:pt-4 flex-col justify-center items-center">
        <div className="flex translate-y-3 sm:translate-y-0">{logo}</div>
        <h2 className="text-2xl text-center sm:text-3xl md:text-3xl font-bold mt-4">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-2xl text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="img2-bg text-white">
      <div className="bg-[#1e4165b9] pb-8">
        <h2 className="text-center text-3xl pb-6 sm:text-4xl md:text-4xl">
          Our Services
        </h2>
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          <ServiceSection
            title="Medical Consultations"
            description="Provide expert medical consultations with qualified doctors specialized in various fields."
            logo={<FaStethoscope className="icons" color="blue" />}
          />

          <ServiceSection
            title="Diagnostic Laboratory Services"
            description="State-of-the-art diagnostic laboratory services with skilled lab testers for accurate and timely test results."
            logo={<GiTestTubes className="icons" color="blue" />}
          />

          <ServiceSection
            title="Health Screenings & Preventive Care"
            description="Offer comprehensive health screenings and preventive care programs to promote overall wellness."
            logo={<IoShieldCheckmarkSharp className="icons" color="blue" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
