/* eslint-disable @typescript-eslint/no-explicit-any */
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

export const titleAnimation = () => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1200px)", () => {
    if (document.querySelectorAll(".hero-area").length > 0) {
      const ab2 = gsap.timeline({
        duration: 5,
        scrollTrigger: {
          trigger: ".hero-area",
          scrub: 2,
          start: "top 100%",
          end: "bottom 0%",
        },
      });
      ab2.to(".big-text-wrapper .big-text", {
        scale: 0.1,
        duration: 2,
        y: "76%",
        transformOrigin: "bottom center",
      });
      ab2.to(".about-area", {
        scrollTrigger: {
          trigger: ".about-area",
          start: "top 0",
          end: "bottom bottom",
          pin: ".about-area",
          pinSpacing: false,
          scrub: 1,
        },
      });
      ab2.to(".big-text-wrapper", {
        scrollTrigger: {
          trigger: ".about-area",
          start: "top top",
          end: "bottom bottom",
          pin: ".big-text-wrapper",
          pinSpacing: false,
          scrub: 1,
        },
      });
      gsap.to([".about-area .text-wrapper", ".about-area .btn-wrapper"], {
        y: "40",
        delay: 2,
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-area",
          start: "top center",
          end: "center center",
          scrub: 1,
        },
      });
    }
  });
};

export const fadeAnimation = () => {
  const fadeArrayItems = document.querySelectorAll<HTMLElement>(".fade-anim");

  if (fadeArrayItems.length > 0) {
    const fadeArray = gsap.utils.toArray<HTMLElement>(".fade-anim");

    fadeArray.forEach((item) => {
      const fade_direction: string =
        item.getAttribute("data-direction") || "bottom";
      const fade_offset: number = parseFloat(
        item.getAttribute("data-offset") || "50",
      );
      const duration_value: number = parseFloat(
        item.getAttribute("data-duration") || "1.15",
      );
      const delay_value: number = parseFloat(
        item.getAttribute("data-delay") || "0.15",
      );
      const ease_value: string = item.getAttribute("data-ease") || "power2.out";
      const onscroll_value: number = parseInt(
        item.getAttribute("data-on-scroll") || "1",
      );

      const from_state: gsap.TweenVars = {
        opacity: 0,
      };

      const to_state: gsap.TweenVars = {
        opacity: 1,
        ease: ease_value,
        duration: duration_value,
        delay: delay_value,
      };

      if (fade_direction === "top") {
        from_state.y = -fade_offset;
        to_state.y = 0;
      } else if (fade_direction === "left") {
        from_state.x = -fade_offset;
        to_state.x = 0;
      } else if (fade_direction === "bottom") {
        from_state.y = fade_offset;
        to_state.y = 0;
      } else if (fade_direction === "right") {
        from_state.x = fade_offset;
        to_state.x = 0;
      }

      if (onscroll_value === 1) {
        to_state.scrollTrigger = {
          trigger: item,
          start: "top 85%",
          immediateRender: false,
        };
      }

      gsap.fromTo(item, from_state, to_state);
    });
  }
};

export const goVisibleAnimation = () => {
  if (document.querySelectorAll(".go-visible").length > 0) {
    const govisible = document.querySelectorAll(".go-visible");
    govisible.forEach((item) => {
      gsap.to(item, {
        opacity: "1",
        ease: "none",
        scrollTrigger: {
          trigger: item,
          scrub: 1,
          start: "top 40%",
          end: "top 30%",
        },
      });
    });
  }
};

export const RRTitleAnimation = () => {
  const hoverText = document.querySelectorAll(".rr_title_anim");
  if (hoverText.length > 0) {
    const splitTitleLines = gsap.utils.toArray(".rr_title_anim");
    splitTitleLines.forEach((splitTextLine: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none reverse",
        },
      });

      const itemSplitted = new SplitText(splitTextLine, {
        type: "words, lines",
      });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" });
      tl.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });
  }
};

