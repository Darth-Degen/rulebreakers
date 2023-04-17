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
import { Dropdown, TabSelector } from "@components";
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
    <div className="w-full h-full flex flex-col items-center justify-cen sm:px-10 mt-24 gap-4 lg:gap-0 2xl:gap-4">
      <motion.h2
        className="text-8xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0"
        {...enterAnimation}
      >
        Assets
      </motion.h2>
      <motion.div
        className="flex flex-col justify-center items-center md:items-start gap-4 xl:gap-6"
        {...enterAnimation}
      >
        <Dropdown
          handleClick={handleSelect}
          label={!selectedAsset ? "Select" : selectedAsset.name}
          collections={rulebreakers}
          className="mt-3"
        />
      </motion.div>

      <div className="flex flex-col items-center justify-center">
        <TabSelector
          tabs={["pfp crop", "banner", "wallpaper"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      {/* setDidHover,
    ,
    label,
    collections,/> */}
    </div>
  );
};

export default AssetsView;
