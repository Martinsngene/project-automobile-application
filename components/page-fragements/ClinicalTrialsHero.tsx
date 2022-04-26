import CustomImage from "../globals/CustomImage";

const ClinicalTrialsHero = () => {
  return (
    <div>
      <div className="relative">
        <div className="w-full h-[320px] sm:h-[375px] md:h-[420px] clinicalTrialSection flex items-center justify-center">
          <div className="absolute left-[12%] top-[30%] hidden md:block">
            <CustomImage
              src="/images/clinical-title.png"
              width={580}
              height={291}
            />
          </div>
          <div className="absolute left-[7%] top-[40%] block md:hidden">
            <CustomImage
              src="/images/clinical-title.png"
              width={520}
              height={208}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalTrialsHero;
