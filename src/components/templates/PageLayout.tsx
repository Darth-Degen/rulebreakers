import { FC, ReactNode, useEffect, useState } from "react";
import { PageHead, Header, Footer } from "@components";
import { enterAnimation } from "@constants";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: ReactNode;
  footer?: boolean;
  fixed?: boolean;
  headerType?: string;
  mainClass?: string;
}

const PageLayout: FC<Props> = (props: Props) => {
  const {
    footer = true,
    fixed = false,
    headerType = "absolute",
    children,
    mainClass = "",
  } = props;
  const [didMount, setDidMount] = useState<boolean>(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return (
    // <div className="bg-main bg-cover bg-fixed relative flex flex-col justify-start lg:h-screen transition-colors ease-in-out duration-300 overflow-none">
    <div
      className={`flex flex-col justify-between overflow-none   ${
        fixed ? "absolute inset-0" : "sm:absolute sm:inset-0"
      }`}
    >
      <PageHead
        title="BRKRS"
        description="unconventional. unorthodox. unphased. 1/1 pfp experiment by pencilxart"
      />

      <Header headerType={headerType} />
      <motion.main
        className={`flex flex-col h-full w-full ${mainClass} overflow-x-clip`}
        {...enterAnimation}
      >
        {children}
      </motion.main>
      {footer && <Footer />}
    </div>
  );
};

export default PageLayout;
