import React, { FC } from "react";

interface SectionHeaderProps {
  heading: string;
  subHeading?: string;
  className?: string;
  headingClassName?: string; 
  subHeadingClassName?: string; 
}

const SectionHeader: FC<SectionHeaderProps> = ({ heading, subHeading, className, headingClassName, subHeadingClassName }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <h2 className={`text-black text-lg sm:text-2xl font-bold ${headingClassName}`}>
        {heading}
      </h2>
      {subHeading && (
        <p className={`text-sm text-gray-500 ${subHeadingClassName}`}>
          {subHeading}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
