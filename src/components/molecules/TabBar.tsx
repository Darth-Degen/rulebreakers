import { FC, useEffect, useState } from "react";
import { TabBarItem } from "@components";

interface TabBarProps {
  tabs: string[];
  handleTabChange: (tab: number) => void;
}
const TabBar: FC<TabBarProps> = (props: TabBarProps) => {
  const { tabs, handleTabChange } = props;
  const [tab, setTab] = useState<number>(0);

  useEffect(() => {
    handleTabChange(tab);
  }, [handleTabChange, tab]);

  return (
    <div className=" bg-custom-light-gray rounded-lg flex flex-row gap-1 items-center p-1 w-min whitespace-nowrap">
      {tabs.map((item, index) => (
        <TabBarItem
          key={index}
          id={index}
          isSelected={tab === index}
          handleClick={setTab}
        >
          {item}
        </TabBarItem>
      ))}
    </div>
  );
};

export default TabBar;
