import { motion } from "framer-motion";
import {
  ButtonHTMLAttributes,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";
import { useWindowSize } from "@hooks";
import { ImageShimmer } from "@components";
import { rulebreakers, ViewContext } from "@constants";

const Gallery: FC = () => {
  const [imageId, setImageId] = useState<number>(0);
  const [winWidth, winHeight] = useWindowSize();

  const animationRef = useRef<string>("");
  const { setGalleryModalId } = useContext(ViewContext);

  const back = (): void => {
    animationRef.current = "right";
    setImageId((prevState) => {
      if (imageId > 0) return prevState - 1;
      return prevState;
    });
  };

  const next = (): void => {
    animationRef.current = "left";
    setImageId((prevState) => {
      if (imageId < rulebreakers.length - 1)
        //  rulebreakers[imageId + 3])
        return prevState + 1;
      return prevState;
    });
  };

  const isForwardDisabled = (): boolean => {
    if (winWidth >= 1024 && imageId + 2 === rulebreakers.length - 1) {
      return true;
    }
    if (winWidth >= 768 && imageId + 1 === rulebreakers.length - 1) {
      return true;
    }
    if (imageId === rulebreakers.length - 1) {
      return true;
    }
    return false;
  };
  const imageSlideAnimation = (
    animate: boolean,
    delay?: number,
    direction?: string
  ) => ({
    initial: { x: direction === "right" ? -0 : 0, opacity: 0.75 },
    animate: { x: animate ? 0 : 0, opacity: 1 },
    exit: { x: -40 },
    transition: { duration: 0.15, ease: "easeInOut", delay: delay ?? 0 },
  });

  return (
    <div className="flex items-center relative p-2 gap-8 my-20 md:mb-10">
      <GalleryArrowButton
        direction="left"
        onClick={() => back()}
        disabled={imageId === 0}
      />
      <div className="flex gap-8 ">
        {rulebreakers.map((image, index) => {
          return (
            <>
              {index === rulebreakers[imageId].id && (
                <ImageShimmer
                  src={rulebreakers[imageId].src}
                  alt="valentinez"
                  height={300}
                  width={300}
                  key={index}
                  animation={imageSlideAnimation(
                    true,
                    animationRef.current === "right" ? 0.2 : 0,
                    animationRef.current
                  )}
                  hover
                  onClick={() => setGalleryModalId(index)}
                />
              )}
              {winWidth >= 768 && index === rulebreakers[imageId].id + 1 && (
                <ImageShimmer
                  src={rulebreakers[imageId + 1].src}
                  alt="valentinez"
                  height={300}
                  width={300}
                  key={index + 1}
                  animation={imageSlideAnimation(
                    true,
                    0.1,
                    animationRef.current
                  )}
                  hover
                  onClick={() => setGalleryModalId(index)}
                />
              )}
              {winWidth >= 1024 && index === rulebreakers[imageId].id + 2 && (
                <ImageShimmer
                  src={rulebreakers[imageId + 2].src}
                  alt="valentinez"
                  height={300}
                  width={300}
                  key={index + 2}
                  animation={imageSlideAnimation(
                    true,
                    animationRef.current === "left" ? 0.2 : 0,
                    animationRef.current
                  )}
                  hover
                  onClick={() => setGalleryModalId(index)}
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
