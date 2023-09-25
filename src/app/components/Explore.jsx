"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

import { TitleText } from "../components/CustomTexts";

const Explore = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
      clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
  }, []);


  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="grid grid-cols-4 gap-4">
          <Image
            width="600"
            height="600"
            src="/images/cakes/cake1.jpg"
            alt=""
            class="skewElem"
          />
          <Image
            width="600"
            height="600"
            src="/images/cakes/cake1.jpg"
            alt=""
            class="skewElem"
          />
          <Image
            width="600"
            height="600"
            src="/images/cakes/cake1.jpg"
            alt=""
            class="skewElem"
          />
          <Image
            width="600"
            height="600"
            src="/images/cakes/cake1.jpg"
            alt=""
            class="skewElem"
          />
          <Image
            width="600"
            height="600"
            src="/images/cakes/cake1.jpg"
            alt=""
            class="skewElem"
          />
          <Image
            width="600"
            height="600"
            src="/images/cakes/cake1.jpg"
            alt=""
            class="skewElem"
          />
          <Image
            width="600"
            height="600"
            src="/images/cakes/cake1.jpg"
            alt=""
            class="skewElem"
          />
          <Image
            width="600"
            height="600"
            src="/images/cakes/cake1.jpg"
            alt=""
            class="skewElem"
          />
          <Image
            width="600"
            height="600"
            src="/images/cakes/cake1.jpg"
            alt=""
            class="skewElem"
          />
          <Image width="600" height="600" src="/0" alt="" class="skewElem" />
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;

const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

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

const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: "/images/cakes/cake2.jpg",
    title: "Fruits Cake",
  },
  {
    id: "world-2",
    imgUrl: "/images/cakes/cake3.jpg",
    title: "Vanila Cake",
  },
  {
    id: "world-3",
    imgUrl: "/images/cakes/cake7.jpg",
    title: "Kadirojo Permai",
  },
  {
    id: "world-4",
    imgUrl: "/images/cakes/cake8.jpg",
    title: "Paradise Island",
  },
  {
    id: "world-5",
    imgUrl: "/images/cakes/cake10.jpg",
    title: "Hawkins Labs",
  },
];
