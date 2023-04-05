import { FC, ReactNode, useState } from "react";
import { Underline } from "@components";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  children: ReactNode;
  href: string;
  disabled?: boolean;
}
const NavItem: FC<Props> = (props: Props) => {
  const { children, href, disabled = false } = props;

  const router = useRouter();
  const isCurrent = router.pathname === href;

  const DisabledItem = () => (
    <div className="flex gap-2 justify-center items-center">
      <div className={`opacity-0`}>
        <Image src="/images/arrow.png" alt="arrow" width={14} height={22} />
      </div>
      <div className={`py-5 opacity-20 cursor-default `}>{children}</div>
    </div>
  );

  return (
    <>
      {disabled ? (
        <DisabledItem />
      ) : (
        <Link href={href}>
          <Item isCurrent={isCurrent}>{children}</Item>
        </Link>
      )}
    </>
  );
};

interface ItemProps {
  children: ReactNode;
  isCurrent: boolean;
}
const Item: FC<ItemProps> = (props: ItemProps) => {
  const { children, isCurrent } = props;
  const [didHover, setDidHover] = useState<boolean>(false);
  return (
    <div
      className="flex gap-2 justify-center items-center"
      onMouseEnter={() => setDidHover(true)}
      onMouseLeave={() => setDidHover(false)}
    >
      <div className={`transition-all duration-500 `}>
        <Image
          src="/images/arrow.png"
          alt="arrow"
          width={14}
          height={22}
          className={`transition-all duration-300  ${
            (!isCurrent && didHover) || isCurrent ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div
        className={`text-transparent bg-clip-text transition-all duration-500 my-5 p-0 ${
          isCurrent
            ? "bg-red-text-gradient cursor-default"
            : "bg-white-text-gradient hover:to-red-600 cursor-pointer"
        }`}
      >
        {children}
        <Underline animate={isCurrent} />
      </div>
    </div>
  );
};

export default NavItem;
