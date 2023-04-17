import { FC } from "react";
import { motion, Variants } from "framer-motion";
import { Rulebreakers } from "@types";
import { backgroundAnimations } from "@constants";

interface Props {
  item: Rulebreakers;
  handleClick: (item: Rulebreakers) => void;
  variants: Variants;
}

const DropdownItem: FC<Props> = (props: Props) => {
  const { item, handleClick, variants } = props;

  return (
    <motion.li
      key={item?.id}
      className={`p-2 cursor-pointer flex items-center justify-center bg-transparent active:bg-custom-black text-3xl transition-all duration-300 bg-mid-gray hover:bg-opacity-0`}
      // {...backgroundAnimations}
      onClick={() => handleClick(item)}
    >
      <motion.span variants={variants}>
        {/* {item.id < 10 ? `00${item.id}` : `0${item.id}`} */}
        {item.name}
      </motion.span>
    </motion.li>
  );
};

export default DropdownItem;
