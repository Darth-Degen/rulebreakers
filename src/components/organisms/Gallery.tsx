import { FC, useContext, useEffect, useRef, useState } from "react";
import { useWindowSize } from "@hooks";
import { ImageShimmer, GalleryArrowButton } from "@components";
import { rulebreakers, ViewContext, imageSlideAnimation } from "@constants";

const Gallery: FC = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
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
              {index === rulebreakers[imageIndex].id && (
                <ImageShimmer
                  src={`/images/rulebreakers/${formatImageSrc(imageIndex)}.png`}
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
                  onClick={() => setGalleryModalId(imageIndex)}
                />
              )}
              {winWidth >= 768 &&
                index + 1 === rulebreakers[imageIndex].id + 1 && (
                  <ImageShimmer
                    src={`/images/rulebreakers/${formatImageSrc(
                      imageIndex + 1
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
                    onClick={() => setGalleryModalId(imageIndex + 1)}
                  />
                )}
              {winWidth >= 1024 &&
                index + 1 === rulebreakers[imageIndex].id + 2 && (
                  <ImageShimmer
                    src={`/images/rulebreakers/${formatImageSrc(
                      imageIndex + 2
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
                    onClick={() => setGalleryModalId(imageIndex + 2)}
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

export default Gallery;
