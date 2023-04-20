import { FC, useState, HTMLAttributes } from "react";
import {
  rulebreakers,
  enterAnimation,
  midExitAnimation,
  midClickAnimation,
} from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import { Dropdown, ImageShimmer, TabSelector } from "@components";
import { Rulebreakers } from "@types";
import download from "downloadjs";
import Image from "next/image";

const AssetsView: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedAsset, setSelectedAsset] = useState<
    Rulebreakers | undefined
  >();

  const handleSelect = (item: Rulebreakers): void => {
    setSelectedAsset(item);
  };

  const getSrc = (id: number, phone?: boolean): string => {
    let src = "";
    switch (id) {
      case 0:
        src = `/images/assets/image/${
          selectedAsset?.name.replace(" ", "-") ?? "pencilx"
        }.png`;
        break;
      case 1:
        src = `/images/assets/banner/${
          selectedAsset?.name.replace(" ", "-") ?? "pencilx"
        }.png`;
        break;
      case 2:
        src = `/images/assets/${phone ? "phone" : "laptop"}/${
          selectedAsset?.name.replace(" ", "-") ?? "pencilx"
        }.png`;
        console.log("src ", src);
        break;
    }
    return src;
  };

  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-start px-6 sm:px-10 mt-28 lg:mt-24 3xl:mt-32"
      {...enterAnimation}
    >
      <Dropdown
        handleClick={handleSelect}
        label={!selectedAsset ? "Select Asset" : selectedAsset.name}
        collections={rulebreakers}
      />

      <div className="flex flex-col items-center justify-center 3xl:justify-center gap-10 md:gap-2 lg:gap-12 3xl:gap-14 h-full pt-6 md:pt-0">
        <TabSelector
          tabs={["full pfp", "banner", "wallpaper"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          className="lg:ml-14 2xl:ml-16"
        />
        <div className="flex flex-col gap-2 items-center">
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <Asset
                key={0}
                src={getSrc(activeTab)}
                className="h-[38vh]  w-screen md:w-[80vh] -z-10 py-10 px-2 !self-center"
              />
            )}
            {activeTab === 1 && (
              <Asset
                key={1}
                src={getSrc(activeTab) ?? `/images/assets/banner/pencilx.png`}
                className="h-[38vh]  w-screen md:w-[80vh] -z-10 py-10 px-2 !self-center"
              />
            )}
            {activeTab === 2 && (
              <motion.div
                className="flex flex-col md:flex-row md:gap-10 lg:gap-20"
                key={2}
                {...midExitAnimation}
              >
                <Asset
                  src={
                    getSrc(activeTab, true) ??
                    `/images/assets/phone/pencilx.png`
                  }
                  className="h-[38vh]  w-screen md:w-[20vh] -z-10 py-10 px-2 !self-center"
                />
                <Asset
                  src={getSrc(activeTab) ?? `/images/assets/pfp/laptop.png`}
                  className="h-[38vh]  w-screen md:w-[60vh] -z-10 py-10 px-2 !self-center"
                />
              </motion.div>
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
        hover
        fill
        objectFit="contain"
        alt="asset"
        animation={midExitAnimation}
        className={className}
      />
      <motion.div
        className="cursor-pointer pt-4"
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

export default AssetsView;
