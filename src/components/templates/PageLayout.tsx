import { FC, ReactNode, useEffect, useState } from "react";
import { PageHead, Header, Footer } from "@components";
import { enterAnimation } from "@constants";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: ReactNode;
  footer?: boolean;
}

const PageLayout: FC<Props> = (props: Props) => {
  const { footer = true, children } = props;
  const [didMount, setDidMount] = useState<boolean>(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return (
    // <div className="bg-main bg-cover bg-fixed relative flex flex-col justify-start lg:h-screen transition-colors ease-in-out duration-300 overflow-none">
    <div className="bg-main bg-cover bg-fixed fixed inset-0 flex flex-col justify-start lg:max-h-screen overflow-none">
      <PageHead
        title="BRKRS"
        description="unconventional. unorthodox. unphased. 1/1 pfp experiment by pencilxart"
      />

      <Header />
      <main className="background flex flex-col justify-start items-center h-full w-full">
        <motion.div className="w-full h-full flex" {...enterAnimation}>
          {children}
        </motion.div>
      </main>
      <AnimatePresence mode="wait">{footer && <Footer />}</AnimatePresence>
    </div>
  );
};

export default PageLayout;
