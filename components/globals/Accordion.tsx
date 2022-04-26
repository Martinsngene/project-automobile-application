import { Disclosure } from "@headlessui/react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

interface AccordionPropsI {
  header: string;
  children: React.ReactNode;
}

const Accordion = ({ header, children }: AccordionPropsI) => {
  return (
    <div className="w-full px-1 pt-2">
      <div className="w-full mb-[1rem] max-w-md p-2 bg-[#f3f3f3]">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-start w-full px-1 py-2 text-[1rem] font-medium text-left text-[#000] bg-[#f3f3f3]">
                <span className="text-[1rem] md:text-[2rem] mt-[0.5rem] text-[#682145]">
                  {open ? <FaAngleUp /> : <FaAngleDown />}
                </span>
                <h4 className="text-[#4cafd9] text-[16px] md:text-[18px] ml-[0.5rem] font-[700]">
                  {header}
                </h4>
              </Disclosure.Button>
              <Disclosure.Panel className="px-1 pt-2">
                <p className="text-[#000] text-[14px] md:text-[16px] md:pl-[50px]">
                  {children}
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Accordion;
