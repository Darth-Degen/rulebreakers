import { FC, ReactNode, useEffect, useState } from "react";
import { PageHead, Header, Footer, Navigation } from "@components";
import { enterAnimation } from "@constants";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  header?: string;
}

const PageLayout: FC<Props> = (props: Props) => {
  const { children, header } = props;
  const [didMount, setDidMount] = useState<boolean>(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return (
    <div className="bg-main bg-cover bg-fixed relative flex flex-col justify-start min-h-screen lg:h-screen transition-colors ease-in-out duration-300 bg-dark overflow-none">
      <PageHead
        title="Hot Heads"
        description="Welcome to your Hot Heads asset portfolio"
      />

      <Navigation />
      <main className="flex flex-col flex-grow justify-start items-center h-full w-full px-0 md:px-16 lg:px-44 2xl:px-[15%] mb-0 lg:mb-auto lg:pb-6 py-0 2xl:py-12 4xl:py-[8%]">
        {didMount && (
          // <div className="bg-custom-dark-gray h-full w-full md:rounded-2xl lg:rounded-[80px] flex flex-col items-center my-4 py-10 px-3  overflow-hidden ">
          <div className="h-full w-full flex flex-col items-center my-4 py-10 px-3 overflow-hidden ">
            {header && (
              <motion.h2
                className="text-transparent bg-clip-text bg-red-text-gradient  text-xl lg:text-4xl uppercase "
                {...enterAnimation}
              >
                {header}
              </motion.h2>
            )}
            <motion.div
              className="lg:overflow-y-auto p-2 2xl:px-14 w-full flex flex-col "
              {...enterAnimation}
            >
              {children}
            </motion.div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
