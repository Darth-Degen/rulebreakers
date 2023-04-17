import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext } from "react";
import { ViewContext, slideDown } from "@constants";
import { IconBar } from "@components";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center lg:justify-end 3xl:justify-center">
      <motion.div {...slideDown(showView)}>
        <Image
          src="/images/logo_lg.png"
          alt="RULEBREAKERS"
          width={1113}
          height={721}
          className="px-2 lg:px-20 2xl:px-0"
          onLoadingComplete={() =>
            setAssets && setAssets((prevState) => [(prevState[0] = true)])
          }
        />
      </motion.div>
      <IconBar className="lg:hidden absolute bottom-3" />
    </div>
  );
};

export default LandingView;
