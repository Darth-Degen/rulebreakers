import {
  FC,
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import {
  enterAnimation,
  midExitAnimation,
  collabs,
  editions,
} from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import {
  TextHeader,
  TabSelector,
  Collabs,
  GalleryArrowButton,
} from "@components";
import { Collab, Edition } from "@types";

interface Props {
  pageSize: number;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const MoreView: FC<Props> = (props: Props) => {
  const { pageSize, activeTab, setActiveTab } = props;

  //pagination
  const [pageNum, setPageNum] = useState<number>(1);
  const [data, setData] = useState<Collab[] | Edition[]>(editions);

  const back = (): void => {
    if (pageNum === 1) return;
    setPageNum((prevState) => prevState - 1);
  };
  const next = (): void => {
    const _data = getDataSet();
    if (data && pageNum === Math.ceil(_data.length / pageSize)) return;
    setPageNum((prevState) => prevState + 1);
  };

  const getDataSet = useCallback(() => {
    return activeTab === 0 ? editions : collabs;
  }, [activeTab]);

  //handles tab switch
  const handleSwitch = useCallback(() => {
    if (activeTab === 0 || activeTab === 1) setPageNum(1);
  }, [activeTab]);

  useEffect(() => {
    handleSwitch();
  }, [handleSwitch]);

  //handles pagination
  const handlePagination = useCallback(() => {
    const start = (pageNum - 1) * pageSize;
    const end = pageSize * pageNum;

    let _data = getDataSet();
    _data = _data?.slice(start, end);

    setData(_data);
  }, [pageNum, pageSize, getDataSet]);

  useEffect(() => {
    handlePagination();
  }, [handlePagination]);

  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-start sm:px-10 mt-28 lg:mt-24 3xl:mt-32 gap-4"
      {...enterAnimation}
    >
      <TextHeader className="opacity-60">More</TextHeader>

      <div className="flex flex-col h-full items-center justify-between 3xl:justify-center gap-10 md:gap-6 3xl:gap-14 pt-6">
        <TabSelector
          tabs={["editions", "collabs"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {/*  gallery  */}
        <div className="flex gap-4 items-center">
          <GalleryArrowButton
            direction="left"
            onClick={() => back()}
            disabled={pageNum === 1}
            className="hidden lg:flex"
          />

          <div className="flex flex-col gap-2 items-center">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <motion.div {...midExitAnimation} key="editions">
                  <Collabs collabs={data} />
                </motion.div>
              )}
              {activeTab === 1 && (
                <motion.div {...midExitAnimation} key="collab">
                  <Collabs collabs={data} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <GalleryArrowButton
            direction="right"
            onClick={() => next()}
            disabled={
              data && Math.ceil(getDataSet().length / pageSize) === pageNum
            }
            className="hidden lg:flex"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MoreView;
