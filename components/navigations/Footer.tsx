import { FooterSchemaData } from "../constants/FooterSchema";
import CustomImage from "../globals/CustomImage";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-[2rem] md:pt-[5rem] pb-[2rem] md:pb-[5rem]">
      <div className="bg-[#fff] w-[100%] py-[1rem] md:py-[3rem] px-[2rem] flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center mb-[2rem] mt-[1rem] md:mt-0">
          <CustomImage src="/images/navlogo.png" width={150} height={75} />
        </div>
        <div className="flex flex-col items-center justify-between w-[100%]">
          <div className="flex flex-col items-center justify-center w-[100%]">
            <ul className="flex flex-col items-center justify-center mt-[0.5rem]">
              {FooterSchemaData.map((currentVal, index) => {
                return (
                  <li
                    className="py-[1px] font-bold text-[0.9rem] md:text-[1rem]"
                    key={index}
                  >
                    <Link href={currentVal.href} passHref={true}>
                      {currentVal.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-col items-center justify-center text-[14px] md:text-[16px] mt-[1rem] ">
              <li>
                <h2 className="text-[16px] text-[#4CAFD9] font-[700]">
                  Get in Touch:
                </h2>
              </li>
              <li>
                <span className="font-[700]">Phone:</span> 864.334.0141
              </li>
              <li>
                <span className="font-[700]">Fax:</span> 864.334.0137
              </li>
              <li>
                <span className="font-[700]">Email:</span> info@tribecr.com
              </li>
            </ul>
            <ul className="flex flex-col items-center justify-center text-[1rem] mt-[3rem]">
              <li>
                <h2 className="text-[18px] font-bold text-[#4CAFD9]">
                  Made by X
                </h2>
              </li>
              <li>
                <h2 className="text-[16px] font-[800] text-[#4CAFD9]">
                  &copy; 2021 Tribe Clinical Research.
                </h2>
              </li>
              <li>All Rights Reserved.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
