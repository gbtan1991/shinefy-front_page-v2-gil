"use client";

import React, { createRef, useEffect } from "react";

import ContactInfo from "@/components/Contacts/ContactInfo";
import FooterPage from "@/components/Footer/Footer";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";

import lottie from "lottie-web";

import "./Tools.css";

export default function Tools() {
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
    <>
      <header className="global-header-section-bg min-h-[48rem] px-[5%] pt-[16rem] lg:pt-[15.5rem] xl:px-[18%]">
        <div className="flex flex-col md:items-center">
          <h1 className="global-header-text-1 mb-6 md:text-center">Shinefy</h1>
          <h3 className="global-header-text-2 mb-6 md:text-center">
            Your Staple Shinefy Product -
          </h3>
          <p className="global-header-text-3 md:text-center">
            Last updated 14 September, 2023
          </p>
        </div>
      </header>

      <section className="global-section-container-under-header px-[5%] pb-10 md:pb-20 xl:px-[18%] xl:pb-0">
        <div className="global-content-container-under-header mb-14">
          <a href="/">Home</a>
          <span> {`>`} </span>
          <a href="#" className="global-category-current">
            Tools
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center justify-evenly md:flex-row">
          <div className="w-full max-w-[750px]">
            <h2 className="tools-small-text-1 mb-6">
              Your Staple Shinefy Product -
            </h2>
            <h1 className="global-header-text-2 mb-6">
              An ultimate platform to channel your creativity!
            </h1>
            <p className="global-header-text-3 max-w-[720px]">
              Ready to experience the future of content creation? What if
              creating viral content was astonishingly easy? With Shinefy, you
              can get the future AI solution that generates engaging viral
              videos and tons of bucks in just a few clicks - no professional
              skills required. There&apos;s simply quite nothing like this
              revolutionary technology that lets you sit and collect passively.
              <br />
              <br />
              Shinefy is a powerful all-in-one tool that makes generation of
              viral videos astonishingly easy so you can sit and collect
              passively!
            </p>
          </div>
          <div>
            <div className="w-72 md:w-auto" ref={animationContainer} />
          </div>
        </div>
      </section>

      <section className="global-bg-to-purple flex w-full items-center justify-center px-[5%] xl:px-[18%]">
        <div className="flex w-full flex-col items-center py-20 text-center">
          <h3 className="global-header-text-1 mb-6">
            The best of Shinefy tools
          </h3>
          <h2 className="global-header-text-2 mb-6">
            We say, you can have it all
          </h2>
          <p className="global-header-text-3 max-w-[64rem]">
            Make most out of your content creation with these powerful tools
            that lets you save time and energy. Tools that extracts data from
            websites, automate video creation, crafts traffic-driven campaigns,
            captivates audiences with customized videos and a bunch more. Say
            goodbye to time-consuming tools and hello to instant productivity -
            all made easier.
          </p>
        </div>
      </section>

      <section className="px-[5%] xl:px-[18%]">
        <div className="flex flex-col gap-y-24 py-20">
          {/* <div className="flex w-full flex-col items-center justify-evenly gap-20 lg:flex-row lg:gap-10">
            <div className="">
              <div>
                <img
                  src="/svg/tools/globe.svg"
                  alt="earth globe icon"
                  width="40px"
                  className="mb-6"
                />
              </div>
              <h1 className="global-header-text-2 mb-6">Website Scraper</h1>
              <p className="tools-small-text-1 max-w-[27rem]">
                Extract data from any websites from user-provided keywords. It
                gives over 200 results and allows you to download data as
                spreadsheet file in just mere seconds!
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/tools/tools-webscrape.png"
                alt="Shine Ranker Web Scraper Tool"
                className="tools-img-shadow w-[95%] md:w-[500px] lg:w-[338px]"
              />
            </div>
          </div> */}

          <div className="flex w-full flex-col-reverse items-center justify-evenly gap-20 lg:flex-row">
            <div className="flex flex-row gap-x-2">
              <div className="flex flex-row justify-center gap-2">
                <img
                  src="/images/tools/portrait-video-thumbnail-1.png"
                  alt="Shine Ranker Video Generator"
                  className="tools-img-shadow w-[48%] rounded md:w-[252px] lg:w-[172px]"
                />
                <img
                  src="/images/tools/portrait-video-thumbnail-2.png"
                  alt="Shine Ranker Video Generator"
                  className="tools-img-shadow w-[48%] rounded md:w-[252px] lg:w-[172px]"
                />
              </div>
            </div>
            <div className="">
              <div>
                <img
                  src="/svg/tools/video-generator.svg"
                  alt="multiple video icon"
                  width="40px"
                  className="mb-6"
                />
              </div>
              <h1 className="global-header-text-2 mb-6">Video Generation</h1>
              <p className="tools-small-text-1 max-w-[27rem]">
                Easily generate precise videos from a single prompt ready for
                launch. Cap it off with animations, audio, captions and more!
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-evenly gap-20 lg:flex-row lg:gap-10">
            <div className="">
              <div>
                <img
                  src="/svg/tools/video-generator.svg"
                  alt="multiple video icon"
                  width="40px"
                  className="mb-6"
                />
              </div>
              <h1 className="global-header-text-2 mb-6">Video Transcriber</h1>
              <p className="tools-small-text-1 max-w-[28rem]">
                Transform and elevate your video content effortlessly with our Video Transcriber Tool.
                This innovative solution allows you to enhance and recreate any video, ensuring a unique and improved output.
              </p>
            </div>
            <div className="flex w-[90%] flex-row justify-evenly gap-2 lg:w-auto lg:justify-start">
              <img
                src="/images/tools/text-to-image-1.png"
                alt="Shine Ranker Text to Image"
                className="tools-img-shadow w-[20%] rounded md:w-[100px] lg:w-[70px]"
              />
              <img
                src="/images/tools/text-to-image-2.png"
                alt="Shine Ranker Text to Image"
                className="tools-img-shadow w-[20%] rounded md:w-[100px] lg:w-[70px]"
              />
              <img
                src="/images/tools/text-to-image-3.png"
                alt="Shine Ranker Text to Image"
                className="tools-img-shadow w-[20%] rounded md:w-[100px] lg:w-[70px]"
              />
              <img
                src="/images/tools/text-to-image-4.png"
                alt="Shine Ranker Text to Image"
                className="tools-img-shadow w-[20%] rounded md:w-[100px] lg:w-[70px]"
              />
              <img
                src="/images/tools/text-to-image-5.png"
                alt="Shine Ranker Text to Image"
                className="tools-img-shadow w-[20%] rounded md:w-[100px] lg:w-[70px]"
              />
            </div>
          </div>

          {/* <div className="flex w-full flex-col items-center justify-evenly gap-20 lg:flex-row lg:gap-10">
            <div className="">
              <div>
                <img
                  src="/svg/tools/monitor.svg"
                  alt="monitor icon"
                  width="40px"
                  className="mb-6"
                />
              </div>
              <h1 className="global-header-text-2 mb-6">Viral Topic Finder</h1>
              <p className="tools-small-text-1 max-w-[28rem]">
                Stay on top, bring more leads, drive traffic and take your first
                spot on search engines with a click - using this cutting-edge
                keywords finder!
              </p>
            </div>
            <div className="flex w-[90%] flex-row justify-evenly gap-2 lg:w-auto lg:justify-start">
              <img
                src="/images/tools/text-to-image-1.png"
                alt="Shine Ranker Text to Image"
                className="tools-img-shadow w-[20%] rounded md:w-[100px] lg:w-[70px]"
              />
              <img
                src="/images/tools/text-to-image-2.png"
                alt="Shine Ranker Text to Image"
                className="tools-img-shadow w-[20%] rounded md:w-[100px] lg:w-[70px]"
              />
              <img
                src="/images/tools/text-to-image-3.png"
                alt="Shine Ranker Text to Image"
                className="tools-img-shadow w-[20%] rounded md:w-[100px] lg:w-[70px]"
              />
              <img
                src="/images/tools/text-to-image-4.png"
                alt="Shine Ranker Text to Image"
                className="tools-img-shadow w-[20%] rounded md:w-[100px] lg:w-[70px]"
              />
              <img
                src="/images/tools/text-to-image-5.png"
                alt="Shine Ranker Text to Image"
                className="tools-img-shadow w-[20%] rounded md:w-[100px] lg:w-[70px]"
              />
            </div>
          </div> */}

          <div className="flex w-full flex-col-reverse items-center justify-evenly gap-20 lg:flex-row lg:gap-10">
            <div className="flex justify-center">
              <img
                src="/images/tools/AI-CHAT.PNG"
                alt="Shine Ranker Web Scraper Tool"
                className="tools-img-shadow w-[90%] rounded md:w-[500px] lg:w-[410px]"
              />
            </div>
            <div className="">
              <div>
                <img
                  src="/svg/tools/ai-face.svg"
                  alt="ai face icon"
                  width="40px"
                  className="mb-6"
                />
              </div>
              <h1 className="global-header-text-2 mb-6">AI Chat</h1>
              <p className="tools-small-text-1 max-w-[28rem]">
                Take it easy as your AI companion tackles any tasks and complex
                conversations generating you trending contents with a human
                touch at the drop of a hat!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="global-section-background-2 px-[5%]  pb-28 pt-20 xl:px-[18%]">
        <div className="relative flex flex-col  items-center pb-8">
          <h3 className="global-header-text-1 mb-6">Benefits</h3>
          <h3 className="global-header-text-2 mb-6 text-center">
            All About Shinefy.tools
          </h3>
          <p className="global-header-text-3">
            Our tools help our users scale up
          </p>
        </div>

        <div className="relative grid grid-cols-6 justify-center gap-8 2xl:px-32">
          <div className="tools-grid-card col-span-6 col-start-1 flex flex-col rounded px-6 pb-28 pt-12 md:col-span-3 lg:col-span-2">
            <h3 className="tools-header-small-text-2 h-36">
              Comprehensive SEO Tool
            </h3>
            <p className="tools-small-text-1">
              <strong>Shinefy</strong> offers a wide range of AI and SEO
              features that takes content creation further, making it a
              one-stop-shop solution for website owners and digital marketers.
            </p>
          </div>

          <div className="tools-grid-card col-span-6 flex flex-col rounded px-6 pb-28 pt-12 md:col-span-3 lg:col-span-2 lg:col-start-3">
            <h3 className="tools-header-small-text-2 h-36">AI-Driven Data</h3>
            <p className="tools-small-text-1">
              <strong>Shinefy</strong>’s AI-driven service provides users with
              accurate and latest tools, while ensuring top-notch performance.
            </p>
          </div>

          <div className="tools-grid-card col-span-6 flex flex-col rounded px-6 pb-28 pt-12 md:col-span-3 lg:col-span-2 lg:col-start-5">
            <h3 className="tools-header-small-text-2 h-36">
              User-friendly Interface
            </h3>
            <p className="tools-small-text-1">
              The platform’s intuitive design and user-friendly interface makes
              navigating and utilizing the available features - easy for users
              of all experience levels.
            </p>
          </div>

          <div className="tools-grid-card col-span-6 flex flex-col rounded px-6 pb-28 pt-12 md:col-span-3 lg:col-span-2 lg:col-start-2">
            <h3 className="tools-header-small-text-2 h-36">Time Saving</h3>
            <p className="tools-small-text-1">
              Users can save time, create content, and streamline their workflow
              with all the essential AI and SEO tools and features packed into
              one platform.
            </p>
          </div>

          <div className="tools-grid-card col-span-6 flex flex-col rounded px-6 pb-28 pt-12 md:col-span-4 md:col-start-2 lg:col-span-2">
            <h3 className="tools-header-small-text-2 h-36">
              Scalable Solutions
            </h3>
            <p className="tools-small-text-1">
              <strong>Shinefy</strong> is suitable for business of all sizes,
              from small startups to large enterprises, making it a scalable
              solution that can grow with the user’s needs.
            </p>
          </div>
        </div>
      </section>

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />
    </>
  );
}
