import { PageLayout, RulebreakersView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Rulebreakers: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false, false]);

  return (
    <PageLayout headerType={"fixed"} mainClass="!h-auto" assets={assets}>
      <RulebreakersView setAssets={setAssets} />
    </PageLayout>
  );
};

export default Rulebreakers;
