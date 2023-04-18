import { PageLayout, AssetsView } from "@components";
import { NextPage } from "next";

const Assets: NextPage = () => {
  return (
    <PageLayout headerType="scroll">
      <AssetsView />
    </PageLayout>
  );
};

export default Assets;
