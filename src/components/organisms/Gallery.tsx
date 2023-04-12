import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import {
  ButtonHTMLAttributes,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useWindowSize } from "@hooks";
import { ImageShimmer } from "@components";
import { enterAnimation } from "@constants";

const Gallery: FC = () => {
  const [winWidth, winHeight] = useWindowSize();
  const { scrollY, scrollYProgress } = useScroll();
  const y = useTransform(scrollY, [0, winHeight], [0, 300]);

  return (
    <motion.div
      className="h-[60vh] md:h-[85vh] flex flex-col justify-start items-center gap-4 w-screen mt-52"
      style={{ y }}
    >
      <h2 className="text-8xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0 my-10 px-5">
        gallery
      </h2>
      <ImageGallery />
    </motion.div>
  );
};

const images = [
  { id: 0, src: "/images/rulebreakers/001.png" },
  { id: 1, src: "/images/rulebreakers/002.png" },
  { id: 2, src: "/images/rulebreakers/003.png" },
  { id: 3, src: "/images/rulebreakers/002.png" },
  { id: 4, src: "/images/rulebreakers/001.png" },
  { id: 5, src: "/images/rulebreakers/003.png" },
  { id: 6, src: "/images/rulebreakers/003.png" },
  { id: 7, src: "/images/rulebreakers/002.png" },
  { id: 8, src: "/images/rulebreakers/001.png" },
  { id: 9, src: "/images/rulebreakers/001.png" },
];

interface ImageGalleryProps {
  // selectedImage: number;
  // setImage: Dispatch<SetStateAction<number>>;
}

const ImageGallery: FC<ImageGalleryProps> = (props: ImageGalleryProps) => {
  // const { selectedImage, setImage } = props;

  const [imageId, setImageId] = useState<number>(0);
  const [winWidth, winHeight] = useWindowSize();

  const back = (): void => {
    setImageId((prevState) => {
      if (imageId > 0) return prevState - 1;
      return prevState;
    });
  };

  const forward = (): void => {
    console.log(images[imageId + 2], images[imageId + 3]);
    setImageId((prevState) => {
      if (imageId < images.length - 1 && images[imageId + 3])
        return prevState + 1;
      return prevState;
    });
  };

  const isForwardDisabled = (): boolean => {
    if (winWidth >= 1024 && imageId + 2 === images.length - 1) {
      return true;
    }
    if (winWidth >= 768 && imageId + 1 === images.length - 1) {
      return true;
    }
    return false;
  };

  return (
    <div className="flex items-center relative p-2 gap-8 h-full mb-32 md:mb-10">
      <GalleryArrowButton
        direction="left"
        onClick={() => back()}
        disabled={imageId === 0}
      />
      <div className="flex gap-8 ">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 "> */}
        {images.map((image, index) => (
          <>
            {index === images[imageId].id && (
              <ImageShimmer
                src={images[imageId].src}
                alt="valentinez"
                height={300}
                width={300}
                className="cursor-pointer"
                key={index}
              />
            )}
            {winWidth >= 768 && index === images[imageId].id + 1 && (
              <ImageShimmer
                src={images[imageId + 1].src}
                alt="valentinez"
                height={300}
                width={300}
                className="cursor-pointer"
                key={index}
              />
            )}
            {winWidth >= 1024 && index === images[imageId].id + 2 && (
              <ImageShimmer
                src={images[imageId + 2].src}
                alt="valentinez"
                height={300}
                width={300}
                className="cursor-pointer"
                key={index}
              />
            )}
          </>
        ))}
      </div>
      {/* <ImageShimmer
        src={images[imageId].src}
        alt="valentinez"
        height={300}
        width={300}
        className="cursor-pointer"
      />
      {winWidth >= 768 && (
        <ImageShimmer
          src={images[imageId + 1].src}
          alt="valentinez"
          height={300}
          width={300}
          className="cursor-pointer"
        />
      )}
      {winWidth >= 1024 && (
        <ImageShimmer
          src={images[imageId + 2].src}
          alt="valentinez"
          height={300}
          width={300}
          className="cursor-pointer"
        />
      )} */}
      {/* </motion.div> */}
      <GalleryArrowButton
        direction="right"
        onClick={() => forward()}
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
        className={`m-5 z-10  ${
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
