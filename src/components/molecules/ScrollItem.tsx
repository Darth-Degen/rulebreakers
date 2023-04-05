import { FC, HTMLAttributes, ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

//used to animate container scrolling in and out of view
interface ScrollItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  index?: number;
  disableScrollUp?: boolean; //disable
  duration?: number;
  enableY?: boolean;
  isInViewOnce?: boolean;
  delay?: number;
}
const ScrollItem: FC<ScrollItemProps> = (props: ScrollItemProps) => {
  const {
    children,
    index = 0,
    disableScrollUp = true,
    duration = 1.5,
    enableY = false,
    isInViewOnce = false,
    delay = 0.25,
    className,
  } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: isInViewOnce,
    // margin: "0px 0px 200px 0px",
  });

  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * delay,
        ease: "easeInOut",
        duration: duration,
      },
    },
    hidden: {
      opacity: disableScrollUp ? 0 : 1,
      scale: disableScrollUp ? 1 : 1,
      y: disableScrollUp && enableY ? 20 : 0,
    },
  };

  // console.log("isInView ", isInView);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial={"hidden"}
      // animate={"visible"}
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollItem;
