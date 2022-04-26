import CustomImage from "../globals/CustomImage";

const MedicalDirectors = () => {
  return (
    <div className="w-[80%] mx-auto mt-[7rem] md:mt-[20rem] mb-[5rem] flex items-center justify-center px-[30px] md:px-[50px]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-[3rem] text-[20px] md:text-[40px] text-[#4cafd9] font-[500]">
          Medical Directors:
        </h2>
        <CustomImage
          imgClassName="rounded-full"
          src="/images/avatar.jpg"
          width={200}
          height={200}
        />
        <div className="text-center">
          <h2 className="text-[20px] md:text-[28px] text-[#4cafd9] font-[500] mt-[10px] md:mt-[30px]">
            Scott Dobson, MD
          </h2>
          <p className="italic font-[400]">Medical Director</p>
        </div>
      </div>
    </div>
  );
};

export default MedicalDirectors;
