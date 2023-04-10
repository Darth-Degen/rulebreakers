import {
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { PageHead, Header, Footer, SplashScreen } from "@components";
import { enterAnimation, ViewContext } from "@constants";
import { motion } from "framer-motion";
import debounce from "lodash.debounce";

interface Props {
  children: ReactNode;
  footer?: boolean;
  fixed?: boolean;
  headerType?: string;
  mainClass?: string;
  assets?: boolean[];
}

const PageLayout: FC<Props> = (props: Props) => {
  const {
    footer = true,
    fixed = false,
    headerType = "absolute",
    children,
    mainClass = "",
    assets = [],
  } = props;

  //context for splash screen
  const [showView, setShowView] = useState<boolean>(false);
  const value = { showView, setShowView };

  return (
    // <div className="bg-main bg-cover bg-fixed relative flex flex-col justify-start lg:h-screen transition-colors ease-in-out duration-300 overflow-none">
    <ViewContext.Provider value={value}>
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
        {assets && <SplashScreen assets={assets} />}
      </div>
    </ViewContext.Provider>
  );
};

export default PageLayout;
