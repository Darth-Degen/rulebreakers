import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { collections } from "@constants";
import { Dropdown, InventoryItems, InventoryTabNav } from "@components";
import { Metadata } from "@metaplex-foundation/js";
import { useWallet } from "@solana/wallet-adapter-react";

interface Tab {
  name: string;
  icon: string;
}

const _tabs: Tab[] = [
  {
    name: "PFP",
    icon: "user.svg",
  },
  {
    name: "Banners",
    icon: "image.svg",
  },
  {
    name: "Wallpapers",
    icon: "laptop.svg",
  },
  {
    name: "Memes",
    icon: "smiley.svg",
  },
];

interface InventoryTabsProps {
  hasToken?: boolean;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  tokens: Metadata[] | undefined;
  setImageModal: Dispatch<SetStateAction<string>>;
}
const InventoryTabs: FC<InventoryTabsProps> = (props: InventoryTabsProps) => {
  const {
    hasToken = false,
    activeTab,
    setActiveTab,
    tokens,
    setImageModal,
  } = props;

  const [didHover, setDidHover] = useState<boolean>(false);
  const [selectedToken, setSelectedToken] = useState<number>(-1);

  const { publicKey } = useWallet();

  const selectClick = (id: number) => {
    setSelectedToken(id);
    setDidHover(false);
  };

  useEffect(() => {
    if (publicKey) setSelectedToken(-1);
  }, [publicKey]);

  return (
    <div
      className="container flex flex-col w-full  items-center justify-start 
    rounded md:rounded-2xl lg:rounded-[80px] py-8 min-h-[500px]  px-2"
    >
      <Dropdown
        handleClick={selectClick}
        setDidHover={setDidHover}
        didHover={didHover}
        label={
          selectedToken === -1
            ? "SELECT"
            : selectedToken < 10
            ? `00${selectedToken}`
            : `0${selectedToken}`
        }
        collections={collections}
        disabled={publicKey !== null}
      />
      <div className="flex flex-col md:flex-row gap-0.5 flex-wrap items-center justify-center md:gap-4 w-full pt-6">
        {_tabs.map((item: Tab, index) => (
          <InventoryTabNav
            key={index}
            item={item}
            index={index}
            isActive={activeTab === index}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      {/* multiple layouts resolve image duplication bug */}
      {selectedToken > -1 && selectedToken % 2 === 0 && (
        <InventoryItems
          hasToken={hasToken}
          activeTab={activeTab}
          selectedToken={selectedToken}
          setImageModal={setImageModal}
          tokens={tokens}
        />
      )}
      {selectedToken > -1 && selectedToken % 2 === 1 && (
        <InventoryItems
          hasToken={hasToken}
          activeTab={activeTab}
          selectedToken={selectedToken}
          setImageModal={setImageModal}
          tokens={tokens}
        />
      )}
      {selectedToken === -1 && publicKey && (
        <InventoryItems
          hasToken={hasToken}
          activeTab={activeTab}
          selectedToken={selectedToken}
          setImageModal={setImageModal}
          tokens={tokens}
        />
      )}
      {selectedToken === -1 && !publicKey && (
        <InventoryItems
          hasToken={hasToken}
          activeTab={activeTab}
          selectedToken={selectedToken}
          setImageModal={setImageModal}
          tokens={tokens}
        />
      )}
    </div>
  );
};

export default InventoryTabs;
