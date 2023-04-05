import { FC, ReactNode } from "react";
import Image from "next/image";

interface ListItemProps {
  children: ReactNode;
}
const ListItem: FC<ListItemProps> = (props: ListItemProps) => {
  const { children } = props;
  return (
    <div className="relative pl-10 lg:pl-14 ">
      <div className="absolute -left-4 top-1/2 transform -translate-y-[55%] w-12 h-12">
        <Image
          src="/images/logo.png"
          height={384 / 25}
          width={616 / 25}
          alt="hot head icon"
        />
      </div>
      {children}
    </div>
  );
};

export default ListItem;
