import Link from "next/link";
import { CustomButton } from "../buttons/Buttons";
import ArrowLink from "./ArrowLink";
import CustomImage from "./CustomImage";

interface CustomSectionI {
  img: string;
  header: string;
  onLoad?: any;
  children: React.ReactNode;
  imgWidth: number;
  imgHeight: number;
  containerStyles: string;
}

const CustomSecion = ({
  img,
  header,
  children,
  imgWidth,
  imgHeight,
  containerStyles,
}: CustomSectionI) => {
  return (
    <div
      className={`w-full flex-col md:flex-row flex justify-between items-center ${containerStyles}`}
    >
      <CustomImage
        className="itemOne w-full md:placeholder:w-[40%] h-full flex items-center justify-center"
        src={img}
        width={imgWidth}
        height={imgHeight}
      />

      <div className="itemTwo w-full md:w-[60%] px-12">
        <div className="head">
          <h1 className="text-[24px] md:text-[32px] font-[600] text-[#616060]">
            {header}
          </h1>
        </div>
        <div className="body">
          <p className="text-[1.25rem] font-[400] text-[#001011] my-[2rem]">
            {children}
          </p>
        </div>
        <div className="button">
          <ArrowLink
            text="Our Difference"
            textStyles="text-[20px] font-bold text-[#4CAFD9]"
            containerStyles="w-[200px] flex items-center justify-around"
            arrowStyles="text-[32px] text-[#682145] font-[800]"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomSecion;
