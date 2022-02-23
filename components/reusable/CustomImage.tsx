import Image from "next/image";

interface ImagePropsI {
  src: string;
  width: number;
  height: number;
  className?: string;
}

const CustomImage = ({ className, src, width, height }: ImagePropsI) => {
  return (
    <div className={className}>
      <Image src={src} width={width} height={height} />
    </div>
  );
};

export default CustomImage;
