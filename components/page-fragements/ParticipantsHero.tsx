import CustomImage from "../globals/CustomImage";

const ParticipantsHero = () => {
  return (
    <div>
      <div className="relative">
        <div className="w-full h-[320px] sm:h-[420px] md:h-[500px] participantSection flex items-center justify-center">
          <div className="absolute left-[55%] top-[60%] hidden md:block">
            <CustomImage
              src="/images/participants1.jpg"
              width={464}
              height={379}
            />
          </div>

          <div className="absolute left-[10%] top-[55%] hidden md:block">
            <CustomImage
              src="/images/participants-title.png"
              width={550}
              height={200}
            />
          </div>
          <div className="absolute left-[7%] top-[40%] block md:hidden">
            <CustomImage
              src="/images/participants-title.png"
              width={520}
              height={208}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="w-[80%] mx-auto mt-[5rem] mb-[5rem]">
          <p className="w-[100%] md:w-[50%] text-center md:text-left">
            Clinical trials are designed to advance medical science and the
            improve quality of life for so many people. But no part of a
            clinical trial is as vital to its success as participating
            volunteers. Without them, new medical breakthroughs simply would not
            occur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParticipantsHero;
