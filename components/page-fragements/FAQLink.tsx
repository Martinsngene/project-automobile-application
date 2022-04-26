import ArrowLink from "../globals/ArrowLink";
import CustomLink from "../globals/CustomLink";

const FAQLink = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-[30px] md:px-[50px] mt-[2rem] py-[4rem]">
      <CustomLink className="faqSection w-full md:w-[45%] h-[300px]">
        <div className="flex  flex-col items-center justify-center w-full h-full">
          <h2 className="text-[24px] md:text-[28px] font-bold text-center">
            Frequently Asked
            <br />
            Questions
          </h2>
          <ArrowLink
            text=""
            textStyles="text-[18px] md:text-[32px] font-bold text-[#682145]"
            containerStyles="w-[260px] flex items-center justify-center mt-[1rem]"
            arrowStyles="text-[24px] md:text-[48px] text-[#682145] font-[800]"
          />
        </div>
      </CustomLink>
      <CustomLink className="getStartedSection w-full md:w-[45%] h-[300px] mt-[2rem] md:mt-0">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h2 className="text-[24px] md:text-[28px] font-bold text-center">
            Let&apos;s Get Started
          </h2>
          <ArrowLink
            text=""
            textStyles="text-[18px] md:text-[32px] font-bold text-[#682145]"
            containerStyles="w-[260px] flex items-center justify-center mt-[1rem]"
            arrowStyles="text-[24px] md:text-[48px] text-[#682145] font-[800]"
          />
        </div>
      </CustomLink>
    </div>
  );
};

export default FAQLink;
