import { AnimatePresence, motion } from "framer-motion";
import { SetStateAction, Dispatch, FC, ReactNode, useEffect } from "react";
import { scaleExitAnimation } from "@constants";
import { CloseIcon } from "@components";

interface Props {
  show: boolean;
  close: Dispatch<SetStateAction<string>>;
  children: ReactNode;
  contentLoaded?: boolean;
}
const Modal: FC<Props> = (props: Props) => {
  const { show, close, children, contentLoaded = true } = props;

  //stop page scroll (when modal or menu open)
  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [show]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="image-modal"
          className="fixed inset-0 backdrop-blur-2xl z-50 w-screen h-screen "
          onClick={() => close("")}
          {...scaleExitAnimation}
        >
          <div
            className={`h-[320px] w-[320px] md:h-[700px] md:w-[700px] bg-opacity-50 md:bg-opacity-90
              md:rounded-lg absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded">
              <motion.div
                className="cursor-pointer absolute top-3 right-3 z-50
              rounded-full transition-all duration-100 bg-white p-0.5 hover:outline hover:outline-white"
                onClick={() => close("")}
                whileTap={{ scale: 0.96 }}
              >
                <CloseIcon color="#121212" />
              </motion.div>
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
