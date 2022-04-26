import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "../buttons/Buttons";

interface CardPropsI {
  children: React.ReactNode;
  href?: string;
  buttonLabel: string;
  src: string;
  header?: string;
}

const Card = ({ children, src, buttonLabel, header, href }: CardPropsI) => {
  return (
    <div className="bg-transparent w-[290px] col-span-1">
      <div className="cardImgContainer w-full flex  items-center justify-center">
        <Image src={src} width={300} height={200} alt="" />
      </div>
      <div className="cardHeaderContainer flex items-center justify-center">
        <h2 className="text-[28px] font-bold text-[#4CAFD9]">{header}</h2>
      </div>
      <div className="cardDescriptionContainer p-2 h-[12rem]">
        <p>{children}</p>
      </div>
      <div className="cardBtnContainer my-4 mx-3">
        <CustomButton
          className="bg-[#4CAFD9] hover:bg-[#242424] w-[150px] px-[1rem] py-[0.9rem] transition rounded-[1.5rem] flex items-center justify-center"
          textStyle="text-[#242424] hover:text-[#4CAFD9] text-[1rem] font-[700]"
        >
          <Link href={`${href}`} passHref={true}>
            {buttonLabel}
          </Link>
        </CustomButton>
      </div>
    </div>
  );
};

export default Card;
