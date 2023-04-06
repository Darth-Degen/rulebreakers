import { PageLayout, IconBar } from "@components";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";

const More: NextPage = () => {
  return (
    <PageLayout>
      <motion.div
        key="More"
        className="w-full h-full flex flex-col items-center"
      >
        More
      </motion.div>
    </PageLayout>
  );
};

export default More;
