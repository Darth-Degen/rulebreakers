import { FC } from "react";
import { motion, Variants } from "framer-motion";
import { Collection } from "@types";
import { backgroundAnimations } from "@constants";

interface Props {
  item: Collection;
  handleClick: (id: number) => void;
  variants: Variants;
}

const DropdownItem: FC<Props> = (props: Props) => {
  const { item, handleClick, variants } = props;
  const styles: string = "w-40 h-10 bg-custom-dark-gray text-xs z-10";

  return (
    <motion.li
      key={item?.id}
      className={`${styles} px-2 cursor-pointer flex items-center hover:bg-dark`}
      // {...backgroundAnimations}
      onClick={() => handleClick(item?.id)}
    >
      <motion.span variants={variants}>
        {item.id === -1
          ? "CLEAR"
          : item.id < 10
          ? `00${item.id}`
          : `0${item.id}`}
      </motion.span>
    </motion.li>
  );
};

export default DropdownItem;
