import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import InputField from "../form-elements/InputField";
import CustomImage from "./CustomImage";

interface ModalPropsI {
  fnModal?: any;
}

const Modal = ({ fnModal }: ModalPropsI) => {
  return (
    <div className="modalContainer fixed top-0 right-0 left-0 bottom-0 z-50 w-[100%] h-[100vh] bg-[rgba(0,0,0,0.8)] backdrop-blur-[8px] flex items-center justify-center">
      <button
        onClick={fnModal}
        className="absolute top-[18%] right-[23%] text-[#790707] z-40"
      >
        <AiOutlineClose size={"26px"} />
      </button>
      <div className="relative bg-[#fff] w-[90%] md:w-[60%] h-[90%] md:h-[75%] border border-[#707070] flex flex-col items-center justify-center">
        <div className="contentContainer w-[85%] md:w-[55%]">
          {/* <div className="logo">
            <CustomImage src="" width={90} height={90} />
          </div> */}
          <div className="header mb-[0.5rem] font-[700]">
            <h2>Sign in to Kilometa</h2>
          </div>
          <div className="description mb-[1rem]">
            <p>
              To sign in. Please type in the email address linked to your
              account and password.
            </p>
          </div>
          <div className="email mb-[1rem]">
            <InputField
              label="E-mail"
              labelId="email"
              name="email"
              placeHolder="Enter Your Email Here"
              className="w-full border-[2px] text-[14px] border-[#17224D] px-[0.4rem] py-[0.5rem] outline-none rounded-[0.4rem]"
              labelStyles="text-[14px] text-[#000] font-[500]"
              type="email"
            />
          </div>
          <div className="password mb-[1rem]">
            <InputField
              label="Password"
              labelId="password"
              name="password"
              placeHolder="Enter Your Password Here"
              className="w-full border-[2px] text-[14px] border-[#17224D] px-[0.4rem] py-[0.5rem] outline-none rounded-[0.4rem]"
              labelStyles="text-[14px] text-[#000] font-[500]"
              type="password"
            />
          </div>
          <div className="forgotPassword">
            <p>
              Forget Password?{" "}
              <Link href={"/"} passHref={true}>
                <span className="text-[#17224D] cursor-pointer">Reset it</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="btn mt-[0.5rem] md:mt-[1rem]">
          <button className="bg-[#E70A0A] px-[0.4rem] py-[0.3rem] text-[#fff] w-[120px] font-[500] border-[2px] border-[#E70A0A] rounded-[0.3rem]">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
