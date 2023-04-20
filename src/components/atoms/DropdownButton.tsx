import { ArrowIcon } from "@components";
import { arrowVariants, smallClickAnimation } from "@constants";
import { ButtonHTMLAttributes, FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  label: string;
}

const DropdownButton: FC<Props> = (props: Props) => {
  const { isActive, label, ...componentProps } = props;

  return (
    <motion.button
      className={`relative flex flex-col md:whitespace-nowrap text-6xl lg:text-7xl rounded-xl items-center transition-colors duration-500 opacity-60  ${
        isActive ? "text-white" : "text-white"
      }
      ${
        componentProps.disabled
          ? "cursor-not-allowed opacity-20"
          : "hover:bg-dark cursor-pointer "
      }`}
      whileHover={{ scale: 1.02 }}
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
          src="/images/icons/arrow_down.png"
          width={40}
          height={40}
          alt="Left Arrow"
        />
      </motion.div>
    </motion.button>
  );
};

export default DropdownButton;
