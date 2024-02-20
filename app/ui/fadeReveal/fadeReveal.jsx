"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./fadeReaveal.module.css";

const FadeReveal = ({ children, duration, threshold, x }) => {
  const ref = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

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

      const newRefVar = ref.current;
      return () => {
        if (newRefVar) {
          intersectObs.unobserve(newRefVar);
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
        !intersecting
          ? `${styles.fadeReveal__Hidden}`
          : `${styles.fadeReveal__Visible}`
      } `}
    >
      {children}
    </div>
  );
};
export default FadeReveal;
