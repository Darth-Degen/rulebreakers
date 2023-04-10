import { PageLayout, LandingView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  return (
    <PageLayout footer={false} fixed={true} assets={assets}>
      <LandingView setAssets={setAssets} />
    </PageLayout>
  );
};
export default Home;
