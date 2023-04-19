import { FC } from "react";
import { ImageShimmer, TextHeader } from "@components";
import { motion } from "framer-motion";
import { midClickAnimation } from "@constants";

interface ContentProps {
  header: string;
  description: string;
  exchangeUrl?: string;
  twitterUrl?: string;
}

const ModalContent: FC<ContentProps> = (props: ContentProps) => {
  const { header, description, exchangeUrl, twitterUrl } = props;
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 text-center max-w-[400px] lg:px-10 lg:mt-6">
      <TextHeader> {header}</TextHeader>
      <p className="font-secondary text-sm md:text-base  ">{description}</p>
      <motion.div className="cursor-pointer" {...midClickAnimation}>
        <a href={exchangeUrl} rel="noreferrer" target="_blank">
          <ImageShimmer
            src="/images/icons/exchange.png"
            height={80}
            width={80}
            alt="menu"
          />
        </a>
      </motion.div>
    </div>
  );
};
export default ModalContent;
