import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { midClickAnimation } from "@constants";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <div className="my-0 flex items-center gap-2 text-gray-200 transition-colors ease-in-out duration-500 cursor-pointer">
      <Link href="/">
        <motion.div {...midClickAnimation}>
          <Image
            src="/images/logo.png"
            height={384 / 14}
            width={616 / 14}
            alt="hot head icon"
          />
        </motion.div>
      </Link>
    </div>
  );
};
export default Logo;
