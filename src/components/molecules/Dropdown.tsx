import { dropdownAnimations, dropdownItemsAnimations } from "@constants";
import { DropdownButton, DropdownItem } from "@components";
import { Rulebreakers } from "@types";
import { FC, HTMLAttributes, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideAlerter } from "@hooks";

interface Props extends HTMLAttributes<HTMLDivElement> {
  handleClick: (item: Rulebreakers) => void;
  label: string;
  collections: Rulebreakers[];
  disabled?: boolean;
}

const Dropdown: FC<Props> = (props: Props) => {
  const {
    handleClick,
    label,
    collections,
    disabled = false,
    className,
  } = props;

  const [didHover, setDidHover] = useState<boolean>(false);

  const ref = useRef(null);
  useOutsideAlerter(ref, () => setDidHover(false));

  const onSelect = (item: Rulebreakers) => {
    handleClick(item);
    setDidHover(false);
  };

  return (
    <div
      onMouseEnter={() => {
        if (!disabled) setDidHover(true);
      }}
      onMouseLeave={() => {
        if (!disabled) setDidHover(false);
      }}
      className={`relative ${className}`}
      ref={ref}
    >
      <DropdownButton isActive={didHover} label={label} disabled={disabled} />
      <AnimatePresence mode="wait">
        {didHover && (
          <motion.div
            className="absolute  z-10"
            key="dropdown-list"
            variants={dropdownAnimations}
            initial="hidden"
            animate="show"
          >
            <motion.ul className="rounded-sm shadow max-h-[250px] w-[256px] overflow-y-auto z-10 font-secondary bg-mid-gray">
              {collections &&
                collections.map((item: Rulebreakers) => (
                  <DropdownItem
                    item={item}
                    handleClick={onSelect}
                    key={item.id}
                    variants={dropdownItemsAnimations}
                  />
                ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
