import Image from "next/image";
import CustomLink from "./CustomLink";
import { BsArrowRight } from "react-icons/bs";

interface CardPropsI {
  children: React.ReactNode;

  buttonLabel: string;
  src: string;
  link?: string;
}

const Card = ({ children, src, buttonLabel, link }: CardPropsI) => {
  return (
    <div className="bg-[#fff] w-[310px] p-2 hover:shadow-2xl">
      <div className="cardImgContainer w-full flex  items-center justify-center bg-black">
        <Image src={src} width={320} height={200} />
      </div>
      <div className="cardDescriptionContainer p-2">
        <p>{children}</p>
      </div>
      <div className="cardBtnContainer my-4 mx-3">
        <CustomLink
          href={link}
          textStyle="text-[#123384] font-[600] flex w-full items-center justify-between"
          className="w-[35%] cursor-pointer"
        >
          <span>{buttonLabel}</span>
          <BsArrowRight />
        </CustomLink>
      </div>
    </div>
  );
};

export default Card;
