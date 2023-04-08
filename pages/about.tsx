import { PageLayout } from "@components";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import { slideLeft, slideRight } from "@constants";
import { useWindowSize } from "@hooks";

const About: NextPage = () => {
  const [winWidth, winHeight] = useWindowSize();
  return (
    <PageLayout headerType={winWidth < 768 ? "scroll" : "absolute"}>
      <div
        className="w-full flex flex-col mt-28 xl:mt-0 xl:flex-row items-center xl:items-start justify-center sm:px-10 gap-8 xl:gap-8 3xl:gap-32 overflow-hidden
        xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-y-1/2 xl:-translate-x-1/2"
      >
        {/* content */}
        <motion.div
          className="flex flex-col items-center justify-center gap-8 xl:gap-4 text-center max-w-[550px] px-4 scale-90 lg:scale-100"
          {...slideRight}
        >
          <h2 className="text-8xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0">
            About
          </h2>
          <p className="font-secondary text-sm md:text-base 3xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint.
          </p>
        </motion.div>
        {/* image */}
        <motion.div {...slideLeft}>
          <Image
            src="/images/about_graphic.png"
            alt="BRKRS"
            width={700}
            height={419}
            className="-mt-9 3xl:mt-0  scale-90 lg:scale-100 3xl:scale-125 mb-8 md:mb-0"
          />
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default About;
