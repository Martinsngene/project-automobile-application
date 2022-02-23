interface LayoutPropsI {
  children: React.ReactNode;
  className?: string;
}

const CustomSection = ({ children, className }: LayoutPropsI) => {
  return <div className={className}>{children}</div>;
};

export default CustomSection;
