"use client";

import { useEffect, createRef } from "react";

import ErrorPagesFooter from "@/components/Footer/ErrorPagesFooter";

import lottie from "lottie-web";

export default function Custom403() {
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      rerender: "svg",
      loop: true,
      autoplay: true,
      path: "/assets/hero-banner-shine-ai-flying.json",
    });

    return () => anim.destroy();
  }, [animationContainer]);

  return (
    <div className="h-[100vh] lg:h-[120vh]">
      <div className="global-bg-to-linear-gradient-purple flex h-[60%] flex-row justify-center px-[5%] lg:h-[55%] xl:px-[15%] 2xl:px-[20%]">
        <div className="mb-8 flex w-full flex-col items-center justify-end 2xl:mr-[-5rem]">
          <h1 className="global-error-text-1">403</h1>
          <h2 className="global-header-text-1 mb-8 text-center">
            Sorry, you’re not supposed to see this.
          </h2>
          <p className="global-header-text-3 text-center">
            Your subscription does not include this feature.
          </p>
        </div>
        <div className="mb-[-20%] hidden w-full flex-col items-center justify-end lg:flex">
          <div className="w-full" ref={animationContainer} />
        </div>
      </div>
      <div className="global-bg-to-dark-purple flex h-[40%] flex-row items-end lg:h-[50%]">
        <ErrorPagesFooter />
      </div>
    </div>
  );
}
