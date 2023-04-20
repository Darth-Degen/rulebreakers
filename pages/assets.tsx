import { PageLayout, AssetsView } from "@components";
import { NextPage } from "next";

const Assets: NextPage = () => {
  return (
    <PageLayout
      headerType="scroll"
      mainClass=" md:!h-[90vh] lg:!h-[80vh] 2xl:!h-[90vh]"
    >
      <AssetsView />
    </PageLayout>
  );
};

export default Assets;
