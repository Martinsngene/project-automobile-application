import CustomImage from "../globals/CustomImage";

const ResourceSection = () => {
  const imageUrls = [
    { url: "/images/ada.png" },
    { url: "/images/cwg.png" },
    { url: "/images/ciscrp.png" },
    { url: "/images/cr.png" },
    { url: "/images/ct.png" },
    { url: "/images/cd.png" },
  ];
  return (
    <div className="bg-[#4CAFD9] flex flex-col items-center justify-center w-full px-[30px] py-[80px] mt-[7rem] md:mt-[10rem] mb-[5rem]">
      <h2 className="pb-[80px] text-[24px] md:text-[32px] font-[700] text-[#fff]">
        Resources
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-[2rem] w-full">
        {imageUrls.map((item: any, index: any) => {
          return (
            <CustomImage
              src={item.url}
              className="col-span-1 flex items-center justify-center"
              key={index}
              width={150}
              height={50}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResourceSection;
