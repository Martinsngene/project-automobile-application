import Link from "next/link";

interface LinkProps {
  children: React.ReactNode;
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
}: LinkProps) => {
  return (
    <div className={className} onClick={onClick}>
      <Link href={`${href}`}>
        <span className={textStyle}>{children}</span>
      </Link>
    </div>
  );
};

export default CustomLink;
