import { Dispatch, FC, HTMLAttributes, SetStateAction, useState } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  tabs: string[];
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}
const TabSelector: FC<Props> = (props: Props) => {
  const { tabs, activeTab, setActiveTab, className } = props;
  const [didHover, setDidHover] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col md:flex-row flex-wrap items-center lg:items-start justify-center w-full gap-1 md:gap-x-20 px-10  ${className} `}
    >
      {tabs.map((item: string, index) => (
        <div
          className={`flex items-center cursor-pointer transition-all duration-300 text-5xl md:text-6xl py-1.5 px-4 rounded gap-1.5 font- hover:bg-clip-text hover:bg-orange-gradient hover:text-transparent uppercase ${
            activeTab === index
              ? "bg-clip-text bg-orange-gradient text-transparent uppercase"
              : "text-white"
          }`}
          key={index}
          onClick={() => setActiveTab(index)}
          onMouseEnter={() => setDidHover(true)}
          onMouseLeave={() => setDidHover(false)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default TabSelector;
