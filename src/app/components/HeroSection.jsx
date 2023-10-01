"use client";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import { useEffect } from "react";

const HeroSection = () => {
  gsap.registerPlugin(Draggable);
  useEffect(() => {
    var cards = gsap.utils.toArray(".creative-pro"),
      dragDistancePerRotation = 3000,
      radius = 520,
      proxy = document.createElement("div"), // just a dummy element that'll get dragged, but we don't care about it.
      progressWrap = gsap.utils.wrap(0, 1),
      spin = gsap.fromTo(
        cards,
        {
          rotationY: (i) => (i * 360) / cards.length,
        },
        {
          rotationY: "-=360",
          duration: 20,
          ease: "none",
          repeat: -1,
          transformOrigin: "50% 50% " + -radius + "px",
        }
      ),
      startProgress;

    Draggable.create(proxy, {
      trigger: ".demoWrapper", // activate the dragging when the user presses on the .demoWrapper
      type: "x", // we only care about movement on the x-axis.
      inertia: true,
      allowNativeTouchScrolling: true,
      onPress() {
        gsap.killTweensOf(spin); // if it's in the middle of animating the spin back to timeScale: 1, kill that.
        spin.timeScale(0); // stop the spin.
        startProgress = spin.progress(); // remember the current progress value because we'll make the drag relative to that.
      },
      onDrag: updateRotation,
      onThrowUpdate: updateRotation,
      onRelease() {
        if (!this.tween || !this.tween.isActive()) {
          // if the user clicked and released (no inertia flick), resume the spin
          gsap.to(spin, { timeScale: 1, duration: 1 });
        }
      },
      onThrowComplete() {
        // resume the spin after the inertia tween finishes
        gsap.to(spin, { timeScale: 1, duration: 1 });
      },
    });

    function updateRotation() {
      let p = startProgress + (this.startX - this.x) / dragDistancePerRotation;
      spin.progress(progressWrap(p));
    }
  }, []);
  return (
    <section className="">
      <h2 class="titles">The Creative Process</h2>

      <div class="demoWrapper">
        <div class="card box creative-pro" style={{ maxWidth: "35rem" }}>
          <img class="card-img-top" src="/images/cakes/cake2.jpg" alt="" />
          <div class="card-body p-6">
            Conception
            <small class="card-clr d-block mb-3">
              <br />
              Curabitur dictum odio id sapien placerat lacinia. In volutpat a
              elit et luctus.{" "}
            </small>
          </div>
        </div>

        <div class="card box creative-pro" style={{ maxWidth: "18rem" }}>
          <img class="card-img-top" src="/images/cakes/cake3.jpg" alt="" />
          <div class="card-body p-6">
            Sketch Up
            <small class="card-clr d-block mb-3">
              <br />
              Sed nec tincidunt erat. Duis nunc mi, dictum nec ligula quis,
              mollis condimentum odio. Mauris in orci id libero ultrices
              vestibulum.{" "}
            </small>
          </div>
        </div>

        <div class="card box creative-pro" style={{ maxWidth: "18rem" }}>
          <img class="card-img-top" src="/images/cakes/cake4.jpg" alt="" />
          <div class="card-body p-6">
            Discuss
            <small class="card-clr d-block mb-3">
              <br />
              Sed nec tincidunt erat. Duis nunc mi, dictum nec ligula quis,
              mollis condimentum odio. Mauris in orci id libero ultrices
              vestibulum.{" "}
            </small>
          </div>
        </div>

        <div class="card box creative-pro ">
          <img class="card-img-top" src="/images/cakes/cake5.jpg" alt="" />
          <div class="card-body p-6">
            Revise
            <small class="card-clr d-block mb-3">
              <br />
              Curabitur dictum odio id sapien placerat lacinia. In volutpat a
              elit et luctus.{" "}
            </small>
          </div>
        </div>

        <div class="card box creative-pro rounded-3x overflow-hidden w-md-50 w-lg-25">
          <img class="card-img-top" src="/images/cakes/cake6.jpg" alt="" />
          <div class="card-body p-6">
            Approve
            <small class="card-clr d-block mb-3">
              <br />
              Curabitur dictum odio id sapien placerat lacinia. In volutpat a
              elit et luctus.{" "}
            </small>
          </div>
        </div>

        <div class="card box creative-pro rounded-3x overflow-hidden w-md-50 w-lg-25">
          <img class="card-img-top" src="/images/cakes/cake7.jpg" alt="" />
          <div class="card-body p-6">
            Launch
            <small class="card-clr d-block mb-3">
              <br />
              Curabitur dictum odio id sapien placerat lacinia. In volutpat a
              elit et luctus. Proin eu pulvinar augue.{" "}
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
