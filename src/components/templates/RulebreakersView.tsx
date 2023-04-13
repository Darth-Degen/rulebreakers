import { Dispatch, SetStateAction, FC, useContext } from "react";
import { ViewContext } from "@constants";
import { BrkrsLanding, Gallery } from "@components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "@hooks";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const RulebreakersView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  const [winWidth, winHeight] = useWindowSize();
  const { scrollY, scrollYProgress } = useScroll();
  const y = useTransform(scrollY, [0, winHeight], [0, 300]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start sm:px-10 ">
      <BrkrsLanding setAssets={setAssets} showView={showView} />
      <motion.div
        className="h-[60vh] md:h-[85vh] flex flex-col justify-start items-center gap-4 w-screen mt-52"
        style={{ y }}
      >
        <h2 className="text-8xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0 my-10 px-5">
          gallery
        </h2>
        <Gallery />
      </motion.div>
    </div>
  );
};

export default RulebreakersView;
