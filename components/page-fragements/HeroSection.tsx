import ArrowLink from "../globals/ArrowLink";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="w-full h-[320px] sm:h-[420px] md:h-[600px] heroSection flex items-center justify-center">
        <div className="w-[100%] md:w-[60%] flex md:block items-center justify-center">
          <h1 className="text-[30px] md:text-[50px] font-[800] text-[#fff]">
            A Mission <br />
            To Serve <br />
            And Offer <br />
            Hope.
          </h1>
        </div>
      </div>
      <div className="static md:absolute h-[150px] bg-[#4CAFD9] bottom-[-7%] left-0 w-full md:w-[80%] px-[1.2rem] md:pl-[12rem] py-[2rem]">
        <h2 className="text-[18px] md:text-[24px] font-bold text-[#fff]">
          Unlocking the potential of medicine for children and adults in Upstate
          SC.
        </h2>
        <ArrowLink
          text="It starts here"
          textStyles="text-[18px] md:text-[32px] font-bold text-[#682145]"
          containerStyles="w-[260px] flex items-center justify-around"
          arrowStyles="text-[24px] md:text-[32px] text-[#682145] font-[800]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
