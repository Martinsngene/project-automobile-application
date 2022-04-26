import CustomImage from "../globals/CustomImage";

const AboutSection = () => {
  return (
    <div className="relative">
      <div className="w-full h-[320px] sm:h-[420px] md:h-[500px] aboutSection flex items-center justify-center">
        <div className="absolute right-[55%] top-[40%] hidden md:block">
          <CustomImage
            src="/images/doctor-about.jpg"
            width={464}
            height={379}
          />
        </div>

        <div className="absolute right-[12%] top-[40%] hidden md:block">
          <CustomImage src="/images/about-hero.png" width={512} height={208} />
        </div>
        <div className="absolute left-[7%] top-[40%] block md:hidden">
          <CustomImage src="/images/about-hero.png" width={512} height={208} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
