import { FC, useState } from "react";
import { ExpIcon, IconBar } from "@components";
import Image from "next/image";
import { motion } from "framer-motion";
import { midEnterAnimation } from "@constants";
import Link from "next/link";

const Footer: FC = () => {
  const [animate, setAnimate] = useState<boolean>(false);

  const containerAnimation = {
    animate: {
      opacity: 1,
      rotate: animate ? -90 : 0,
    },
    exit: { opacity: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <motion.footer
      className="px-8 py-4 bottom-0 w-full bg-transparent"
      key="footer"
      {...midEnterAnimation}
    >
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="sm:w-1/3">
          <Link href="/">
            <Image
              src="/images/logo_md.png"
              width={531 / 4}
              height={261 / 4}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="sm:w-1/3">
          <IconBar className="xl:hidden" />
          <div className="hidden xl:flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-14 text-3xl md:text-4xl text-white">
            <a
              href="https://twitter.com/rulebreakers___"
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer hover:bg-clip-text hover:bg-orange-gradient hover:text-transparent transition-bg duration-200"
            >
              Twitter
            </a>
            <a
              href="https://twitter.com/rulebreakers___"
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer hover:bg-clip-text hover:bg-orange-gradient hover:text-transparent transition-bg duration-200"
            >
              Discord
            </a>
            <a
              href="https://twitter.com/rulebreakers___"
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer hover:bg-clip-text hover:bg-orange-gradient hover:text-transparent transition-bg duration-200"
            >
              Marketplace
            </a>
          </div>
        </div>
        <div className="sm:w-1/3 flex justify-end gap-2">
          {/* exp */}
          <div className="flex xl:w-1/4 justify-end ">
            <a
              className="relative cursor-pointer whitespace-nowrap"
              href="https://twitter.com/sol_exp"
              target="_blank"
              rel="noreferrer"
            >
              <div className=" flex flex-row-reverse md:flex-col gap-2 md:gap-0 items-center font-daysOne">
                <motion.div
                  className="rounded"
                  {...containerAnimation}
                  onMouseEnter={() => setAnimate(true)}
                  onMouseLeave={() => setAnimate(false)}
                >
                  <ExpIcon color={"white"} />
                </motion.div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
