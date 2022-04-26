import CustomImage from "./CustomImage";

interface CustomSectionI {
  img: string;
  header: string;
  onLoad?: any;
  children: React.ReactNode;
  containerStyles: string;
}

const CustomPageLanding = ({
  img,
  header,
  children,
  containerStyles,
}: CustomSectionI) => {
  return (
    <div
      className={`bg-[#7FCDC979] flex flex-col md:flex-row justify-center items-center my-[3rem] ${containerStyles}`}
    >
      <CustomImage
        className="itemOne w-full md:w-[40%] h-full flex items-center justify-center"
        src={img}
        width={600}
        height={320}
      />

      <div className="itemTwo h-[320px] md:h-full w-full md:w-[60%]  py-[0.5rem] px-[0.7rem] md:py-[1rem] md:px-[2rem]">
        <div className="head">
          <h1 className="text-[1.2rem] md:text-[1.5rem] font-[600] text-[#17224D]">
            {header}
          </h1>
        </div>
        <div className="body">
          <p className="text-[0.8rem] md:text-[1.1rem] font-[400] text-[#17224D]">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomPageLanding;
