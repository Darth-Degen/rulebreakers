import { FC, HTMLAttributes } from "react";
import { ImageShimmer, TextHeader } from "@components";
import { motion } from "framer-motion";
import { midClickAnimation } from "@constants";

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  header: string;
  description: string;
  exchangeUrl?: string;
  twitterUrl?: string;
}

const ModalContent: FC<ContentProps> = (props: ContentProps) => {
  const { header, description, exchangeUrl, twitterUrl, className } = props;
  return (
    <div
      className={`flex flex-col items-center justify-center h-full gap-8 text-center max-w-[400px] lg:px-10  mt-4 lg:mt-12 ${className}`}
    >
      <TextHeader> {header}</TextHeader>
      <p className="font-secondary text-sm md:text-base  ">{description}</p>
      {exchangeUrl && exchangeUrl.length > 0 && (
        <motion.div className="cursor-pointer" {...midClickAnimation}>
          <a href={exchangeUrl} rel="noreferrer" target="_blank">
            <ImageShimmer
              src="/images/icons/exchange.png"
              height={50}
              width={50}
              alt="menu"
            />
          </a>
        </motion.div>
      )}
    </div>
  );
};
export default ModalContent;
