import { FC, useState } from "react";
import { Logo, Menu } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const menuAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: "easeInOut" },
  whileHover: { scale: 1.06 },
  whileTap: { scale: 1 },
};

const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <header className="absolute z-10 p-4 sm:p-6 flex justify-between items-center w-full">
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
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Menu toggleMenu={setOpenMenu} open={openMenu} />
    </header>
  );
};

export default Header;
