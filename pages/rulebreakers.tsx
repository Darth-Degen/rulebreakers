import { PageLayout, RulebreakersView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Rulebreakers: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false, false]);
  console.log("assets ", assets);
  return (
    <PageLayout headerType={"scroll"} mainClass="!h-auto" assets={assets}>
      <RulebreakersView setAssets={setAssets} />
    </PageLayout>
  );
};

export default Rulebreakers;
