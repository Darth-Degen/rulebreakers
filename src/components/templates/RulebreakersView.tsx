import { Dispatch, SetStateAction, FC, useContext } from "react";
import { ViewContext } from "@constants";
import { BrkrsLanding, Gallery, ImageShimmer } from "@components";
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

  const showTransform = winWidth >= 768;
  const y = useTransform(scrollY, [0, winHeight], [0, 300]);
  const y2 = useTransform(scrollY, [0, winHeight], [0, 600]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start sm:px-10 ">
      <BrkrsLanding setAssets={setAssets} showView={showView} />
      <motion.div
        className="h-[20vh] lg:h-[60vh] w-screen  flex items-center justify-center bg-opacity-50 "
        style={{ y: y2 }}
      >
        {/* <ImageShimmer
          src="/images/about_graphic.png"
          alt="BRKRS"
          width={700}
          height={419}
          className="-mt-9 3xl:mt-0  scale-90 lg:scale-100 3xl:scale-125 mb-8 md:mb-0"
          // onLoadingComplete={() =>
          //   setAssets && setAssets((prevState) => [(prevState[0] = true)])
          // }
        /> */}
      </motion.div>
      <motion.div
        className="h-[60vh] md:h-[85vh] flex flex-col justify-start items-center gap-4 w-screen md:mt-52"
        style={{ y: showTransform ? y : 0 }}
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
