import { PageLayout, MoreView } from "@components";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useWindowSize } from "@hooks";
import { collabs, editions } from "src/constants";

const More: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  const PAGE_SIZE = 8;
  const [pageSize, setPageSize] = useState<number>(PAGE_SIZE);
  const [activeTab, setActiveTab] = useState<number>(0);

  const [winWidth, winHeight] = useWindowSize();

  //remove page size (pagination) under lg screens
  useEffect(() => {
    if (winWidth < 1024) {
      setPageSize(activeTab === 0 ? collabs.length : editions.length);
    } else {
      setPageSize(PAGE_SIZE);
    }
  }, [activeTab, winWidth]);

  //set number of assets on load
  // useEffect(() => {
  //   let _assets: boolean[] = [];
  //   for (let i = 0; i < pageSize; i++) {
  //     _assets.push(false);
  //   }
  //   setAssets(_assets);
  // }, []);

  return (
    <PageLayout headerType="absolute" assets={assets}>
      <MoreView
        pageSize={pageSize}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </PageLayout>
  );
};

export default More;
