import {
  Dispatch,
  SetStateAction,
  FC,
  useState,
  useEffect,
  useCallback,
  useRef,
  DetailedHTMLProps,
  HTMLAttributes,
  LegacyRef,
} from "react";
import { ImageShimmer, Modal } from "@components";
import { midClickAnimation, rulebreakers } from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import download from "downloadjs";

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
  const brkr = rulebreakers[imageId - 1];

  const getImage = useCallback((): string => {
    const image = formatImageSrc(selected);
    let src = "";
    switch (selected) {
      case 0:
        src = `/images/rulebreakers/${folder}.png`;
        break;
      default:
        src = `/images/rulebreakers/${folder}/${image}.png`;
        break;
    }
    return src;
  }, [folder, selected]);

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
      <div className="flex gap-3 flex-col-reverse lg:flex-row items-center justify-center h-full w-full mt-10 lg:mt-0 p-10 overflow-y-auto lg:overflow-hidden">
        {/* col 1 - images */}
        <div className="flex flex-col gap-4 items-center justify-center h-full mt-4 lg:mt-12 mb-52 lg:mb-0">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-6">
            {/* picker */}
            <div className="flex flex-row lg:flex-col gap-4 h-full justify-center">
              <ImageShimmer
                src={mainImage}
                alt="BRKRS"
                width={75}
                height={75}
                className={`cursor-pointer ${
                  selected === 0 ? "outline outline-[#F3B24E]" : ""
                }`}
                hover
                onClick={() => setSelected(0)}
              />
              {brkr?.extras.map((item, index) => (
                <ImageShimmer
                  key={index}
                  src={`/images/rulebreakers/${folder}/${formatImageSrc(
                    index + 1
                  )}.png`}
                  alt="BRKRS"
                  width={75}
                  height={75}
                  className={`cursor-pointer ${
                    selected === index + 1 ? "outline outline-[#F3B24E]" : ""
                  }`}
                  hover
                  onClick={() => setSelected(index + 1)}
                />
              ))}
            </div>
            {/* main image */}
            <AnimatePresence mode="wait">
              {imageId > -1 && (
                <motion.div
                  transition={{ duration: 1 }}
                  exit={{ opacity: 0 }}
                  key="main"
                >
                  <ImageShimmer
                    src={src ?? mainImage}
                    alt="BRKRS"
                    width={400}
                    height={400}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* download */}
          {src && (
            <motion.div
              className="cursor-pointer"
              {...midClickAnimation}
              onClick={() => download(src)}
            >
              <ImageShimmer
                src="/images/icons/download.png"
                height={40}
                width={40}
                alt="menu"
              />
            </motion.div>
          )}
        </div>
        {/* col 2 - text */}
        <div className="flex flex-col items-center justify-center h-full gap-8 text-center max-w-[400px] lg:px-10 lg:mt-6">
          <h2 className="text-5xl whitespace-nowrap sm:text-7xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0">
            {brkr.name}
          </h2>
          <p className="font-secondary text-sm md:text-base  ">
            {brkr.description}
          </p>
          <motion.div className="cursor-pointer" {...midClickAnimation}>
            <a href={""} rel="noreferrer" target="_blank">
              <ImageShimmer
                src="/images/icons/exchange.png"
                height={80}
                width={80}
                alt="menu"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </Modal>
  );
};

export default GalleryModal;
