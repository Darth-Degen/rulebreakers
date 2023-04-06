import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { midClickAnimation } from "@constants";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <div className="my-0 flex items-center gap-2 text-gray-200 cursor-pointer">
      <Link href="/">
        <motion.div {...midClickAnimation}>
          <Image
            src="/images/logo_sm.png"
            height={216 / 2.75}
            width={216 / 2.75}
            alt="BRKR"
          />
        </motion.div>
      </Link>
    </div>
  );
};
export default Logo;
