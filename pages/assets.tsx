import { PageLayout, AssetsView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Assets: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>();

  return (
    <PageLayout headerType={"scroll"} mainClass="" assets={assets}>
      <AssetsView />
    </PageLayout>
  );
};

export default Assets;
