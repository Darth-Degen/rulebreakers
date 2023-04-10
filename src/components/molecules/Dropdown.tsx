import { dropdownAnimations, dropdownItemsAnimations } from "@constants";
import { DropdownButton, DropdownItem } from "@components";
import { Collection } from "@types";
import { Dispatch, FC, SetStateAction, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideAlerter } from "@hooks";
interface Props {
  handleClick: (id: number) => void;
  setDidHover: Dispatch<SetStateAction<boolean>>;
  didHover: boolean;
  label: string;
  collections: Collection[];
  disabled?: boolean;
}

const Dropdown: FC<Props> = (props: Props) => {
  const {
    handleClick,
    setDidHover,
    didHover,
    label,
    collections,
    disabled = false,
  } = props;

  const ref = useRef(null);
  useOutsideAlerter(ref, () => setDidHover(false));

  return (
    <div
      onMouseEnter={() => {
        if (!disabled) setDidHover(true);
      }}
      // onMouseLeave={() => {
      //   if (!disabled) setDidHover(false);
      // }}
      className="lg:self-end"
      ref={ref}
    >
      <DropdownButton isActive={didHover} label={label} disabled={disabled} />
      <AnimatePresence mode="wait">
        {didHover && (
          <motion.div
            className="absolute z-10 pt-2"
            key="dropdown-list"
            variants={dropdownAnimations}
            initial="hidden"
            animate="show"
          >
            <motion.ul className="rounded divide-y-4 divide-custom-light-gray-2 border-4 border-custom-light-gray-2 shadow max-h-[200px] overflow-y-auto z-10 ">
              <DropdownItem
                item={{ id: -1, src: "", url: "" }}
                handleClick={handleClick}
                variants={dropdownItemsAnimations}
              />
              {collections &&
                collections.map((item: Collection) => (
                  <DropdownItem
                    item={item}
                    handleClick={handleClick}
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
