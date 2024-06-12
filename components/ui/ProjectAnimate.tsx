// "use client";
// import { motion, useScroll } from "framer-motion";
// import React, { useRef } from "react";

// export default function ProjectAnimage({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const itemRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: itemRef,
//     offset: ["0 1", "1.24 1"],
//     layoutEffect: false,
//   });
//   return (
//     <motion.div
//       ref={itemRef}
//       style={{
//         scale: scrollYProgress,
//         opacity: scrollYProgress,
//       }}
//       className="relative"
//     >
//       {children}
//     </motion.div>
//   );
// }

"use client";
import { motion, useScroll } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export default function ProjectAnimage({
  children,
}: {
  children: React.ReactNode;
}) {
  const itemRef = useRef(null);
  const { scrollY } = useScroll();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > prevScrollY) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
      setPrevScrollY(latest);
    });
  }, [scrollY, prevScrollY]);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["0 1", "1.24 1"],
    layoutEffect: false,
  });

  return (
    <motion.div
      ref={itemRef}
      style={{
        scale: scrollDown ? scrollYProgress : 1,
        opacity: scrollDown ? scrollYProgress : 1,
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
