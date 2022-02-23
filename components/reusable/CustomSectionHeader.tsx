import CustomImage from "./CustomImage";
import CustomSection from "./CustomSection";

interface HeaderPropsI {
  children: string;
  IconWidth: number;
  IconHeight: number;
  IconSrc: string;
  textAlign: string;
}

const CustomSectionHeader = ({
  children,
  IconWidth,
  IconHeight,
  IconSrc,
  textAlign,
}: HeaderPropsI) => {
  return (
    <CustomSection className="bg-[#F2F2F2] flex flex-col items-center justify-center">
      <div className="w-[80%] flex flex-col items-center justify-center mb-[7rem]">
        <div>
          <CustomImage
            className="mb-[1.5rem]"
            src={IconSrc}
            width={IconWidth}
            height={IconHeight}
          />
        </div>
        <div>
          <p className={`text-[1.4rem] text-${textAlign} font-[400]`}>
            {children}
          </p>
        </div>
      </div>
    </CustomSection>
  );
};

export default CustomSectionHeader;
