import { motion } from "framer-motion";
import { ButtonHTMLAttributes, FC } from "react";
import { ImageShimmer } from "@components";

interface ArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: string; //keyof typeof ArrowDegrees;
}

const GalleryArrowButton: FC<ArrowProps> = (props: ArrowProps) => {
  const { direction = "right", className, ...componentProps } = props;

  const midClickAnimation = {
    whileTap: { scale: componentProps.disabled ? 1 : 0.95 },
    transition: { duration: 0.15 },
  };

  return (
    <button {...componentProps} className={`h-min ${className}`}>
      <motion.div
        {...midClickAnimation}
        className={`md:m-5 z-10  ${
          direction === "right" ? "-right-0 md:-right-16" : "left-0 md:-left-16"
        }
        ${
          componentProps.disabled
            ? "opacity-20 cursor-not-allowed"
            : "cursor-pointer "
        } transition-opacity duration-200  `}
      >
        {direction === "left" ? (
          <ImageShimmer
            src="/images/icons/arrow_left.png"
            width={69}
            height={69}
            alt="Left Arrow"
          />
        ) : (
          <ImageShimmer
            src="/images/icons/arrow_right.png"
            width={69}
            height={69}
            alt="Right Arrow"
          />
        )}
      </motion.div>
    </button>
  );
};

export default GalleryArrowButton;
