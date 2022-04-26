import { BiRightArrowCircle } from "react-icons/bi";

interface ArrowLinkPropsI {
  containerStyles: string;
  textStyles: string;
  arrowStyles: string;
  text: string;
}

const ArrowLink = ({
  containerStyles,
  textStyles,
  arrowStyles,
  text,
}: ArrowLinkPropsI) => {
  return (
    <div className={`${containerStyles}`}>
      <span className={`${textStyles}`}>{text}</span>
      <span className={`${arrowStyles}`}>
        <BiRightArrowCircle />
      </span>
    </div>
  );
};

export default ArrowLink;
