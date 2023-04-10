import { Dispatch, SetStateAction, FC, useContext } from "react";
import { ViewContext } from "@constants";
import { BrkrsLanding, Gallery } from "@components";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const RulebreakersView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start sm:px-10 ">
      <BrkrsLanding setAssets={setAssets} showView={showView} />
      <Gallery />
    </div>
  );
};

export default RulebreakersView;
