import { motion } from "framer-motion";
import { FC, HTMLAttributes } from "react";
import { midClickAnimation } from "src/constants";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {
  showExchange?: boolean;
}
const IconBar: FC<Props> = (props: Props) => {
  const { showExchange = true, className } = props;
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <motion.div className="cursor-pointer" {...midClickAnimation}>
        <a
          href={"https://discord.gg/4RTbsVnJ"}
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/images/icons/discord.png"
            height={144 / 2.5}
            width={144 / 2.5}
            alt="menu"
          />
        </a>
      </motion.div>
      <motion.div className="cursor-pointer" {...midClickAnimation}>
        <a
          href={"https://twitter.com/rulebreakers___"}
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/images/icons/twitter.png"
            height={144 / 2.5}
            width={144 / 2.5}
            alt="menu"
          />
        </a>
      </motion.div>
      {showExchange && (
        <motion.div className="cursor-pointer" {...midClickAnimation}>
          <a
            href={"https://exchange.art/series/RULE%20BREAKERS/nfts"}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              src="/images/icons/exchange.png"
              height={144 / 2.5}
              width={144 / 2.5}
              alt="menu"
            />
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default IconBar;
