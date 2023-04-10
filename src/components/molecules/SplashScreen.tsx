import { FC, useCallback, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fastExitAnimation, ViewContext } from "@constants";
import { ExpIcon } from "@components";
import debounce from "lodash.debounce";

interface Props {
  // showWindow: boolean;
  // showAnimation: boolean;
  // animationExit: number;
  assets?: boolean[];
}

const containerAnimation = {
  animate: {
    scale: [1, 1.5, 2.5, 1.5, 1],
    rotate: [-90, 90, 180, 90, 0],
  },
  exit: { opacity: 0 },
  transition: {
    duration: 3.5,
    ease: "easeInOut",
    times: [2, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 1,
  },
};

const SplashScreen: FC<Props> = (props: Props) => {
  const { assets = [] } = props;
  const { showView, setShowView } = useContext(ViewContext);
  //splash screen animation
  const [showWindow, setShowWindow] = useState<boolean>(true); // closes SplashScreen container after animation end
  const [showAnimation, setShowAnimation] = useState<boolean>(true); // shows/hides SplashScreen animation
  const animationDelay = 750;
  const animationTransition = 250;

  const debouncer = debounce(
    (value) => setShowAnimation(value),
    animationDelay
  );
  const closeDebouncer = debounce(
    (value) => setShowWindow(value),
    animationDelay + animationTransition
  );
  const contentDebouncer = debounce(
    (value) => setShowView(value),
    animationDelay / 1.25
  );

  //checks if all assets are loaded
  const checkLoadStatus = useCallback(() => {
    const didLoad = assets.every((value) => value === true);
    debouncer(!didLoad);
    closeDebouncer(!didLoad);
    contentDebouncer(didLoad);
  }, [assets, closeDebouncer, debouncer, setShowView]);

  useEffect(() => {
    checkLoadStatus();
  }, [checkLoadStatus]);

  useEffect(() => {
    return () => {
      debouncer.cancel();
    };
  }, [debouncer]);

  useEffect(() => {
    return () => {
      closeDebouncer.cancel();
    };
  }, [closeDebouncer]);
  useEffect(() => {
    return () => {
      contentDebouncer.cancel();
    };
  }, [contentDebouncer]);

  // useEffect(() => {
  //   setShowView(!showAnimation);
  // }, [setShowView, showAnimation]);

  //stop page scroll (when modal or menu open)
  useEffect(() => {
    if (showAnimation) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showAnimation]);

  return (
    <AnimatePresence mode="wait">
      {showWindow && (
        <motion.div
          className={`backdrop-blur-xl ${
            showAnimation ? "fixed z-50 inset-0" : "hidden -z-50"
          }`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: animationTransition / 1000,
            ease: "easeInOut",
          }}
        >
          <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
            {/* <motion.div className="rounded" {...containerAnimation}>
              <ExpIcon color={"white"} />
            </motion.div> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
