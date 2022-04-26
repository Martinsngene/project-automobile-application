import { ReactNode } from "react";

interface StudySectionPropsI {
  children: ReactNode;
  header: string;
}

const StudySection = ({ children, header }: StudySectionPropsI) => {
  return (
    <div className="flex flex-col items-center md:items-start justify-center w-full md:w-[80%] px-[30px] md:px-[50px] my-[3rem] md:my-[5rem]">
      <div className="">
        <h2 className="text-[#4cafd9]  font-[700] text-[22px] sm:text-[24px] md:text-[36px] my-[1.5rem]">
          {header}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1rem] sm:gap-[2rem] md:gap-[3rem]">
        {children}
      </div>
    </div>
  );
};

export default StudySection;
