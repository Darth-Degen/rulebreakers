import { AnimatePresence, motion } from "framer-motion";
import {
  SetStateAction,
  Dispatch,
  FC,
  ReactNode,
  useEffect,
  HTMLAttributes,
} from "react";
import { scaleExitAnimation } from "@constants";
import { CloseIcon } from "@components";

interface Props extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  children: ReactNode;
  contentLoaded?: boolean;
}
const Modal: FC<Props> = (props: Props) => {
  const {
    show,
    children,
    contentLoaded = true,
    className,
    ...componentProps
  } = props;

  //stop page scroll (when modal or menu open)
  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [show]);

  return (
    <motion.div
      key="image-modal"
      className="fixed inset-0 backdrop-blur-sm z-50 w-screen h-screen "
      onClick={componentProps.onClick}
      {...scaleExitAnimation}
    >
      {/* <div
        className={`h-[320px] w-[320px] md:h-[700px] md:w-[700px] bg-opacity-50 md:bg-opacity-90
              md:rounded-lg absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
        onClick={(e) => e.stopPropagation()}
      > */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`md:bg-opacity-90 md:rounded-lg absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}
      >
        <motion.div
          className=""
          onClick={componentProps.onClick}
          whileTap={{ scale: 0.96 }}
        >
          <CloseIcon color="#121212" />
        </motion.div>
        {children}
      </div>
    </motion.div>
  );
};

export default Modal;
