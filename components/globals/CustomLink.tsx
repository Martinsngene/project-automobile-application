import Link from "next/link";

interface LinkPropsI {
  children?: React.ReactNode;
  className?: string;
  onClick?: any;
  textStyle?: string;
  href?: string;
}

const CustomLink = ({
  children,
  className,
  onClick,
  textStyle,
  href,
}: LinkPropsI) => {
  return (
    <div className={className} onClick={onClick}>
      <Link href={`${href}`} passHref={true}>
        <span className={textStyle}>{children}</span>
      </Link>
    </div>
  );
};

export default CustomLink;
