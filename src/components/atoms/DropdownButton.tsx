import { ArrowIcon } from "@components";
import { arrowVariants } from "@constants";
import { ButtonHTMLAttributes, FC } from "react";
import { motion } from "framer-motion";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  label: string;
}

const DropdownButton: FC<Props> = (props: Props) => {
  const { isActive, label, ...componentProps } = props;

  const styles: string = "w-40 h-10 bg-custom-dark-gray";

  return (
    <motion.button
      className={`relative flex justify-between ${styles} border-4 border-custom-light-gray-2  rounded-sm items-center p-2 transition-colors duration-500  ${
        isActive ? "border-red-400" : ""
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
        <ArrowIcon color={"#d1d5db"} />
      </motion.div>
    </motion.button>
  );
};

export default DropdownButton;
