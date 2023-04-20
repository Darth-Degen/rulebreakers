import { Dispatch, FC, SetStateAction, useContext, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Collab } from "@types";
import { imageLoadAnimation, ViewContext } from "@constants";
interface CollabItemProps {
  index: number;
  item: Collab;
}

const CollabItem: FC<CollabItemProps> = (props: CollabItemProps) => {
  const { index, item } = props;
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const { setCollabModal } = useContext(ViewContext);

  const handleClick = (): void => {
    setCollabModal({
      id: index,
      type: item.image_path.includes("/editions/") ? "editions" : "collabs",
    });
  };
  console.log("item.image_path ", item.image_path);
  return (
    <div
      className={`rounded-lg md:rounded relative flex flex-col items-center w-full gap-3 py-1 overflow-hidden`}
    >
      <motion.div
        className="relative cursor-pointer w-[175px] h-[175px] overflow-hidden"
        onClick={(e) => {
          e.stopPropagation();
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {!imageLoaded && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-custom-dark-gray via-custom-black to-custom-dark-gray rounded opacity-40"
            style={{
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s ease-in-out infinite",
            }}
            {...imageLoadAnimation(!imageLoaded)}
          />
        )}
        {item.image_path.endsWith(".mp4") ||
        item.image_path.endsWith(".mov") ? (
          <motion.video
            width="300"
            height="300"
            controls
            loop
            onLoadedData={() => {
              setImageLoaded(true);
            }}
            className="rounded"
            onClick={() => handleClick()}
          >
            <source src={item.image_path} type="video/mp4" />
          </motion.video>
        ) : (
          <Image
            src={item.image_path}
            alt={`Colab-${index}`}
            style={{ objectFit: "cover" }}
            fill
            onLoadingComplete={() => {
              setImageLoaded(true);
            }}
            className="rounded"
            onClick={() => handleClick()}
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
