"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./fadeReaveal.module.css";
const FadeReveal = ({ children, duration, threshold, x }) => {
  const ref = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

//   Among others, InterSectionObserver contains:
//   intersectionRatio
//   isIntersecting
//   isVisible
//   ref.current referes to the elements that are visible on the screen
  
  useEffect(() => {
    if (ref.current) {
      const intersectObs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIntersecting(true);
          } else {
            setIntersecting(false);
          }
        },
        {
          threshold,
        }
      );

      intersectObs.observe(ref.current);

      return () => {
        if (ref.current) {
          intersectObs.unobserve(ref.current);
        }
      };
    }
  });
  return (
    <div
      style={{
        transitionDuration: duration,
        transform: !intersecting ? `translate(${x}px)` : "translate(0px)",
      }}
      ref={ref}
      className={` ${
        !intersecting ? `${styles.opacity0}` : `${styles.opacity100}`
      } `}
    >
      {children}
    </div>
  );
};
export default FadeReveal;
