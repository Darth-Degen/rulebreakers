import { Dispatch, SetStateAction, FC, useContext } from "react";
import { ViewContext } from "@constants";
import { BrkrsLanding, Gallery, TextHeader } from "@components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "@hooks";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const RulebreakersView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  const [winWidth, winHeight] = useWindowSize();
  const { scrollY } = useScroll();

  const showTransform = winWidth >= 768;
  const y = useTransform(scrollY, [0, winHeight], [0, 300]);
  const y2 = useTransform(scrollY, [0, winHeight], [0, 600]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start sm:px-10 ">
      <BrkrsLanding setAssets={setAssets} showView={showView} />
      <motion.div
        className="h-[20vh] lg:h-[40vh] w-screen  flex items-center justify-center bg-opacity-50 "
        style={{ y: y2 }}
      ></motion.div>
      <motion.div
        className="h-[60vh] md:h-[85vh] flex flex-col justify-center items-center gap-4 w-screen md:mt-52"
        style={{ y: showTransform ? y : 0 }}
      >
        <TextHeader>gallery</TextHeader>
        <Gallery />
      </motion.div>
    </div>
  );
};

export default RulebreakersView;
