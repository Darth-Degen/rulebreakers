import { PageLayout, MoreView } from "@components";
import { NextPage } from "next";

const More: NextPage = () => {
  return (
    <PageLayout headerType="scroll">
      <MoreView />
    </PageLayout>
  );
};

export default More;
