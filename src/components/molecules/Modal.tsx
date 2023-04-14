import { AnimatePresence, motion } from "framer-motion";
import {
  SetStateAction,
  Dispatch,
  FC,
  ReactNode,
  useEffect,
  HTMLAttributes,
} from "react";
import { midClickAnimation, scaleExitAnimation } from "@constants";
import { CloseIcon } from "@components";
import Image from "next/image";
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
      <div
        onClick={(e) => e.stopPropagation()}
        className={`md:bg-opacity-90 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
        bg-main bg-cover rounded-3xl border-[3px] border-custom-white-2 w-screen h-[80vh] lg:h-[60vh] lg:w-[100vh] ${className}`}
      >
        <motion.div
          className="absolute top-5 right-6 cursor-pointer"
          onClick={componentProps.onClick}
          {...midClickAnimation}
        >
          <Image
            src="/images/icons/close.png"
            height={216 / 3.3}
            width={216 / 3.3}
            alt="close"
            priority
          />
        </motion.div>
        {children}
      </div>
    </motion.div>
  );
};

export default Modal;
