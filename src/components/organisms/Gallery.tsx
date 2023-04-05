import { Dispatch, FC, SetStateAction } from "react";
import { GalleryItem, ScrollItem } from "@components";
import { Collection } from "@types";
import { useWindowSize } from "@hooks";
import { motion } from "framer-motion";

interface GalleryProps {
  collection: Collection[];
  setImageModal: Dispatch<SetStateAction<string>>;
}

const Gallery: FC<GalleryProps> = (props: GalleryProps) => {
  const { collection, setImageModal } = props;
  const [winWidth, winHeight] = useWindowSize();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const getDelayOrder = (index: number): number => {
    if (winWidth >= 2160) {
      return index <= 20 ? index % 20 : index % 5;
    } else if (winWidth >= 1536) {
      return index <= 8 ? index % 8 : index % 4;
    } else if (winWidth > 768) {
      return index <= 15 ? index % 15 : index % 3;
    } else {
      return index <= 6 ? index % 6 : index % 2;
    }

    // else if (winWidth < 767) {
    //   return index < 6 ? index % 6 : index % 2;
    // }
    // return index < 6 ? index % 6 : index % 3;
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-2 md:gap-x-8 md:gap-y-3 md:px-6  py-5"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {collection &&
        collection.map((item, index) => {
          return (
            <ScrollItem
              duration={1}
              key={index}
              index={getDelayOrder(index)}
              enableY={true}
              isInViewOnce={true}
            >
              <GalleryItem
                key={index}
                index={index}
                setImageModal={setImageModal}
                src={item.src}
                url={item.url}
              />
            </ScrollItem>
          );
        })}
    </motion.div>
  );
};

export default Gallery;
