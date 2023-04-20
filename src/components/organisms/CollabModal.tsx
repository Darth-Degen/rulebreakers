import {
  Dispatch,
  SetStateAction,
  FC,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { ImageShimmer, Modal, ModalContent } from "@components";
import {
  midClickAnimation,
  editions,
  ViewContext,
  collabs,
  imageLoadAnimation,
} from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import download from "downloadjs";
import { Collab, Edition } from "@types";
import Image from "next/image";

interface Props {
  id: number;
  type: string;
  setCollab: Dispatch<SetStateAction<{ id: number; type: string }>>;
}

const GalleryModal: FC<Props> = (props: Props) => {
  const { id, type, setCollab } = props;
  const { collabModal } = useContext(ViewContext);

  const [item, setItem] = useState<Edition | Collab | undefined>();

  useEffect(() => {
    setItem(type === "editions" ? editions[id] : collabs[id]);
  }, [id, type]);

  return (
    <Modal
      show={collabModal.id !== -1}
      onClick={() => {
        setCollab((prevState) => ({ ...prevState, id: -1 }));
      }}
    >
      <div className="flex gap-3 flex-col-reverse lg:flex-row items-center justify-evenly h-full w-full mt-10 lg:mt-0 p-10 overflow-y-auto lg:overflow-hidden">
        {/* col 1 - images */}
        <div className="flex flex-col gap-4 items-center justify-center h-full mt-4 lg:mt-12 mb-64 lg:mb-0">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-6">
            {/* main image */}
            <AnimatePresence mode="wait">
              {item && (
                <motion.div
                  transition={{ duration: 1 }}
                  exit={{ opacity: 0 }}
                  key="main"
                >
                  {item.image_path.endsWith(".mp4") ||
                  item.image_path.endsWith(".mov") ? (
                    <video
                      width="350"
                      height="350"
                      controls
                      loop
                      className="rounded"
                    >
                      <source src={item.image_path} type="video/mp4" />
                    </video>
                  ) : (
                    <ImageShimmer
                      src={item.image_path}
                      alt="BRKRS"
                      width={350}
                      height={350}
                      className="max-h-[450px]"
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* download */}
          {item && (
            <motion.div
              className="cursor-pointer"
              {...midClickAnimation}
              onClick={() => download(item.image_path)}
            >
              <ImageShimmer
                src="/images/icons/download.png"
                height={40}
                width={40}
                alt="menu"
              />
            </motion.div>
          )}
        </div>
        {/* col 2 - text */}
        {item && (
          <ModalContent
            header={item.name}
            description={item.description}
            exchangeUrl={item.exchange_art_url}
            className="mb-10"
          />
        )}
      </div>
    </Modal>
  );
};

export default GalleryModal;
