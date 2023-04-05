import { Dispatch, FC, SetStateAction, useState } from "react";
import Image from "next/image";

interface Tab {
  name: string;
  icon: string;
}

interface InventoryTabNavProps {
  index: number;
  item: Tab;
  isActive: boolean;
  setActiveTab: Dispatch<SetStateAction<number>>;
}
const InventoryTabNav: FC<InventoryTabNavProps> = (
  props: InventoryTabNavProps
) => {
  const { index, item, setActiveTab, isActive } = props;

  const [didHover, setDidHover] = useState<boolean>(false);

  return (
    <div
      className={`flex items-center text-xs sm:text-sm cursor-pointer text-transparent bg-clip-text transition-all duration-500  py-1.5 px-4 rounded gap-1.5  ${
        isActive ? "bg-red-text-gradient " : "bg-white-text-gradient"
      }`}
      key={index}
      onClick={() => setActiveTab(index)}
      onMouseEnter={() => setDidHover(true)}
      onMouseLeave={() => setDidHover(false)}
    >
      <div className={`transition-all duration-500`}>
        <Image
          src="/images/arrow.png"
          alt="arrow"
          width={14}
          height={22}
          className={`transition-all duration-300  ${
            didHover || isActive ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <p className="">{item.name}</p>
    </div>
  );
};

export default InventoryTabNav;
