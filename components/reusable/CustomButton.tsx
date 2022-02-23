import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: any;
  textStyle?: string;
}

const CustomButton = ({
  children,
  className,
  onClick,
  textStyle,
}: ButtonProps) => {
  return (
    <div className={className} onClick={onClick}>
      <button>
        <span className={textStyle}>{children}</span>
      </button>
    </div>
  );
};

export default CustomButton;
