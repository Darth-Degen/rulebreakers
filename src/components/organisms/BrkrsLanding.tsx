import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { FC, useState } from "react";
import { useWindowSize } from "@hooks";
import Image from "next/image";
import { exitAnimation, slideUp } from "src/constants";
import { debounce } from "lodash";

const BrkrsLanding: FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const [winWidth, winHeight] = useWindowSize();
  const { scrollY, scrollYProgress } = useScroll();
  // transform values
  const y = useTransform(scrollY, [0, winHeight * 2], [0, winHeight * 1.25]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const debouncer = debounce((value) => setScrollProgress(value), 100);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    debouncer(latest as number);
  });

  return (
    <motion.div
      className="md:h-screen w-screen"
      initial={{ opacity: 1 }}
      // animate={{ opacity: 1 - scrollProgress }}
      style={{
        y,
        scale,
        opacity,
      }}
    >
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key="landing"
            className="flex flex-col justify-between items-center gap-4 pt-32 h-full w-full px-10 overflow-clip"
            {...exitAnimation}
          >
            <Image
              src="/images/logo_md_white.png"
              width={1510 / 5}
              height={621 / 5}
              alt="Logo"
            />
            <motion.div {...slideUp}>
              <Image
                src="/images/rulebreakers_graphic.png"
                width={804}
                height={676}
                alt="Logo"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BrkrsLanding;
function useEffect(
  arg0: () => () => void,
  arg1: import("framer-motion").MotionValue<number>[]
) {
  throw new Error("Function not implemented.");
}
function useRef() {
  throw new Error("Function not implemented.");
}
