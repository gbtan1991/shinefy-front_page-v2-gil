"use client";

import { useState, useEffect } from "react";

import "@/styles/globals.css";

export default function BackToTopButton() {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkVerticalScrollDistance);

    return () => {
      window.removeEventListener("scroll", checkVerticalScrollDistance);
    };
  }, []);

  const checkVerticalScrollDistance = () => {
    if (window.scrollY > 1650) {
      setShowBackToTopBtn(true);
    } else {
      setShowBackToTopBtn(false);
    }
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showBackToTopBtn && (
        <button
          onClick={scrollUp}
          className="fixed bottom-10 right-10 h-10 w-10"
        >
          <div className="arrow-up-icon"></div>
        </button>
      )}
    </>
  );
}
