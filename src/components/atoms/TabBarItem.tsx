import { Dispatch, FC, ReactNode, SetStateAction } from "react";

interface TabProps {
  id: number;
  children: ReactNode;
  isSelected: boolean;
  handleClick: Dispatch<SetStateAction<number>>;
}

const TabBarItem: FC<TabProps> = (props: TabProps) => {
  const { id, children, isSelected, handleClick } = props;
  return (
    <div
      className={`w-full text-center rounded-lg py-1 px-2 cursor-pointer transition-all duration-300 uppercase [word-spacing:-8px] ${
        isSelected ? "bg-custom-dark-gray " : "bg-custom-light-gray"
      }`}
      onClick={() => handleClick(id)}
    >
      {children}
    </div>
  );
};
export default TabBarItem;
