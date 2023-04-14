import {
  Dispatch,
  SetStateAction,
  FC,
  useState,
  useEffect,
  useCallback,
} from "react";
import { ImageShimmer, Modal } from "@components";
import { menuAnimation, rulebreakers, slideUp } from "@constants";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  imageId: number;
  setImageId: Dispatch<SetStateAction<number>>;
}
const GalleryModal: FC<Props> = (props: Props) => {
  const { imageId, setImageId } = props;

  const [selected, setSelected] = useState<number>(0);
  const [src, setSrc] = useState<string>();

  const formatImageSrc = (id: number): string => `${id < 10 ? "00" : "0"}${id}`;

  const folder = formatImageSrc(imageId);
  const mainImage = `/images/rulebreakers/${folder}.png`;

  const getImage = useCallback((): string => {
    const image = formatImageSrc(selected);
    let src = "";
    console.log("selected ", selected);
    switch (selected) {
      case 0:
        // console.log(`/images/rulebreakers/${image}.png`);
        src = `/images/rulebreakers/${folder}.png`;
        break;
      default:
        // console.log(`/images/rulebreakers/${image}/${image}.png`);
        src = `/images/rulebreakers/${folder}/${image}.png`;
        break;
    }
    console.log("src ", src);
    return src;
  }, [selected]);

  useEffect(() => {
    const image = getImage();
    setSrc(image);
  }, [getImage, selected]);

  return (
    <Modal
      show={imageId !== -1}
      onClick={() => {
        setImageId(-1);
      }}
    >
      <div className="flex gap-3 items-center justify-center h-full w-full">
        {/* images */}
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {/* picker */}
          <div className="flex flex-row lg:flex-col gap-3">
            {rulebreakers[imageId - 1]?.extras.map((item, index) => (
              <ImageShimmer
                key={index}
                src={`/images/rulebreakers/${folder}/${formatImageSrc(
                  index + 1
                )}.png`}
                alt="BRKRS"
                width={75}
                height={75}
                className={`cursor-pointer ${
                  selected === index + 1 ? "outline" : ""
                }`}
                hover
                onClick={() => setSelected(index + 1)}
              />
            ))}
          </div>
          <AnimatePresence mode="wait">
            {imageId > -1 && (
              <motion.div
                className="flex flex-col gap-4 items-center"
                key="main"
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                // {...slideUp(true)}
              >
                <ImageShimmer
                  src={src ?? mainImage}
                  alt="BRKRS"
                  width={400}
                  height={400}
                  className=""
                  // onLoadingComplete={() =>
                  //   setAssets && setAssets((prevState) => [(prevState[0] = true)])
                  // }
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Modal>
  );
};

export default GalleryModal;
