import { FC, useContext, useState, HTMLAttributes } from "react";
import {
  ViewContext,
  rulebreakers,
  enterAnimation,
  midExitAnimation,
  midClickAnimation,
} from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "@hooks";
import { TextHeader, ImageShimmer, TabSelector } from "@components";
import { Rulebreakers } from "@types";
import download from "downloadjs";
import Image from "next/image";

const MoreView: FC = () => {
  const { setGalleryModalId } = useContext(ViewContext);

  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedAsset, setSelectedAsset] = useState<
    Rulebreakers | undefined
  >();

  const mainImage = `/images/assets/pfp/pencilz.png`;

  const handleSelect = (item: Rulebreakers): void => {
    setSelectedAsset(item);
  };

  const getSrc = (id: number, phone?: boolean): string => {
    let src = "";
    switch (id) {
      case 0:
        src = `/images/assets/pfp/${
          selectedAsset?.name.replace(" ", "-") ?? "pencilz"
        }.png`;
        break;
      case 1:
        src = `/images/assets/banner/${
          selectedAsset?.name.replace(" ", "-") ?? "pencilz"
        }.png`;
        break;
      case 2:
        src = `/images/assets/${phone ? "phone" : "laptop"}/${
          selectedAsset?.name.replace(" ", "-") ?? "pencilz"
        }.png`;
        break;
    }
    return src;
  };

  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-start sm:px-10 mt-32 lg:mt-24 3xl:mt-32 "
      {...enterAnimation}
    >
      <TextHeader>More</TextHeader>

      <div className="flex flex-col items-center justify-evenly 3xl:justify-center gap-10 md:gap-2 3xl:gap-14 h-full pt-6 md:pt-0">
        <TabSelector
          tabs={["collabs", "editions"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="flex flex-col gap-2 items-center">
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <Asset
                key={0}
                src={getSrc(activeTab)}
                className="h-[40vh] lg:h-[45vh] w-screen md:w-[80vh] -z-10 py-10 px-2 !self-center"
              />
            )}
            {activeTab === 1 && (
              <Asset
                key={1}
                src={getSrc(activeTab) ?? `/images/assets/banner/pencilz.png`}
                className="h-[40vh] lg:h-[45vh] w-screen md:w-[80vh] -z-10 py-10 px-2 !self-center"
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  key?: number;
  src: string;
}
const Asset: FC<Props> = (props: Props) => {
  const { key = 99, src, className } = props;
  return (
    <motion.div className="flex flex-col items-center" key={key}>
      <ImageShimmer
        key={0}
        src={src}
        height={300}
        width={300}
        alt="asset"
        animation={midExitAnimation}
        className={className}
      />
      <motion.div
        className="cursor-pointer pt-2"
        {...midClickAnimation}
        onClick={() => download(src)}
      >
        <Image
          src="/images/icons/download.png"
          height={40}
          width={40}
          alt="menu"
        />
      </motion.div>
    </motion.div>
  );
};

export default MoreView;
