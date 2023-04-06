import { PageLayout, IconBar } from "@components";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";

const Rulebreakers: NextPage = () => {
  return (
    <PageLayout>
      <motion.div
        key="Rulebreakers"
        className="w-full h-full flex flex-col items-center"
      >
        Rulebreakers
      </motion.div>
    </PageLayout>
  );
};

export default Rulebreakers;
