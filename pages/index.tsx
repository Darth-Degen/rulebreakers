import { PageLayout, IconBar } from "@components";
import { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <PageLayout footer={false} fixed={true}>
      <div className="w-full h-full flex flex-col items-center justify-center lg:justify-end 3xl:justify-center">
        {/* <div className="fixed top-1/2 transform -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:flex lg:left-auto lg:top-auto"> */}
        <div className="">
          <Image
            src="/images/logo_lg.png"
            alt="RULEBREAKERS"
            width={1113}
            height={721}
            className="px-2 lg:p-0"
          />
        </div>
        <IconBar className="lg:hidden absolute bottom-3" />
      </div>
    </PageLayout>
  );
};

export default Home;
