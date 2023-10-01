"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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
    <div className="max-w-5xl	 mx-auto">
      <div>
        Choose the world you want <br className="" /> to explore
      </div>

      <div className="grid grid-cols-3 gap-10">
        <Image
          width="400"
          height="400"
          src="/images/cakes/cake1.jpg"
          alt=""
          class="skewElem"
        />
        <Image
          width="400"
          height="400"
          src="/images/cakes/cake1.jpg"
          alt=""
          class="skewElem"
        />
        <Image
          width="400"
          height="400"
          src="/images/cakes/cake1.jpg"
          alt=""
          class="skewElem"
        />
        <Image
          width="400"
          height="400"
          src="/images/cakes/cake1.jpg"
          alt=""
          class="skewElem"
        />
        <Image
          width="400"
          height="400"
          src="/images/cakes/cake1.jpg"
          alt=""
          class="skewElem"
        />
        <Image
          width="400"
          height="400"
          src="/images/cakes/cake1.jpg"
          alt=""
          class="skewElem"
        />
        <Image
          width="400"
          height="400"
          src="/images/cakes/cake1.jpg"
          alt=""
          class="skewElem"
        />
        <Image
          width="400"
          height="400"
          src="/images/cakes/cake1.jpg"
          alt=""
          class="skewElem"
        />
        <Image
          width="400"
          height="400"
          src="/images/cakes/cake1.jpg"
          alt=""
          class="skewElem"
        />
        <Image width="400" height="400" src="/0" alt="" class="skewElem" />
      </div>
    </div>
  );
};

export default Explore;

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
