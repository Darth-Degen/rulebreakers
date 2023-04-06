import { PageLayout, IconBar } from "@components";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import { FC } from "react";
import { midClickAnimation } from "@constants";

const Home: NextPage = () => {
  return (
    <PageLayout footer={false}>
      <motion.div
        key="home"
        className="w-full h-full flex flex-col items-center justify-center md:justify-end 3xl:justify-center"
      >
        {/* logo */}
        <div className="fixed top-1/2 transform -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:flex lg:left-auto lg:top-auto">
          <Image
            src="/images/logo_lg.png"
            alt="RULEBREAKERS"
            width={1113}
            height={721}
            className="px-2 lg:p-0"
          />
        </div>
        {/* mobile icons */}
        <IconBar className="lg:hidden absolute bottom-3" />
      </motion.div>
    </PageLayout>
  );
};

export default Home;
