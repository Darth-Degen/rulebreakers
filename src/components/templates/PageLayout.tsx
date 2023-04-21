import { FC, ReactNode, useState } from "react";
import {
  PageHead,
  Header,
  Footer,
  SplashScreen,
  GalleryModal,
  CollabModal,
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

  //context for splash screen & modals
  const [showView, setShowView] = useState<boolean>(false);
  const [galleryModalId, setGalleryModalId] = useState<number>(-1);
  const [collabModal, setCollabModal] = useState({ id: -1, type: "" });
  const value = {
    showView,
    setShowView,
    galleryModalId,
    setGalleryModalId,
    collabModal,
    setCollabModal,
  };

  return (
    <div
      className={`flex flex-col lg:min-h-screen h-full justify-between overflow-none  ${
        fixed ? "absolute inset-0" : ""
      }`}
    >
      <PageHead
        title="BRKRS"
        description="unconventional. unorthodox. unphased. 1/1 pfp experiment by pencilxart"
        url="https://rulebreakers.xyz/"
        // url="https://rulebreakers.vercel.app/"
        twitter="rulebreakers___"
      />
      <ViewContext.Provider value={value}>
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
              key="gallery-modal"
              imageId={galleryModalId}
              setImageId={setGalleryModalId}
            />
          )}
          {collabModal.id !== -1 && (
            <CollabModal
              key="collab-modal"
              id={collabModal.id}
              type={collabModal.type}
              setCollab={setCollabModal}
            />
          )}
        </AnimatePresence>
      </ViewContext.Provider>
    </div>
  );
};
export default PageLayout;
