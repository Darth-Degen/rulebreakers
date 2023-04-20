import { useScroll, useTransform, motion } from "framer-motion";
import { Dispatch, FC, SetStateAction } from "react";
import { useWindowSize } from "@hooks";
import Image from "next/image";
import { enterAnimation, exitAnimation, slideUp } from "src/constants";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
  showView: boolean;
}
const BrkrsLanding: FC<Props> = (props: Props) => {
  const { setAssets, showView } = props;

  const [winWidth, winHeight] = useWindowSize();
  const { scrollY, scrollYProgress } = useScroll();
  const showTransform = winWidth >= 768;
  // transform values
  const y = useTransform(
    scrollY,
    [0, showTransform ? winHeight * 2 : 0],
    [0, showTransform ? winHeight * 1.25 : 0]
  );
  const y2 = useTransform(
    scrollY,
    [0, showTransform ? winHeight * 2 : 0],
    [0, showTransform ? winHeight * 1.75 : 0]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="relative">
      <motion.div
        className="h-screen w-screen"
        initial={{ opacity: 1 }}
        style={{
          y,
          scale,
          opacity,
        }}
      >
        <motion.div
          key="landing"
          className="flex flex-col justify-between items-center gap-4 pt-32 h-full w-full px-10"
          {...exitAnimation}
        >
          {/* header */}
          <motion.div {...enterAnimation}>
            <Image
              src="/images/logo_md_white.png"
              width={1510 / 5}
              height={621 / 5}
              alt="Logo"
              onLoadingComplete={() =>
                setAssets && setAssets((prevState) => [(prevState[0] = true)])
              }
            />
          </motion.div>
          {/*  silhouette */}
          <motion.div {...slideUp(showView)} className="mb-12 lg:-mb-32">
            <Image
              src="/images/rulebreakers_graphic.png"
              width={800}
              height={800}
              alt="Logo"
              onLoadingComplete={() =>
                setAssets && setAssets((prevState) => [(prevState[1] = true)])
              }
              className="px-0 md:px-20 xl:px-0"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      {/* scroll arrows */}
      <motion.div
        initial={{ opacity: 1 }}
        style={{
          y: y2,
          opacity,
        }}
      >
        <Image
          src="/images/scrollnow.png"
          width={200}
          height={200}
          alt="Scroll"
          onLoadingComplete={() =>
            setAssets && setAssets((prevState) => [(prevState[1] = true)])
          }
          className="absolute left-1/2 top-1/3 transform -translate-x-1/2 md:-translate-x-0 md:left-auto sm:top-auto sm:right-0 sm:-bottom-10 "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        style={{
          y: y2,
          opacity,
        }}
      >
        <Image
          src="/images/scrollnow.png"
          width={200}
          height={200}
          alt="Scroll"
          onLoadingComplete={() =>
            setAssets && setAssets((prevState) => [(prevState[1] = true)])
          }
          className="hidden md:block absolute left-0 -bottom-10"
        />
      </motion.div>
    </div>
  );
};

export default BrkrsLanding;
