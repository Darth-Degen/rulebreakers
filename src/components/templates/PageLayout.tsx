import { FC, ReactNode, useState } from "react";
import {
  PageHead,
  Header,
  Footer,
  SplashScreen,
  GalleryModal,
} from "@components";
import { enterAnimation, ViewContext } from "@constants";
import { AnimatePresence, motion } from "framer-motion";

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

  //context for splash screen & modal
  const [showView, setShowView] = useState<boolean>(false);
  const [galleryModalId, setGalleryModalId] = useState<number>(-1);
  const value = { showView, setShowView, galleryModalId, setGalleryModalId };

  return (
    <ViewContext.Provider value={value}>
      <div
        className={`flex flex-col lg:min-h-screen h-full justify-between overflow-none  ${
          fixed ? "absolute inset-0" : ""
        }`}
      >
        <PageHead
          title="BRKRS"
          description="unconventional. unorthodox. unphased. 1/1 pfp experiment by pencilxart"
        />
        {/* header */}
        <Header headerType={headerType} />

        {/* body */}
        <motion.main
          className={`flex flex-col h-full w-full ${mainClass} overflow-x-clip ${
            footer ? "mb-8 md:mb-auto mt-4 md:mt-0" : ""
          }`}
          {...enterAnimation}
        >
          {children}
        </motion.main>

        {/* footer */}
        {footer && <Footer />}

        {/* modals */}
        {assets && <SplashScreen assets={assets} />}
        <AnimatePresence mode="wait">
          {galleryModalId !== -1 && (
            <GalleryModal
              imageId={galleryModalId}
              setImageId={setGalleryModalId}
              key="gallery-modal"
            />
          )}
        </AnimatePresence>
      </div>
    </ViewContext.Provider>
  );
};
export default PageLayout;
