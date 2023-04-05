import { FC, SVGProps, useState } from "react";
import { motion } from "framer-motion";

interface Props extends SVGProps<SVGSVGElement> {
  fillHover?: string;
  color?: string;
  hoverColor?: string;
}

const MenuIcon: FC<Props> = (props: Props) => {
  const { hoverColor = "white", className, color = "#9ca3af" } = props;

  const [didHover, setDidHover] = useState<boolean>(false);

  return (
    <div
      className="cursor-pointer rounded h-min p-2"
      onMouseEnter={() => setDidHover(true)}
      onMouseLeave={() => setDidHover(false)}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className ? className : ""} `}
        // initial={{ stroke: color }}
        // whileHover={{
        //   stroke: didHover ? hoverColor : color,
        //   transition: { duration: 2.5, ease: "easeInOut" },
        // }}
        // transition={{ duration: 2.5, ease: "easeInOut" }}
      >
        <path
          d="M5 7H19"
          strokeWidth="2"
          strokeLinecap="round"
          className={` transition-all duration-300 ${
            didHover ? "stroke-white" : "stroke-gray-400 "
          }`}
        />
        <path
          d="M5 12H15"
          strokeWidth="2"
          strokeLinecap="round"
          className={` transition-all duration-400 ${
            didHover ? "stroke-white" : "stroke-gray-400 "
          }`}
        />
        <path
          d="M5 17H11"
          strokeWidth="2"
          strokeLinecap="round"
          className={` transition-all duration-300 ${
            didHover ? "stroke-white" : "stroke-gray-400 "
          }`}
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
