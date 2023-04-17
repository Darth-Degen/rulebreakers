import { ArrowIcon, ImageShimmer } from "@components";
import { arrowVariants } from "@constants";
import { ButtonHTMLAttributes, FC } from "react";
import { motion } from "framer-motion";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  label: string;
}

const DropdownButton: FC<Props> = (props: Props) => {
  const { isActive, label, ...componentProps } = props;

  const styles: string = "";

  return (
    <motion.button
      className={`relative flex flex-col w-64 md:whitespace-nowrap  bg-transparent text-7xl rounded-xl items-center transition-colors duration-500  ${
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
      {label}
      <motion.div animate={isActive ? "end" : "start"} variants={arrowVariants}>
        {/* <ArrowIcon color={"#d1d5db"} /> */}
        <ImageShimmer
          src="/images/icons/arrow_left.png"
          width={69}
          height={69}
          alt="Left Arrow"
        />
      </motion.div>
    </motion.button>
  );
};

export default DropdownButton;
