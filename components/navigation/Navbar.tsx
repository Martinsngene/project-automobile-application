import Link from "next/link";
import CustomButton from "../reusable/CustomButton";
import CustomImage from "../reusable/CustomImage";
import { NavbarSchema } from "./schema";

interface NavbarPropsI {
  className?: string;
  linkColor?: string;
  url?: string;
}

const Navbar = ({ className, linkColor, url }: NavbarPropsI) => {
  const navStyles =
    "h-[4rem] fixed z-10 w-[90%] left-[5%] top-[5%] flex items-center justify-between px-4 rounded-[0.8rem]";
  return (
    <div className={`${className} + ${navStyles}`}>
      <div className="logo">
        <CustomImage src={`${url}`} width={100} height={25} />
      </div>
      <ul className="flex items-center justify-between w-[60%]">
        {NavbarSchema.map((item, index) => (
          <li className={`${linkColor} font-[600] text-[1rem]`} key={index}>
            <Link href={`${item.route}`} passHref={true}>
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <CustomButton
            className="bg-[#0C0D27] hover:bg-[#F64740] px-[1.3rem] py-[0.55rem] font-[700] transition"
            textStyle="text-[#fff]"
          >
            <Link href={"/study"} passHref={true}>
              Join a Study
            </Link>
          </CustomButton>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
