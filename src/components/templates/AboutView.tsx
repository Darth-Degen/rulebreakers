import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext } from "react";
import { ViewContext, slideLeft, slideRight } from "@constants";
import { TextHeader } from "@components";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const AboutView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div
      className="w-full flex flex-col mt-28 xl:mt-0 xl:flex-row items-center xl:items-start justify-center sm:px-10 gap-8 xl:gap-8 3xl:gap-32 overflow-hidden
        xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-y-1/2 xl:-translate-x-1/2"
    >
      {/* content */}
      <motion.div
        className="flex flex-col items-center justify-center gap-8 xl:gap-4 text-center max-w-[550px] px-2"
        {...slideRight(showView)}
      >
        <TextHeader>About</TextHeader>
        <p className="font-secondary text-sm md:text-base 3xl:text-xl px-3 max-w-[500px]">
          A community of those who aren&apos;t afraid to break the rules
          sometimes. Maybe a little rough around the edges. Who defy the norms
          of society. Doing things their own way. Punks, Creatives, Brutes,
          Thieves, Vandals.... BRKRS. A 1/1 PFP experiment by PENCILX.
        </p>
      </motion.div>
      {/* image */}
      <motion.div {...slideLeft(showView)}>
        <Image
          src="/images/about_graphic.png"
          alt="BRKRS"
          width={700}
          height={419}
          className="-mt-9 3xl:mt-0  scale-90 lg:scale-100 3xl:scale-125 mb-8 md:mb-0"
          onLoadingComplete={() =>
            setAssets && setAssets((prevState) => [(prevState[0] = true)])
          }
        />
      </motion.div>
    </div>
  );
};

export default AboutView;
