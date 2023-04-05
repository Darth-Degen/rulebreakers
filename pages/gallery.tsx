import { PageLayout, TabBar, Modal, Collab, Gallery } from "@components";
import { useState } from "react";
import { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { midExitAnimation, collections, collabs } from "@constants";
import Image from "next/image";

const Home: NextPage = () => {
  const [tabId, setTabId] = useState<number>(0);
  const [imageModal, setImageModal] = useState<string>("");
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const tabs: string[] = ["hot heads", "collabs"];
  const handleTabChange = (tab: number) => {
    setTabId(tab);
  };

  return (
    <PageLayout header="Gallery">
      <motion.div className="w-full h-full md:px-8 md:pt-8 flex flex-col items-center gap-5 pt-5">
        {/* toggle  */}
        <TabBar tabs={tabs} handleTabChange={handleTabChange} />
        {/* content */}
        <div className="container overflow-y-hidden lg:overflow-y-auto overflow-x-hidden h-full flex flex-col gap-10 px-2 md:px-5">
          <AnimatePresence mode="wait">
            {tabId === 0 ? (
              <motion.div {...midExitAnimation} key="hot-heads">
                <Gallery
                  collection={collections}
                  setImageModal={setImageModal}
                />
              </motion.div>
            ) : (
              <motion.div {...midExitAnimation} key="collab">
                <Collab collabs={collabs} setImageModal={setImageModal} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      {/* modal */}
      <Modal
        show={imageModal.length > 0}
        close={setImageModal}
        contentLoaded={imageLoaded}
      >
        <Image
          src={imageModal}
          fill={true}
          alt="Image"
          objectFit="contain"
          className={`rounded`}
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </Modal>
    </PageLayout>
  );
};

// //scroll direction
// const [scrollDown, setScrollDown] = useState<boolean>(true);
// const containerRef = useRef<HTMLDivElement>(null);
// const scrollRef = useRef<number>();
// const { scrollY } = useScroll({ container: containerRef });

// console.log("containerRef.current ", containerRef.current);
// useMotionValueEvent(scrollY, "change", (latest) => {
//   console.log("gallery scroll: ", scrollRef.current, latest);

//   //first instance
//   if (scrollRef.current === undefined) {
//     scrollRef.current = latest;
//     return;
//   }

//   //scroll down
//   if (scrollRef.current < latest) {
//     setScrollDown(true);
//   }
//   //scroll up
//   else if (scrollRef.current > latest) {
//     setScrollDown(false);
//   }

//   scrollRef.current = latest;
// });

export default Home;
