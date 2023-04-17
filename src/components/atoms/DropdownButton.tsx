import { ArrowIcon } from "@components";
import { arrowVariants } from "@constants";
import { ButtonHTMLAttributes, FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  label: string;
}

const DropdownButton: FC<Props> = (props: Props) => {
  const { isActive, label, ...componentProps } = props;

  const styles: string = "";

  return (
    <motion.button
      className={`relative flex flex-col w-[256px] md:whitespace-nowrap text-6xl rounded-xl items-center transition-colors duration-500  ${
        isActive ? "" : ""
      }
      ${
        componentProps.disabled
          ? "cursor-not-allowed opacity-20"
          : "hover:bg-dark cursor-pointer "
      }`}
      // whileTap={{ scale: 0.97 }}
      disabled={componentProps.disabled}
    >
      <p className="bg-clip-text bg-orange-gradient text-transparent uppercase">
        {label}
      </p>
      <motion.div
        animate={isActive ? "end" : "start"}
        variants={arrowVariants}
        className="pt-3"
      >
        {/* <ArrowIcon color={"#d1d5db"} /> */}
        <Image
          src="/images/icons/arrow_left.png"
          width={50}
          height={50}
          alt="Left Arrow"
        />
      </motion.div>
    </motion.button>
  );
};

export default DropdownButton;
