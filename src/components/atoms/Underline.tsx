import { motion } from "framer-motion";
import { FC } from "react";

interface UnderlineProps {
  animate: boolean;
}
const Underline: FC<UnderlineProps> = (props: UnderlineProps) => {
  const { animate } = props;
  return (
    <motion.div
      className={`h-0.5 bg-custom-red`}
      initial={{ width: 0 }}
      animate={{ width: animate ? "100%" : 0 }}
      transition={{ duration: 0.69 }}
    />
  );
};

export default Underline;
