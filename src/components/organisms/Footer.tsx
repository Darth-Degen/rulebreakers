import { FC, useState } from "react";
import { ExpIcon, IconBar } from "@components";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { enterAnimation } from "@constants";
import { useRouter } from "next/router";
import { useWindowSize } from "@hooks";

const Footer: FC = () => {
  const [animate, setAnimate] = useState<boolean>(false);

  const [winWidth, winHeight] = useWindowSize();
  const { scrollY } = useScroll();
  const router = useRouter();
  const showTransform = router.asPath === "/rulebreakers" && winWidth >= 768;

  //matches parralax on screens so that it is consistent with layout
  const y = useTransform(
    scrollY,
    [0, showTransform ? 300 : 0],
    [0, showTransform ? 300 : 0]
  );

  //exp hover animation
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
      className="px-8 py-4 w-full bg-transparent z-0  bottom-0"
      key="footer"
      // {...midEnterAnimation}
      style={{ y }}
    >
      <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4">
        <motion.div className="sm:w-1/3" {...enterAnimation}>
          <Link href="/">
            <Image
              src="/images/logo_md.png"
              width={531 / 4}
              height={261 / 4}
              alt="Logo"
              priority
            />
          </Link>
        </motion.div>
        <div className="sm:w-1/3">
          <IconBar className="" />
          <div className="hidden flex-col md:flex-row items-center justify-center gap-4 lg:gap-14 text-3xl md:text-4xl text-white">
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
        <div className="hidden sm:flex sm:w-1/3  justify-end gap-2">
          {/* exp */}
          <motion.div
            className="flex xl:w-1/4 justify-end "
            {...enterAnimation}
          >
            <a
              className="relative cursor-pointer whitespace-nowrap"
              href="https://twitter.com/sol_exp"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="rounded"
                {...containerAnimation}
                onMouseEnter={() => setAnimate(true)}
                onMouseLeave={() => setAnimate(false)}
              >
                <ExpIcon color={"white"} />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
