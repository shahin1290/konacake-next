"use client";

import { motion } from "framer-motion";


const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Enter Metaverse
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;

const styles = {
  innerWidth: "2xl:max-w-[1280px] w-full",
  interWidth: "lg:w-[80%] w-[100%]",

  paddings: "sm:p-16 xs:p-8 px-6 py-12",
  yPaddings: "sm:py-16 xs:py-8 py-12",
  xPaddings: "sm:px-16 px-6",
  topPaddings: "sm:pt-16 xs:pt-8 pt-12",
  bottomPaddings: "sm:pb-16 xs:pb-8 pb-12",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",
  flexEnd: "flex justify-end",
  navPadding: "pt-[98px]",

  // hero section
  heroHeading:
    "font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white",
  heroDText:
    "md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]",
};

 const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
