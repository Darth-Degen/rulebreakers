import { Dispatch, FC, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExchangeIcon, TwitterIcon } from "@components";
import { Collab } from "@types";

interface CollabItemProps {
  index: number;
  item: Collab;
  setImageModal: Dispatch<SetStateAction<string>>;
}

const CollabItem: FC<CollabItemProps> = (props: CollabItemProps) => {
  const { index, item, setImageModal } = props;
  const [progrss, setProgress] = useState<number>(0);

  const getId = (id: number): string => {
    if (id < 10) return ("00" + id) as string;
    return ("0" + id) as string;
  };
  return (
    <div
      className={`rounded-lg md:rounded relative flex flex-col items-center w-full gap-3 py-1`}
    >
      <motion.div
        className="medium-frame relative cursor-pointer w-[250px] h-[250px] overflow-hidden"
        onClick={() => setImageModal(item.src)}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {item.isVideo ? (
          <video width="300" height="300" controls loop>
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={item.src}
            alt={`Colab-${index}`}
            // height={300}
            // width={300}
            style={{ objectFit: "cover" }}
            fill
            className="rounded-sm "
          />
        )}
      </motion.div>
      <p className="hh-name text-center w-full text-[9px] md:text-[10px] max-w-[200px]">
        {item.label}
      </p>
      <div className="flex gap-2">
        <div
          className={`cursor-pointer hover:outline hover:outline-white rounded-full transition-all duration-100`}
          onClick={() => window.open(item.url, "_blank", "noreferrer")}
        >
          <ExchangeIcon size={30} />
        </div>
        <div className=" transition-all duration-100` hover:outline hover:outline-white rounded-full">
          <TwitterIcon url={item.twitter} />
        </div>
      </div>
    </div>
  );
};

export default CollabItem;
