import { useSpring, animated } from "react-spring";

interface AnimationPropsI {
  children: React.ReactNode;
  menu?: boolean;
}

const SlideOut = ({ children, menu }: AnimationPropsI) => {
  const slide = useSpring({ opacity: menu ? 1 : 0 });

  return <animated.div style={slide}>{children}</animated.div>;
};

export default SlideOut;
