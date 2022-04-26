import React from "react";
import Link from "next/link";
import { CustomButton } from "../buttons/Buttons";
import CustomImage from "../globals/CustomImage";
import { NavbarSchemaData, NavbarSchemaData2 } from "../constants/NavBarSchema";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import SlideOut from "../animations/SlideOut";

interface NavBarPropsI {
  navToggle: boolean;
  navStatic?: boolean;
}

const Navbar = ({ navToggle, navStatic }: NavBarPropsI) => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div className="hidden md:block ">
        <div
          className={` ${
            navToggle ? "bg-[#682145] transition-colors" : "bg-transparent"
          } ${
            navStatic ? "bg-[#682145] transition-colors" : null
          } h-[80px] fixed z-10 w-[100%] flex items-center justify-between px-[3rem] py-[1.5rem]`}
        >
          <Link href={"/"} passHref={true}>
            <div className="logo pl-[1rem] w-[25%]">
              <CustomImage src="/images/navlogo.png" width={120} height={60} />
            </div>
          </Link>

          <ul className="flex items-center justify-between w-[55%]">
            {NavbarSchemaData.map((item, index) => (
              <li className="font-[700] text-[#fff] text-[1rem]" key={index}>
                <Link href={`${item.route}`} passHref={true}>
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <CustomButton
                className="bg-[#4CAFD9] hover:bg-[#242424] w-[150px] px-[1rem] py-[0.9rem] transition rounded-[1.5rem] flex items-center justify-center"
                textStyle="text-[#242424] hover:text-[#4CAFD9] text-[1rem] font-[700]"
              >
                <Link href={"/contact"} passHref={true}>
                  Contact Us
                </Link>
              </CustomButton>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`md:hidden  ${
          navToggle ? "bg-[#682145] transition-colors" : "bg-transparent"
        } ${
          navStatic ? "bg-[#682145] transition-colors" : null
        } h-[4rem] fixed z-10 w-[100%] flex items-center justify-between  px-[1.5rem] py-[1rem]`}
      >
        <Link href={"/"} passHref={true}>
          <div className="logo pl-[1rem] w-[25%]">
            <CustomImage src="/images/navlogo.png" width={100} height={50} />
          </div>
        </Link>

        <div>
          <SlideOut menu={menu}>
            <div
              className={`menuWrapper ${menu === true ? "block" : "hidden"}`}
              id="hamBurgerMenu"
            >
              <div className="menuBody">
                <Link href={"/"} passHref={true}>
                  <div className="logo pl-[1rem] w-[25%] z-50">
                    <CustomImage
                      src="/images/navlogo.png"
                      width={120}
                      height={60}
                    />
                  </div>
                </Link>

                <div className="menuCloseContainer">
                  <button
                    className="text-[#FFF]"
                    id="navMenuClose"
                    onClick={() => setMenu(!menu)}
                  >
                    <AiOutlineClose size={"26px"} />
                  </button>
                </div>
                <ul className="flex flex-col items-center justify-between">
                  {NavbarSchemaData2.map((item, index) => (
                    <li
                      className="font-[700] my-[0.6rem] text-[#fff] text-[16px]"
                      key={index}
                    >
                      <Link href={`${item.route}`} passHref={true}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SlideOut>
        </div>
        <button className="text-[#FFF]">
          <AiOutlineMenu size={"26px"} onClick={() => setMenu(!menu)} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
