import { motion } from "framer-motion";
import { ButtonHTMLAttributes, FC, useContext, useRef, useState } from "react";
import { useWindowSize } from "@hooks";
import { ImageShimmer } from "@components";
import { rulebreakers, ViewContext, imageSlideAnimation } from "@constants";

const Gallery: FC = () => {
  const [imageIndex, setImageIndex] = useState<number>(1);
  const [winWidth, winHeight] = useWindowSize();

  const animationRef = useRef<string>("");
  const { setGalleryModalId } = useContext(ViewContext);

  const back = (): void => {
    animationRef.current = "right";
    setImageIndex((prevState) => {
      if (imageIndex > 0) return prevState - 1;
      return prevState;
    });
  };

  const next = (): void => {
    animationRef.current = "left";
    setImageIndex((prevState) => {
      if (imageIndex < rulebreakers.length - 1) return prevState + 1;
      return prevState;
    });
  };

  const isForwardDisabled = (): boolean => {
    if (winWidth >= 1024 && imageIndex + 2 === rulebreakers.length - 1) {
      return true;
    }
    if (winWidth >= 768 && imageIndex + 1 === rulebreakers.length - 1) {
      return true;
    }
    if (imageIndex === rulebreakers.length - 1) {
      return true;
    }
    return false;
  };

  const formatImageSrc = (id: number): string => `${id < 10 ? "00" : "0"}${id}`;

  return (
    <div className="flex items-center relative p-2 gap-8 md:my-20">
      <GalleryArrowButton
        direction="left"
        onClick={() => back()}
        disabled={imageIndex === 0}
      />
      <div className="flex gap-8 ">
        {rulebreakers.map((image, index) => {
          return (
            <>
              {index + 1 === rulebreakers[imageIndex].id && (
                <ImageShimmer
                  src={`/images/rulebreakers/${formatImageSrc(
                    imageIndex + 1
                  )}.png`}
                  alt="brkrs"
                  height={300}
                  width={300}
                  key={index}
                  animation={imageSlideAnimation(
                    true,
                    animationRef.current === "left" ? 0.2 : 0,
                    animationRef.current
                  )}
                  hover
                  onClick={() => setGalleryModalId(imageIndex + 1)}
                />
              )}
              {winWidth >= 768 &&
                index + 1 === rulebreakers[imageIndex].id + 1 && (
                  <ImageShimmer
                    src={`/images/rulebreakers/${formatImageSrc(
                      imageIndex + 2
                    )}.png`}
                    alt="brkrs"
                    height={300}
                    width={300}
                    key={index + 1}
                    animation={imageSlideAnimation(
                      true,
                      0.1,
                      animationRef.current
                    )}
                    hover
                    onClick={() => setGalleryModalId(imageIndex + 2)}
                  />
                )}
              {winWidth >= 1024 &&
                index + 1 === rulebreakers[imageIndex].id + 2 && (
                  <ImageShimmer
                    src={`/images/rulebreakers/${formatImageSrc(
                      imageIndex + 3
                    )}.png`}
                    alt="brkrs"
                    height={300}
                    width={300}
                    key={index + 2}
                    animation={imageSlideAnimation(
                      true,
                      animationRef.current === "right" ? 0.2 : 0,
                      animationRef.current
                    )}
                    hover
                    onClick={() => setGalleryModalId(imageIndex + 3)}
                  />
                )}
            </>
          );
        })}
      </div>
      <GalleryArrowButton
        direction="right"
        onClick={() => next()}
        disabled={isForwardDisabled()}
      />
    </div>
  );
};

interface ArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: string; //keyof typeof ArrowDegrees;
}

const GalleryArrowButton: FC<ArrowProps> = (props: ArrowProps) => {
  const { direction = "right", ...componentProps } = props;

  const midClickAnimation = {
    whileTap: { scale: componentProps.disabled ? 1 : 0.95 },
    transition: { duration: 0.15 },
  };

  return (
    <button {...componentProps} className="h-min">
      <motion.div
        {...midClickAnimation}
        className={`md:m-5 z-10  ${
          direction === "right" ? "-right-0 md:-right-16" : "left-0 md:-left-16"
        }
        ${
          componentProps.disabled ? "opacity-30" : "cursor-pointer "
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
export default Gallery;