export const charAnimation = () => {
  const charAnimItems = document.querySelectorAll<HTMLElement>(".char-anim");
  if (charAnimItems.length > 0) {
    charAnimItems.forEach((item) => {
      const stagger_value = Number(item.getAttribute("data-stagger")) || 0.05;
      const translateX_value =
        Number(item.getAttribute("data-translateX")) || 20;
      const translateY_value =
        Number(item.getAttribute("data-translateY")) || 0;
      const onscroll_value = Number(item.getAttribute("data-on-scroll")) || 1;
      const data_delay = Number(item.getAttribute("data-delay")) || 0.1;
      const data_duration = Number(item.getAttribute("data-duration")) || 1;
      const ease_value = item.getAttribute("data-ease") || "power2.out";

      // Helper to check if a value is set and > 0
      const hasX = !!translateX_value;
      const hasY = !!translateY_value;

      // gsap.set(item, { opacity: 0 });

      const split_char = new SplitText(item, { type: "lines, chars" });

      gsap.set(split_char.chars, { autoAlpha: 0 });

      if (onscroll_value === 1) {
        if (hasX && !hasY) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              immediateRender: false,
            },
          });
          tl.set(item, { opacity: 1 });
          tl.fromTo(
            split_char.chars,
            {
              x: translateX_value,
              autoAlpha: 0,
            },
            {
              x: 0,
              autoAlpha: 1,
              duration: data_duration,
              delay: data_delay,
              stagger: stagger_value,
              ease: ease_value,
            },
          );
        } else if (hasY && !hasX) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              immediateRender: false,
            },
          });
          tl.set(item, { opacity: 1 });
          tl.fromTo(
            split_char.chars,
            {
              y: translateY_value,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: data_duration,
              delay: data_delay,
              ease: ease_value,
              stagger: stagger_value,
            },
          );
        } else if (hasX && hasY) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              immediateRender: false,
            },
          });
          tl.set(item, { opacity: 1 });
          tl.fromTo(
            split_char.chars,
            {
              y: translateY_value,
              x: translateX_value,
              autoAlpha: 0,
            },
            {
              y: 0,
              x: 0,
              autoAlpha: 1,
              duration: data_duration,
              delay: data_delay,
              ease: ease_value,
              stagger: stagger_value,
            },
          );
        } else {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              immediateRender: false,
            },
          });
          tl.set(item, { opacity: 1 });
          tl.fromTo(
            split_char.chars,
            {
              x: 50,
              autoAlpha: 0,
            },
            {
              x: 0,
              autoAlpha: 1,
              duration: data_duration,
              delay: data_delay,
              stagger: stagger_value,
              ease: ease_value,
            },
          );
        }
      } else {
        gsap.set(item, { opacity: 1 });
        if (hasX && !hasY) {
          gsap.fromTo(
            split_char.chars,
            {
              x: translateX_value,
              autoAlpha: 0,
            },
            {
              x: 0,
              autoAlpha: 1,
              duration: data_duration,
              delay: data_delay,
              ease: ease_value,
              stagger: stagger_value,
            },
          );
        } else if (hasY && !hasX) {
          gsap.fromTo(
            split_char.chars,
            {
              y: translateY_value,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: data_duration,
              delay: data_delay,
              ease: ease_value,
              stagger: stagger_value,
            },
          );
        } else if (hasX && hasY) {
          gsap.fromTo(
            split_char.chars,
            {
              y: translateY_value,
              x: translateX_value,
              autoAlpha: 0,
            },
            {
              y: 0,
              x: 0,
              autoAlpha: 1,
              duration: data_duration,
              delay: data_delay,
              ease: ease_value,
              stagger: stagger_value,
            },
          );
        } else {
          gsap.fromTo(
            split_char.chars,
            {
              x: 500,
              autoAlpha: 0,
            },
            {
              x: 0,
              autoAlpha: 1,
              duration: data_duration,
              delay: data_delay,
              ease: ease_value,
              stagger: stagger_value,
            },
          );
        }
      }
    });

    const revealContainers = document.querySelectorAll<HTMLElement>(".return");
    revealContainers.forEach((container) => {
      const image = container.querySelector("img");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, {
        xPercent: -100,
        duration: 1.5,
        ease: "power2.out",
      });
      if (image) {
        tl.from(image, {
          xPercent: 100,
          scale: 1.3,
          delay: -1.5,
          duration: 1.5,
          ease: "power2.out",
        });
      }
    });
  }
};

export const textInvertWithScrollAnimation = () => {
  const split = new SplitText(".text-invert", { type: "lines" });
  split.lines.forEach((target) => {
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        start: "top 85%",
        end: "bottom center",
      },
    });
  });
};
