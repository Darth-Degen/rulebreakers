import { PageLayout, IconBar } from "@components";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <PageLayout fixed={true}>
      <div
        key="About"
        className="w-full h-full flex flex-col-reverse lg:flex-row items-start justify-center absolute top-1/2 left-1/2 transform -translate-y-1/4 -translate-x-1/2 px-10 gap-8"
      >
        {/* content */}
        <div className="flex flex-col items-center justify-center gap-4 lg:w-1/2 text-center max-w-[550px]">
          <h2 className="text-8xl bg-clip-text bg-orange-gradient text-transparent uppercase">
            About
          </h2>
          <p className="font-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint.
          </p>
        </div>
        {/* image */}
        <div className="lg:w-1/2">
          <Image
            src="/images/about_graphic.png"
            alt="BRKRS"
            width={841}
            height={504}
            className="-mt-9"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
