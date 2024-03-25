"use client";

import { useEffect, createRef } from "react";

import Custom403 from "@/components/ErrorPages/Custom403";
import Custom500 from "@/components/ErrorPages/Custom500";
import ErrorPagesFooter from "@/components/Footer/ErrorPagesFooter";
import UnderMaintenance from "@/components/ErrorPages/UnderMaintenance";

import { useRouter } from "next/navigation";
import Error from "next/error";

import lottie from "lottie-web";

export async function getServerSideProps() {
  // Simulate a 500 internal server error
  throw new Error("Simulated 500 Error");

  // Alternatively, you can return an error response object like this:
  // return {
  //   props: {},
  //   notFound: true, // This will simulate a 404 error
  // };
}

export default function NotFound() {
  const router = useRouter();
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      rerender: "svg",
      loop: true,
      autoplay: true,
      path: "/assets/two-palm-tree-animation.json",
    });

    return () => anim.destroy();
  }, [animationContainer]);

  // Only used for checking other custom error page component
  if (false) {
    return (
      <Custom403 />
      // <Error statusCode={500} />
    );
  }

  return (
    <div className="h-[100vh] lg:h-[120vh]">
      <div className="global-bg-to-linear-gradient-purple flex h-[60%] flex-row justify-center px-[5%] lg:h-[55%] xl:px-[15%] 2xl:px-[20%]">
        <div className="mb-[-25px] flex w-full flex-col items-center justify-end 2xl:mr-[-5rem]">
          <h1 className="global-error-text-1">404</h1>
          <h2 className="global-header-text-1 mb-6">Oh No! Page not found.</h2>
          <p className="global-header-text-3 text-center">
            The page must&apos;ve gone to vacation.
          </p>
          <button
            onClick={() => router.back()}
            className="global-primary-btn mt-5 px-12 py-4 text-center"
          >
            Go Back
          </button>
        </div>
        <div className="mb-[-12%] hidden w-full flex-col items-center justify-end lg:flex">
          <div className="w-full" ref={animationContainer} />
        </div>
      </div>
      <div className="global-bg-to-dark-purple flex h-[40%] flex-row items-end lg:h-[50%]">
        <ErrorPagesFooter />
      </div>
    </div>
  );
}
