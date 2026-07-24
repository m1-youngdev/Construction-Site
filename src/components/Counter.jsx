import React from 'react';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Counter({ end, suffix = "", duration = 2 }) {
  const numberRef = useRef(null);

  useEffect(() => {
    const counter = { value: 0 };

    gsap.to(counter, {
      value: end,
      duration,
      ease: "power2.out",
      snap: { value: 1 },

      scrollTrigger: {
        trigger: numberRef.current,
        start: "top 85%",
        once: true,
      },

      onUpdate: () => {
        numberRef.current.textContent = `${counter.value}${suffix}`;
      },
    });
  }, [end, suffix, duration]);

  return <span ref={numberRef}>0{suffix}</span>;
}

export default Counter;