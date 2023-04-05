import { PageLayout, ScrollItem, ArrowIcon } from "@components";
import { FC, useState } from "react";
import { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "@hooks";

const Home: NextPage = () => {
  return (
    <PageLayout header="FAQ">
      <div className="w-full h-full md:px-8 md:pt-8 flex flex-col items-center gap-5 pt-5">
        <div className="container overflow-y-hidden lg:overflow-y-auto overflow-x-hidden h-full w-full flex flex-col items-center px-0 md:px-5 py-5 md:py-10">
          {data.map((item, index) => (
            <ScrollItem key={index}>
              <FAQ question={item.question} answer={item.answer} />
            </ScrollItem>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

interface FAQProps {
  question: string;
  answer: string;
}
const FAQ: FC<FAQProps> = (props: FAQProps) => {
  const { question, answer } = props;

  const [open, toggleOpen] = useState(false);
  const [winWidth, winHeight] = useWindowSize();

  const getHeight = (): string => {
    // winWidth < 420 ? : answer.length > 140 ? "15rem" :"14rem" : answer.length > 140 ? "15rem" : "12rem",
    if (winWidth < 420) {
      if (answer.length > 140) return "21rem";
      else return "16rem";
    } else {
      if (answer.length > 140) return "15rem";
      else return "12rem";
    }
  };
  const ParentVariants = {
    closed: {
      height: winWidth < 420 ? "11rem" : "8rem",
      paddingBottom: 30,
      transition: {
        duration: "1",
      },
    },
    open: {
      height: getHeight(),
      paddingBottom: 30,
      transition: {
        when: "beforeChildren", // <<-- does not work
        duration: "1", /// <<-- works
        // delayChildren: "1" // <<-- does not work
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center lg:px-10"
      variants={ParentVariants}
      initial="closed"
      animate={open ? "open" : "closed"}
      key="parent"
      onClick={() => {
        toggleOpen(!open);
      }}
    >
      <div className="pb-6">{question}</div>
      <button
        className=" p-3"
        onClick={() => {
          toggleOpen(!open);
        }}
      >
        <ArrowIcon animate={open} type="animated" />
      </button>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            className="text-custom-light-red text-xs lg:text-xs px-4 lg:px-8 pb-5"
            key="child"
            initial={{ opacity: 0, marginBottom: 0 }}
            animate={{
              opacity: 1,
              marginBottom: answer.length > 12 ? 500 : "auto",
              transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface FAQ {
  question: string;
  answer: string;
}
const data: FAQ[] = [
  {
    question: "What is Hot Heads?",
    answer:
      "Hot Heads is a 100 Piece 1/1 NFT Collection on the Solana Blockchain.",
  },
  {
    question: "How many Hot Heads will there be?",
    answer: "100 Hot Heads total, auctioned only on Exchange Art.",
  },
  {
    question: "How can I get a Hot Head?",
    answer:
      'There is a weekly auction only on Exchange Art for a new Hot Head. Auctions start at 5:00 PM PST on Tuesday. Click here to view our profile → <a href="https://exchange.art/hot-heads/nfts" rel="noreferrer" target="_blank" class="text-blue-600">Exchange Art</a>',
  },
  {
    question: "Are Hot Heads the only entry to the community?",
    answer:
      'No, there is a 9 Piece Collab Series that currently grants full access to the Hot Heads Community, you can see those pieces at the following link → <a href="https://exchange.art/series/The%20Underworld%20Collabs/nfts" rel="noreferrer" target="_blank" class="text-blue-600">Exchange Art</a>',
  },
  {
    question: "What are the benefits of holding a Hot Head?",
    answer: "A first class ticket to the Underworld, who wouldn't want that?",
  },
  {
    question: "Is Hot Heads accepting collaboration or partnerships?",
    answer: "Unfortunately not at the moment.",
  },
];

export default Home;
