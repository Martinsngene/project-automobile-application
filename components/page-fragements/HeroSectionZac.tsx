import React, { Children, ReactText } from "react";

interface HeroSectionPropsI {
  children?: any;
  heroImgContainer?: string;
  leftContainerStyle?: string;
  rightContainerStyle?: string;
  reverse?: boolean;
  heroTextRight?: boolean;
}

const HeroSectionZac = (props: HeroSectionPropsI) => {
  const {
    heroImgContainer,
    leftContainerStyle,
    rightContainerStyle,
    reverse,
    heroTextRight,
    children,
  } = props;

  const [left, right] = Children.toArray(children);

  return (
    <div className="relative">
      <div
        className={`w-full h-[320px] sm:h-[420px] md:h-[600px] flex items-center justify-center ${heroImgContainer}`}
      >
        <div
          className={`${reverse ? " order-2" : ""} ${
            heroTextRight ? " text-right" : ""
          } absolute  ${leftContainerStyle}`}
        >
          {left}
        </div>
        <div
          className={`${
            reverse ? " order-1" : ""
          } absolute ${rightContainerStyle}`}
        >
          {right}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionZac;
