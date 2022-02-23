interface LayoutPropsI {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: LayoutPropsI) => {
  return <div className={className}>{children}</div>;
};

export default Container;
