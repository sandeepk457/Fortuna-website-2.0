"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        bottom-28
        right-8
        z-40
        w-14
        h-14
        rounded-full
        bg-[#C8102E]
        text-white
        shadow-xl
        hover:scale-110
        hover:shadow-[0_0_25px_rgba(200,16,46,0.5)]
        transition-all
        duration-300
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <ChevronUp className="w-6 h-6 mx-auto" />
    </button>
  );
}