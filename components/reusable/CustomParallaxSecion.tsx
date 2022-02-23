import Link from "next/link";
import CustomButton from "./CustomButton";
import CustomImage from "./CustomImage";

interface CustomParallaxSectionI {
  img: string;
  header: string;
  onLoad?: any;
  children: React.ReactNode;
}

const CustomParallaxSecion = ({
  img,
  header,
  children,
}: CustomParallaxSectionI) => {
  return (
    <div className="container bg-[#B3D1EE] w-full flex items-center odd:flex-row-reverse">
      <CustomImage
        className="itemOne w-[50%] h-full flex items-center justify-center"
        src={img}
        width={732}
        height={552}
      />

      <div className="itemTwo bg-[#B3D1EE] w-[50%] px-12">
        <div className="head">
          <h1 className="text-[2.13rem] font-[600] text-[#001011]">{header}</h1>
        </div>
        <div className="body">
          <p className="text-[1.4rem] font-[400] text-[#001011]">{children}</p>
        </div>
        <div className="button">
          <CustomButton
            className="bg-[#0C0D27] hover:bg-[#F64740] px-[0.5rem] py-[0.6rem] font-[700] transition w-[6.89rem] flex items-center justify-center mt-[2rem]"
            textStyle="text-[#fff]"
          >
            <Link href={"/study"} passHref={true}>
              Read more
            </Link>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CustomParallaxSecion;
