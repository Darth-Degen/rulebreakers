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
import { Dropdown } from "@components";
import { Rulebreakers } from "@types";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const AssetsView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  const [selectedAsset, setSelectedAsset] = useState<
    Rulebreakers | undefined
  >();

  const [winWidth, winHeight] = useWindowSize();

  const handleSelect = (item: Rulebreakers): void => {
    setSelectedAsset(item);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-cen sm:px-10 mt-28 2xl:mt-32 gap-4 xl:gap-8">
      <motion.h2
        className="text-8xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0 px-5"
        // {...slideDown(showView)}
        {...enterAnimation}
      >
        Assets
      </motion.h2>
      <motion.div
        className="flex flex-col md:flex-row gap-4 justify-center items-center"
        // {...slideUp(showView)}
        {...enterAnimation}
      >
        <Dropdown
          handleClick={handleSelect}
          label={!selectedAsset ? "Select" : selectedAsset.name}
          collections={rulebreakers}
        />
      </motion.div>
      {/* setDidHover,
    ,
    label,
    collections,/> */}
    </div>
  );
};

export default AssetsView;
