"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Welcome To Kona's Cake",
    image:
      "https://res.cloudinary.com/dq2nawkx9/image/upload/v1692693325/368395679_1466732064139974_3193278221953923635_n_wwvzby.jpg",
  },
  {
    id: 2,
    title: "Discover the Magic of Homemade Cakes",
    image:
      "https://res.cloudinary.com/dq2nawkx9/image/upload/v1659883153/cake3_isr0m5.jpg",
  },
  {
    id: 3,
    title:
      "Freshly Baked Daily, Perfect for Any Celebration - Birthdays, Weddings, and Everyday Cravings.",
    image:
      "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001979/293448324_396611009000706_3307098636862807547_n_i08j7y.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-20rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center  p-4 md:p-10 md:text-5xl xl:text-5xl">
          {data[currentSlide].title}
        </h1>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
