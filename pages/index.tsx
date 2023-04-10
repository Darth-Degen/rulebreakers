import { PageLayout, IconBar } from "@components";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { slideDown, ViewContext } from "@constants";
import Image from "next/image";
import { Dispatch, FC, SetStateAction, useContext, useState } from "react";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  return (
    <PageLayout footer={false} fixed={true} assets={assets}>
      <LandingView setAssets={setAssets} />
    </PageLayout>
  );
};

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center lg:justify-end 3xl:justify-center">
      {/* <div className="fixed top-1/2 transform -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:flex lg:left-auto lg:top-auto"> */}
      <motion.div {...slideDown(showView)}>
        <Image
          src="/images/logo_lg.png"
          alt="RULEBREAKERS"
          width={1113}
          height={721}
          className="px-2 lg:p-0"
          onLoadingComplete={() =>
            setAssets && setAssets((prevState) => [(prevState[0] = true)])
          }
        />
      </motion.div>
      <IconBar className="lg:hidden absolute bottom-3" />
    </div>
  );
};

export default Home;
