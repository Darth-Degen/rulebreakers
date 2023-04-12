import { HTMLMotionProps, motion } from "framer-motion";
import { FC, HTMLAttributes, useState } from "react";
import Image from "next/image";
import { imageLoadAnimation } from "@constants";

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
  width: number;
  height: number;
  alt: string;
  animation?: {
    initial?: any;
    animate?: any;
    transition?: any;
  };
}

const ImageShimmer: FC<Props> = (props: Props) => {
  const { src, width, height, alt, className, animation, ...componentProps } =
    props;
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <motion.div
      className={`relative rounded ${className}`}
      initial={animation?.initial}
      animate={animation?.animate}
      transition={animation?.transition}
    >
      {!imageLoaded && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded opacity-50"
          style={{
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s ease-in-out infinite",
          }}
          {...imageLoadAnimation(!imageLoaded)}
        />
      )}
      <motion.div className="" {...imageLoadAnimation(imageLoaded)}>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className={`rounded`}
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </motion.div>
    </motion.div>
  );
};
export default ImageShimmer;
