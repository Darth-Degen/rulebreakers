import { Dispatch, SetStateAction, FC, useContext, useState } from "react";
import {
  ViewContext,
  slideDown,
  slideUp,
  rulebreakers,
  enterAnimation,
} from "@constants";
import { motion } from "framer-motion";
import { useWindowSize } from "@hooks";
import { Dropdown, ImageShimmer, TabSelector } from "@components";
import { Rulebreakers } from "@types";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const AssetsView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  const [activeTab, setActiveTab] = useState<number>(0);

  const [selectedAsset, setSelectedAsset] = useState<
    Rulebreakers | undefined
  >();

  const [winWidth, winHeight] = useWindowSize();

  const handleSelect = (item: Rulebreakers): void => {
    setSelectedAsset(item);
  };

  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-start sm:px-10 mt-24 3xl:mt-32 gap-10"
      {...enterAnimation}
    >
      <Dropdown
        handleClick={handleSelect}
        label={!selectedAsset ? "Select Asset" : selectedAsset.name}
        collections={rulebreakers}
        className="mt-3"
      />

      <div className="flex flex-col items-center justify-evenly 3xl:justify-center 3xl:gap-14 gap-4 h-full">
        <TabSelector
          tabs={["pfp crop", "banner", "wallpaper"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <ImageShimmer
          src="/images/assets/laptop/pencilz.png"
          // width={5217 / 7}
          // height={3401 / 7}
          fill
          objectFit="contain"
          alt="asset"
          className="h-[40vh] lg:h-[45vh] w-screen md:w-[80vh] -z-10 py-10 md:py-10 2xl:pt-10 px-2"
        />
      </div>
    </motion.div>
  );
};

export default AssetsView;
