import { useScroll, useTransform, motion } from "framer-motion";
import { FC } from "react";
import { useWindowSize } from "@hooks";
import Image from "next/image";

const Gallery: FC = () => {
  const [winWidth, winHeight] = useWindowSize();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, winHeight], [0, 300]);

  return (
    <motion.div
      className="md:h-screen flex flex-col justify-between items-center gap-4 w-screen"
      style={{ y }}
    >
      <h2 className="text-8xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0">
        gallery
      </h2>
      <h2 className="text-8xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0">
        gallery
      </h2>
      <h2 className="text-8xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0">
        gallery
      </h2>
      <h2 className="text-8xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0">
        gallery
      </h2>
      <h2 className="text-8xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0">
        gallery
      </h2>
      <h2 className="text-8xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0">
        gallery
      </h2>
      <h2 className="text-8xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0">
        gallery
      </h2>
      <h2 className="text-8xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0">
        gallery
      </h2>
      <h2 className="text-8xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0">
        gallery
      </h2>
    </motion.div>
  );
};

export default Gallery;
