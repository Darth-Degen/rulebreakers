import { FC, HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}
const TextHeader: FC<Props> = (props: Props) => {
  const { children, className } = props;
  return (
    <h2
      className={`text-7xl bg-clip-text bg-orange-gradient text-transparent uppercase -mr-1 md:mr-0 ${className}`}
    >
      {children}
    </h2>
  );
};

export default TextHeader;
