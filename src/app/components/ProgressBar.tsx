import React from "react";

interface ProgressBarProps {
  percentage: number;
  color: string;
  title: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  color,
  title,
}) => {
  const animatedWidthStyle = {
    width: `${percentage}%`,
    transition: "width 1s ease-out", // Add CSS transition
  };

  return (
    <div className="mt-4">
      <div className="flex text-[18px] justify-between">
        <span className=" text-gray-700">{title}</span>
        <span className=" font-bold text-gray-900">{percentage}%</span>
      </div>
      <div className="bg-gray-300   overflow-hidden">
        <div
          className={`h-5  ${color}`}
          style={animatedWidthStyle} // Use the animated width style
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
