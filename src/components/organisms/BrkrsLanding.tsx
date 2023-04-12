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
  // transform values
  const y = useTransform(scrollY, [0, winHeight * 2], [0, winHeight * 1.25]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
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
        className="flex flex-col justify-between items-center gap-4 pt-32 h-full w-full px-10 overflow-clip"
        {...exitAnimation}
      >
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
        <motion.div {...slideUp(showView)}>
          <Image
            src="/images/rulebreakers_graphic.png"
            width={804}
            height={676}
            alt="Logo"
            onLoadingComplete={() =>
              setAssets && setAssets((prevState) => [(prevState[1] = true)])
            }
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BrkrsLanding;
