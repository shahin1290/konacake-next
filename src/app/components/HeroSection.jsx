"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="">
      <div className="grid grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-6 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-6xl  lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Discover the Magic of Homemade Cakes
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "It's delicious",
                1000,
                "It's beautiful",
                1000,
                "It's cheap",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Freshly Baked Daily, Perfect for Any Celebration - Birthdays,
            Weddings, and Everyday Cravings.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-6 justify-self-end pb-40"
        >
         
            <Image
              src="/hero.png"
              alt="hero image"
              className=""
              width={500}
              height={500}
            />
         
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
