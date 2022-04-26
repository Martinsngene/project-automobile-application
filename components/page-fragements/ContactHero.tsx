import CustomImage from "../globals/CustomImage";

const ContactHero = () => {
  return (
    <div className="relative">
      <div className="w-full h-[320px] sm:h-[420px] md:h-[420px] contactSection flex items-center justify-center">
        <div className="absolute left-[22%] top-[43%] hidden md:block">
          <CustomImage
            src="/images/contact-title.png"
            width={530}
            height={208}
          />
        </div>
        <div className="absolute left-[7%] top-[40%] block md:hidden">
          <CustomImage
            src="/images/contact-title.png"
            width={512}
            height={208}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
