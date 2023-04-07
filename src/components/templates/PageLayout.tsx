import { FC, ReactNode, useEffect, useState } from "react";
import { PageHead, Header, Footer } from "@components";
import { enterAnimation } from "@constants";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: ReactNode;
  footer?: boolean;
  fixed?: boolean;
}

const PageLayout: FC<Props> = (props: Props) => {
  const { footer = true, fixed = false, children } = props;
  const [didMount, setDidMount] = useState<boolean>(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return (
    // <div className="bg-main bg-cover bg-fixed relative flex flex-col justify-start lg:h-screen transition-colors ease-in-out duration-300 overflow-none">
    <div
      className={`bg-main bg-cover bg-fixed flex flex-col justify-start lg:min-h-screen overflow-none ${
        fixed ? "fixed inset-0 " : ""
      }`}
    >
      <PageHead
        title="BRKRS"
        description="unconventional. unorthodox. unphased. 1/1 pfp experiment by pencilxart"
      />

      <Header />
      <motion.main
        className="background flex h-full w-full"
        {...enterAnimation}
      >
        {children}
      </motion.main>
      <AnimatePresence mode="wait">{footer && <Footer />}</AnimatePresence>
    </div>
  );
};

export default PageLayout;
