import { Dispatch, FC, SetStateAction } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Collab } from "@types";

interface CollabItemProps {
  index: number;
  item: Collab;
  setImageModal: Dispatch<SetStateAction<string>>;
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const CollabItem: FC<CollabItemProps> = (props: CollabItemProps) => {
  const { index, item, setImageModal, setAssets } = props;
  return (
    <div
      className={`rounded-lg md:rounded relative flex flex-col items-center w-full gap-3 py-1 overflow-hidden`}
    >
      <motion.div
        className="relative cursor-pointer w-[175px] h-[175px] overflow-hidden"
        onClick={(e) => {
          e.stopPropagation();
          setImageModal(item.image_path);
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {item.image_path.endsWith(".mp4") ||
        item.image_path.endsWith(".mov") ? (
          <video width="300" height="300" controls loop>
            <source src={item.image_path} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={item.image_path}
            alt={`Colab-${index}`}
            style={{ objectFit: "cover" }}
            fill
            onLoadingComplete={() =>
              setAssets && setAssets((prevState) => [(prevState[0] = true)])
            }
            // onLoadingComplete={() =>
            //   setAssets &&
            //   setAssets((prevState) => [
            //     ...prevState,
            //     (prevState[index] = true),
            //   ])
            // }
          />
        )}
      </motion.div>
      <p className="text-center w-full max-w-[200px] font-secondary ">
        {item.name}
      </p>
    </div>
  );
};

export default CollabItem;
