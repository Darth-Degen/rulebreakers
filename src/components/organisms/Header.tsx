import { FC, useEffect, useRef, useState } from "react";
import { Logo, Menu } from "@components";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "framer-motion";
import Image from "next/image";
import { menuAnimation } from "@constants";

interface Props {
  showHeader?: boolean; //used to show header if isStatic is false
  headerType?: string;
}

const Header: FC<Props> = (props: Props) => {
  const { headerType = "absolute", showHeader = true } = props;

  const [header, setHeader] = useState<boolean>(true);

  //scroll variables
  const scrollRef = useRef<number>();
  const { scrollY, scrollYProgress } = useScroll();
  const height = 104;
  const headerVariants: Variants = {
    show: {
      y: 0,
      transition: {
        delay: 0.25,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    hidden: {
      y: -height,
      transition: {
        delay: 0.25,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // if (latest > 0.95) setHeader(true);
    if (latest < 0.1) setHeader(true);
  });

  //hide header on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    //first instance
    if (scrollRef.current === undefined) {
      setHeader(false);
      scrollRef.current = latest;
      return;
    }

    //scroll down
    if (scrollRef.current < latest) {
      if (scrollRef.current + 30 < latest) {
        setHeader(false);
        scrollRef.current = latest;
      }
      return;
    }

    //scroll up
    if (scrollRef.current > latest) {
      if (scrollRef.current > latest + 30) {
        setHeader(true);
        scrollRef.current = latest;
      }
      return;
    }
  });

  useEffect(() => {
    setHeader(showHeader);
  }, [showHeader]);

  return (
    <header
      className={`top-0 z-10 transition-all duration-500 ${
        headerType === "scroll" ? "fixed" : headerType
      } `}
      // ${headerType === "absolute" ? " opacity-100" : " opacity-90"} `}
    >
      {headerType !== "scroll" ? (
        <HeaderItems />
      ) : (
        <motion.aside
          variants={headerVariants}
          initial={showHeader ? "show" : "hidden"}
          animate={header ? "show" : "hidden"}
        >
          <HeaderItems />
        </motion.aside>
      )}
    </header>
  );
};

const HeaderItems: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="w-screen flex items-center justify-between px-4 md:px-6 py-4 z-20">
      <Logo />
      <AnimatePresence mode="wait">
        {!openMenu ? (
          <motion.div
            key="menu-icon"
            onClick={() => setOpenMenu(true)}
            {...menuAnimation}
            className="cursor-pointer mr-2 lg:mr-4 "
          >
            <Image
              src="/images/icons/menu.png"
              height={216 / 4}
              width={216 / 4}
              alt="menu"
              priority
            />
          </motion.div>
        ) : (
          <motion.div
            onClick={() => setOpenMenu(false)}
            className="cursor-pointer z-[100] lg:mr-2"
            {...menuAnimation}
          >
            <Image
              src="/images/icons/close.png"
              height={216 / 3.3}
              width={216 / 3.3}
              alt="menu"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Menu toggleMenu={setOpenMenu} open={openMenu} />
    </div>
  );
};
export default Header;
