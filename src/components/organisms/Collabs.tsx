import { Dispatch, FC, SetStateAction } from "react";
import { CollabItem } from "@components";

import { Collab } from "@types";

interface Props {
  collabs: Collab[];
}

const Collabs: FC<Props> = (props: Props) => {
  const { collabs } = props;

  return (
    <div className="flex items-center w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-2 md:gap-x-8 md:gap-y-3">
        {collabs.map((item: Collab, index) => {
          return <CollabItem key={index} index={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Collabs;
