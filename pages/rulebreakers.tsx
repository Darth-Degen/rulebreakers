import { PageLayout, BrkrsLanding, Gallery } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Rulebreakers: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);
  return (
    <PageLayout headerType={"scroll"} mainClass="!h-auto">
      <div className="w-full h-full flex flex-col items-center justify-start sm:px-10 ">
        <BrkrsLanding />
        <Gallery />
      </div>
    </PageLayout>
  );
};

export default Rulebreakers;
