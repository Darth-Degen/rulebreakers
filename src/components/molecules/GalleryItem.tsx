import { Dispatch, FC, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExchangeIcon } from "@components";

interface GalleryItemProps {
  index: number;
  setImageModal: Dispatch<SetStateAction<string>>;
  src: string;
  url: string;
}

const GalleryItem: FC<GalleryItemProps> = (props: GalleryItemProps) => {
  const { index, setImageModal, src, url } = props;
  const [progrss, setProgress] = useState<number>(0);
  // const ref = useRef(null) as RefObject<HTMLDivElement> | undefined;

  // const { scrollY } = useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"],
  // });

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   // console.log("child scroll: ", latest);
  //   setProgress(latest);
  // });

  const getId = (id: number): string => {
    if (id < 10) return ("00" + id) as string;
    return ("0" + id) as string;
  };

  return (
    <div className="relative flex flex-col items-center" key={index}>
      <motion.div
        className="medium-frame cursor-pointer relative"
        key={index}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        onClick={() => setImageModal(src)}
      >
        <Image
          src={src}
          alt={`HH-${index}`}
          width={200}
          height={200}
          className=""
        />
        {url && (
          <div
            className="absolute top-1.5 right-1.5 md:top-2.5 md:right-2.5 cursor-pointer hover:outline hover:outline-white rounded-full transition-all duration-100"
            onClick={() => window.open(url, "_blank", "noreferrer")}
          >
            <ExchangeIcon size={25} />
          </div>
        )}
      </motion.div>
      <p className="hh-name text-center mt-4 mb-1 w-full text-[10px]  max-w-[200px]">
        #{getId(index)}
      </p>
    </div>
  );
};

export default GalleryItem;
