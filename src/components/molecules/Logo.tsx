import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { midClickAnimation, enterAnimation } from "@constants";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <motion.div
      className="my-0 flex items-center gap-2 cursor-pointer"
      {...enterAnimation}
    >
      <Link href="/">
        <motion.div {...midClickAnimation}>
          <Image
            src="/images/logo.png"
            height={216 / 2.75}
            width={216 / 2.75}
            alt="BRKR"
            priority
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};
export default Logo;
