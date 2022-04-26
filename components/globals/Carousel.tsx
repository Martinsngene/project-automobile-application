import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { CustomButton } from "../buttons/Buttons";
import CustomImage from "./CustomImage";

interface CarouselPropsI {
  image?: any;
  onClick?: any;
  text?: string;
  btnText?: string;
  header?: string;
}

const Carousel = ({
  image,
  onClick,
  text,
  btnText,
  header,
}: CarouselPropsI) => {
  return (
    <div className="w-[80%] bg-[#fff] mx-auto flex justify-center items-center my-[1.2rem] md:my-[3rem] border border-[#707070]">
      <CustomImage
        className="itemOn w-[70%] h-full flex items-center justify-center"
        src="https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhbnNwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        width={1000}
        height={500}
      />
      {/* <div className="absolute top-[63%] right-[38%] flex items-center justify-between w-[80px]">
        <span className="w-[15px] h-[15px] border-2 border-[#D92114] rounded-full"></span>
        <span className="w-[15px] h-[15px] border-2 border-[#D92114] rounded-full"></span>
        <span className="w-[15px] h-[15px] border-2 border-[#D92114] rounded-full"></span>
        <span className="w-[15px] h-[15px] border-2 border-[#D92114] rounded-full"></span>
      </div> */}
      <div className="itemTwo w-[30%] py-[1.2rem] px-[1.2rem]">
        {/* <div className="absolute top-[10%] right-[13%]">
          <button className="" onClick={onClick}>
            <FaAngleRight size={"30px"} />
          </button>
        </div> */}
        <div className="head">
          <h1 className="text-[1.2rem] md:text-[1.5rem] font-[600] text-[#17224D]">
            {header}
          </h1>
        </div>
        <div className="body">
          <p className="text-[0.8rem] md:text-[1.1rem] py-[1.2rem]">{text}</p>
          <CustomButton
            className="bg-[#D92114] w-[100%] border-[2px] border-[#7D0606] my-[0.6rem] px-[1rem] py-[0.2rem] transition rounded-[4px] flex justify-center items-center"
            textStyle="text-[#fff] text-[0.9rem] font-[500]"
          >
            <Link href={"/"} passHref={true}>
              {btnText}
            </Link>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
