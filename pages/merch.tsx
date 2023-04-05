import { PageLayout } from "@components";
import { useEffect, useState } from "react";
import { NextPage } from "next";

const Home: NextPage = () => {
  const [didMount, setDidMount] = useState<boolean>(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return (
    <PageLayout header="Merch">
      {didMount && <div className=""></div>}
    </PageLayout>
  );
};

export default Home;
