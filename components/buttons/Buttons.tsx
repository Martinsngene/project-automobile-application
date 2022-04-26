interface ButtonPropsI {
  children: React.ReactNode;
  className?: string;
  onClick?: any;
  textStyle?: string;
}

export function CustomButton({
  children,
  className,
  onClick,
  textStyle,
}: ButtonPropsI) {
  return (
    <div className={className} onClick={onClick}>
      <button className={textStyle}>{children}</button>
    </div>
  );
}
