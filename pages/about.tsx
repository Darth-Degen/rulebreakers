import { PageLayout, AboutView } from "@components";
import { NextPage } from "next";
import { useState } from "react";
import { useWindowSize } from "@hooks";

const About: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);
  const [winWidth, winHeight] = useWindowSize();

  return (
    <PageLayout headerType="absolute" assets={assets}>
      <AboutView setAssets={setAssets} />
    </PageLayout>
  );
};

export default About;
