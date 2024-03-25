"use client";

import { useRef, useEffect } from "react";

import CreamOfTheCropSection from "@/app/home/components/CreamOfTheCropSection";
import FooterPage from "@/components/Footer/Footer";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";
import PricingPlanSection from "@/app/pricing/components/PricingPlanSection";
import SocialLinksButtons from "@/components/SocialLinks/SocialLinksButtons";
import TextfieldTooltip from "@/app/home/components/TextfieldTooltip";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import lottie from "lottie-web";

import "./home/styles/Home.css";
import "./home/styles/HomeTextAnimation.css";
import "./pricing/Pricing.css";

export default function Home() {
    let animationContainer = useRef();
    let ourToolsAnimationContainer = useRef();
    let footerAnimationContainer = useRef();

    useEffect(() => {
        const heroAnimation = lottie.loadAnimation({
            container: animationContainer.current,
            rerender: "svg",
            loop: true,
            autoplay: true,
            path: "/assets/shinefy-flying-robot.json",
        });

        const ourToolsAnimation = lottie.loadAnimation({
            container: ourToolsAnimationContainer.current,
            rerender: "svg",
            loop: true,
            autoplay: true,
            path: "/assets/shine-ai-robot-head.json",
        });

        const footerAnimation = lottie.loadAnimation({
            container: footerAnimationContainer.current,
            rerender: "svg",
            loop: true,
            autoplay: true,
            path: "/assets/shinefy-robot-join-us-section.json",
        });

        return () => {
            heroAnimation.destroy();
            ourToolsAnimation.destroy();
            footerAnimation.destroy();
        };
    }, [animationContainer]);

    return (
        <>
            {/* Hero */}
            <section className="hero-custom-bg h-[100vh] px-[5%] lg:min-h-[800px] xl:min-h-[850px] xl:px-[20%]">
                <div className="flex h-full flex-row items-center pb-32 lg:justify-between 2xl:px-5">
                    <header className="hero-header-container">
                        <h2 className="hero-mini-header-text mb-2 md:mb-5">
                            Powerful AI Tools
                        </h2>
                        <h1 className="hero-header-text">
                            <div className="content">
                                <div className="content__container">
                                    <p className="content__container__text">Your</p>
                                    <ul className="content__container__list">
                                        <li className="content__container__list__item">
                                            <span className="hero-header-gradient-text whitespace-nowrap">
                                                Online Growth
                                            </span>
                                        </li>
                                        <li className="content__container__list__item">
                                            <span className="hero-header-gradient-text whitespace-nowrap">
                                                Passive Income
                                            </span>
                                        </li>
                                        <li className="content__container__list__item">
                                            <span className="hero-header-gradient-text whitespace-nowrap">
                                                Viral Content
                                            </span>
                                        </li>
                                        <li className="content__container__list__item">
                                            <span className="hero-header-gradient-text whitespace-nowrap">
                                                Youtube Shorts
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </h1>
                        <h1 className="hero-header-text">Powered by AI Videos</h1>

                        <p className="hero-header-content mb-8 mt-5 max-w-[620px] lg:mb-14">
                            <strong>Shinefy</strong> is a complete collection of powerful AI
                            tools that lets you generate binge-worthy AI videos that drive
                            income with just one click! Powered by
                            <object
                                data="/svg/home/openai-logo.svg"
                                type="image/svg+xml"
                                height="40"
                                className="hero-header-openAI-logo"
                            >
                                <img
                                    src="/svg/home/openai-logo.svg"
                                    alt="OpenAI Logo"
                                    height="40"
                                />
                            </object>
                        </p>

                        <div className="flex flex-col md:flex-row">
                            {/* Temporarily hidden because don't have functionality yet - JOHN 06/10/23 */}
                            {/* <TextfieldTooltip>
                                <input
                                    type="text"
                                    className="global-input-1 mb-2 h-14 w-full pl-4 pr-[3rem] text-center md:mb-0 md:mr-[-2rem] md:w-[65%] 2xl:w-[55%]"
                                    placeholder="type an idea here"
                                />
                            </TextfieldTooltip> */}

                            <a
                                href="https://realchasereiner.kartra.com/page/shinefyai2"
                                rel="noreferrer"
                                className="global-primary-btn flex items-center justify-center px-20 py-4"
                            >
                                Get Started
                            </a>
                        </div>
                    </header>

                    <div className="hero-animation-container mt-44 hidden lg:mt-0 lg:block">
                        <div
                            className=""
                            style={{ height: "440px", width: "380px" }}
                            ref={animationContainer}
                        />
                    </div>
                </div>
            </section>

            {/* Powerful AI Tool */}
            {/* <section className="how-to-use-shine-ai-section px-[5%] pb-16 pt-14 xl:px-[18%] ">
                <div className="mt-[-11rem] flex flex-col items-center gap-5">
                    <h3 className="global-header-text-1 mb-3 w-full md:text-center">
                        A Powerful AI Tool
                    </h3>
                    <h2 className="global-header-text-2 mb-3 md:text-center">
                        That’s All About Your Online Growth
                    </h2>
                    <p className="global-header-text-3 max-w-[516px] md:text-center">
                        Watch the free training video and start earning money today even if
                        you are not an expert
                    </p>
                    <a
                        href={`https://www.youtube.com/watch?v=PL3PXYFdlsU&t=2s`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/images/global/training-video.png"
                            alt="Shine Ai Training Video thumbnail"
                            width="480px"
                            height="270px"
                            className="home-training-image my-8"
                        />
                    </a>

                    <a
                        href="https://app.shinefy.com"
                        rel="noreferrer"
                        target="_blank"
                        className="home-secondary-btn mb-5 flex w-full items-center justify-center px-5 py-4 md:w-auto"
                    >
                        Generate Your Videos Today
                    </a>
                    <div className="flex gap-x-4 sm:gap-x-10">
                        <img
                            src="/images/home/secure-home.png"
                            alt="Secure SSL Encryption badge"
                            className="how-to-use-shine-ai-badge"
                        />
                        <img
                            src="/images/home/trusted-home.png"
                            alt="Trusted Seller badge"
                            className="how-to-use-shine-ai-badge"
                        />
                        <img
                            src="/images/home/refund-home.png"
                            alt="Full Refund Guarantee badge"
                            className="how-to-use-shine-ai-badge"
                        />
                    </div>
                </div>
            </section> */}

            {/* Our Tools */}
            <section>
                <div className="our-tools-container pb-0 pt-10 md:pb-10 lg:pb-0 xl:pt-20">
                    <div className="mb-14 flex flex-col items-center px-5 md:px-0 xl:mb-20">
                        <h3 className="global-header-text-1 mb-5 w-full md:text-center">
                            A Powerful AI Tool
                        </h3>
                        <h2 className="global-header-text-2 mb-5 md:text-center">
                            The best of Shinefy tools
                        </h2>
                        <p className="global-header-text-3 max-w-[720px] md:text-center">
                            Our fool-proof AI tools are easy to navigate, empowering even
                            first-time users with human-like AI that generates money-making
                            video contents and features, making your life easier.
                        </p>
                    </div>

                    <div className="flex flex-col-reverse justify-center lg:flex-row lg:gap-16">
                        <div className="flex flex-col">
                            <div
                                className="2xl:mr-[-3rem]"
                                ref={ourToolsAnimationContainer}
                            />
                            <div className="our-tools-left-content-card flex flex-col items-center px-5 pb-14 pt-44 md:items-start md:px-10 md:pb-10 lg:pt-60 2xl:ml-12">
                                <p className="home-card-header-small mb-5 w-full text-center md:text-start">
                                    Quality creations for content
                                </p>
                                <h1 className="global-header-text-2 mb-5 text-center md:text-start">
                                    Start propelling your growth today.
                                </h1>
                                <p className="home-card-header-content mb-5 text-center md:text-start">
                                    With our tools, you can witness rapid audience and numerical
                                    growth in as little as 7 days.
                                </p>
                                {/* Temporarily hidden because don't have functionality yet - JOHN 06/10/23 */}
                                {/* <input
                                    type="text"
                                    name="user_email"
                                    placeholder="Your Email"
                                    className="home-input-center-placeholder mb-4 text-center"
                                /> */}
                                <a
                                    href="https://realchasereiner.kartra.com/page/shinefyai2"
                                    rel="noreferrer"
                                    className="global-primary-btn mb-6 flex w-full items-center justify-center"
                                >
                                    Let&apos;s Get Started
                                </a>
                                <a href="/pricing" className="home-link">
                                    Pricing Plan
                                    <i className="fa-solid fa-chevron-right ml-3 mt-1 text-white"></i>
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 items-center gap-y-5 px-5 pb-24 md:grid-cols-2 md:gap-x-12 md:gap-y-20 md:px-0 lg:gap-y-10 lg:pb-8 lg:pt-24">
                            <div className="our-tools-grid-item flex flex-col p-8 md:p-0">
                                <img
                                    src="/images/home/Video-Generation.png"
                                    alt="video generator icon"
                                    width="60px"
                                    className="md:mb-5"
                                />
                                <h4 className="our-tools-right-content-title max-w-[200px] py-5 text-start md:max-w-[120px]">
                                    Video Generation Tool
                                </h4>
                                <p className="our-tools-right-content-text">
                                    Easily generate precise videos from a single prompt ready for
                                    launch. Cap it off with animations, audio, captions, and more!
                                </p>
                            </div>
                            <div className="our-tools-grid-item flex flex-col p-8 md:p-0">
                                <img
                                    src="/images/home/Video-Transcriber.png"
                                    alt="video transcriber icon"
                                    width="55px"
                                    className="md:mb-5"
                                />
                                <h4 className="our-tools-right-content-title max-w-[200px] py-5 text-start md:max-w-[120px]">
                                    Video Transcriber Tool
                                </h4>
                                <p className="our-tools-right-content-text">
                                    Transform and elevate your video content effortlessly with our Video Transcriber Tool.
                                    This innovative solution allows you to enhance and recreate any video, ensuring a unique and improved output.
                                </p>
                            </div>
                            {/* <div className="our-tools-grid-item flex flex-col p-8 md:p-0">
                                <img
                                    src="/svg/tools/globe.svg"
                                    alt="earth globe icon"
                                    width="40px"
                                    className="md:mb-5"
                                />
                                <h4 className="our-tools-right-content-title max-w-[180px] py-5 text-start md:max-w-[120px]">
                                    Website Scraper Tool
                                </h4>
                                <p className="our-tools-right-content-text">
                                    Extract data from any websites from user-provided keywords. It
                                    gives over 200 results and allows you to download data as
                                    spreadsheet files in just mere seconds!
                                </p>
                            </div> */}
                            {/* <div className="our-tools-grid-item flex flex-col p-8 md:p-0">
                                <img
                                    src="/svg/tools/monitor.svg"
                                    alt="monitor icon"
                                    width="40px"
                                    className="md:mb-5"
                                />
                                <h4 className="our-tools-right-content-title py-5 text-start">
                                    AI Text to Image Generation <br />
                                    Tool
                                </h4>
                                <p className="our-tools-right-content-text">
                                    Engage your audience with high-quality, impressive videos.
                                </p>
                            </div> */}
                            <div className="our-tools-grid-item flex flex-col p-8 md:p-0">
                                <img
                                    src="/svg/tools/ai-face.svg"
                                    alt="ai face icon"
                                    width="50px"
                                    className="md:mb-5"
                                />
                                <h4 className="our-tools-right-content-title py-5 text-start">
                                    AI Chat
                                </h4>
                                <p className="our-tools-right-content-text">
                                    Take it easy as your AI companion tackles any tasks and complex conversations
                                    generating you trending contents with a human touch at the drop of a hat!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Plan */}
            <section>
                <div className="pricing-plan-header-custom-bg px-[5%] md:px-[10%] lg:px-[20%]">
                    <div className="flex flex-col items-center pb-14 pt-16 lg:pt-48">
                        <h3 className="global-header-text-1 mb-6">Best Offers</h3>
                        <h2 className="pricing-plan-custom-header-1 mb-6 max-w-[920px] text-center">
                            Let’s Talk Best Pricing Plan
                        </h2>
                        <p className="global-header-text-3 mb-5 max-w-[480px] text-center">
                            Get access to all features of our Powerful AI Tool and be ready to
                            Skyrocket your Online Growth
                        </p>
                    </div>
                </div>

                <div className="mx-[5%] flex flex-col items-center justify-center gap-x-10 py-[50px] md:flex-row lg:mx-[10%] lg:gap-x-20 xl:mx-[20%]">
                    <PricingPlanSection />
                </div>
            </section>

            {/* Cream of the Crop */}
            {/* Temporarily hidden because it is not finish yet - JOHN 06/10/23 */}
            {/* <CreamOfTheCropSection /> */}

            {/* Stunning Image Outputs */}
            <section className="flex flex-col gap-x-20 px-[10%] py-20 lg:flex-row xl:gap-x-28 xl:px-[20%]">
                <div className="mb-12 flex w-full flex-col items-center py-2 lg:mb-0 lg:w-[50%]">
                    <h3 className="global-header-text-2 mb-6 text-center">
                        Stunning Image Outputs
                    </h3>
                    <p className="global-header-text-3 mb-10 max-w-[400px] text-center lg:mb-20">
                        Our image prompt results are astounding and seamless. No need
                        further editing.
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                        <img
                            src="/images/global/SampleImages/penguins.png"
                            alt="penguins image"
                            width="138px"
                            className="stunning-images-grid-img max-h-[110px] border md:max-h-[150px] lg:max-h-[100px] 2xl:max-h-[150px]"
                        />
                        <img
                            src="/images/global/SampleImages/deer-2.png"
                            alt="deer image"
                            width="138px"
                            className="stunning-images-grid-img max-h-[110px] border md:max-h-[150px] lg:max-h-[100px] 2xl:max-h-[150px]"
                        />
                        <img
                            src="/images/global/SampleImages/cat.jpg"
                            alt="cat image"
                            width="138px"
                            className="stunning-images-grid-img max-h-[110px] border md:max-h-[150px] lg:max-h-[100px] 2xl:max-h-[150px]"
                        />
                        <img
                            src="/images/global/SampleImages/eagle.jpg"
                            alt="eagle image"
                            width="138px"
                            className="stunning-images-grid-img max-h-[110px] border md:max-h-[150px] lg:max-h-[100px] 2xl:max-h-[150px]"
                        />
                        <img
                            src="/images/global/SampleImages/piglet.png"
                            alt="piglet image"
                            width="138px"
                            className="stunning-images-grid-img max-h-[110px] border md:max-h-[150px] lg:max-h-[100px] 2xl:max-h-[150px]"
                        />
                        <img
                            src="/images/global/SampleImages/panda.png"
                            alt="panda image"
                            width="138px"
                            className="stunning-images-grid-img max-h-[110px] border md:max-h-[150px] lg:max-h-[100px] 2xl:max-h-[150px]"
                        />
                    </div>
                </div>
                <div className="global-bg-to-dark-purple flex w-full flex-col items-center justify-center rounded-md px-8 py-12 lg:max-w-[50%] 2xl:max-w-[37%]">
                    <h3 className="global-text-to-light-blue mb-10 text-center text-[24px] font-bold">
                        Try it yourself!
                    </h3>
                    <p className="global-header-text-3 mb-14 text-center">
                        Type your desired images for your upcoming videos.
                    </p>

                    {/* Temporarily hidden because it doesnt have functionality yet - JOHN 06/10/23 */}
                    {/* <TextfieldTooltip>
                        <input
                            type="text"
                            className="stunning-images-input mb-2 h-[50px] w-full text-center"
                            placeholder="type an idea here"
                        />
                    </TextfieldTooltip> */}

                    <a
                        href="https://realchasereiner.kartra.com/page/shinefyai2"
                        rel="noreferrer"
                        // target="_blank"
                        className="global-primary-btn flex h-[50px] w-full items-center justify-center"
                    >
                        Generate Your Videos
                    </a>
                </div>
            </section>

            {/* Our Amazing Features */}
            <section className="px-[5%] md:px-[10%] 2xl:px-[20%]">
                <div className="pb-24 pt-36">
                    <div className="flex flex-col items-center">
                        <h3 className="global-header-text-1 mb-5 w-full text-center md:text-center">
                            Shinefy Features
                        </h3>
                        <h2 className="global-header-text-2 mb-5 max-w-[516px] text-center md:text-center">
                            The Best Perks made for you
                        </h2>
                        <p className="global-header-text-3 w-full text-center md:max-w-[720px] md:text-center">
                            To take the easy way for your content creation and lock in your
                            channel growth, these pillars are created just for you!t
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                        <div className="amazing-features-grid-card flex flex-col items-center text-center">
                            <img
                                src="/svg/home/key.svg"
                                alt="key Icon"
                                className="self-center"
                            />
                            <h4 className="card-title mt-12 max-w-[220px]">
                                Access to all Shinefy Features
                            </h4>
                        </div>

                        <div className="amazing-features-grid-card flex flex-col items-center text-center">
                            <img
                                src="/svg/home/chat.svg"
                                alt="Chat Icon"
                                className="self-center"
                            />
                            <h4 className="card-title mt-12 max-w-[350px]">
                                Private Community chat in Messenger
                            </h4>
                        </div>

                        <div className="amazing-features-grid-card flex flex-col items-center text-center">
                            <img
                                src="/svg/home/support.svg"
                                alt="chat support Icon"
                                className="self-center"
                            />
                            <h4 className="card-title mt-12 max-w-[220px]">
                                Email and Chat Support
                            </h4>
                        </div>

                        <div className="amazing-features-grid-card flex flex-col items-center text-center">
                            <img
                                src="/svg/home/update.svg"
                                alt="recycle Icon"
                                className="self-center"
                            />
                            <h4 className="card-title mt-12 max-w-[210px]">
                                Exclusive Shinefy Updates
                            </h4>
                        </div>

                        <div className="amazing-features-grid-card flex flex-col items-center text-center">
                            <img
                                src="/svg/home/vip.svg"
                                alt="crown Icon"
                                className="self-center"
                            />
                            <h4 className="card-title mt-12">
                                VIP Group <br /> Perks & Privileges
                            </h4>
                        </div>

                        <div className="amazing-features-grid-card flex flex-col items-center text-center">
                            <img
                                src="/svg/home/book.svg"
                                alt="open book Icon"
                                className="self-center"
                            />
                            <h4 className="card-title mt-12 max-w-[360px]">
                                Access to All Shinefy Courses and Checklists
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* *** Limited Time Offer section *** */}
            <section className="limited-time-offer-container pt-8 lg:pt-14">
                <LimitedTimeOffer />
            </section>

            {/* *** Credibility *** */}
            <section>
                <div className="mt-0 flex flex-col-reverse justify-end gap-x-4 gap-y-12 overflow-hidden py-28 lg:my-14 lg:flex-row lg:gap-x-10 xl:gap-x-16">
                    <div className="grid grid-cols-1 items-center gap-6 px-16 md:grid-cols-2 lg:mr-[-2rem] lg:pl-6 lg:pr-0">
                        <div className="credibility-grid-card flex flex-col rounded px-8 pb-6 pt-8 text-center">
                            <img
                                src="/images/home/Video-Generation.png"
                                alt="ai face icon"
                                width="66px"
                                height="68px"
                                className="mb-8 self-center"
                            />
                            <p className="our-tools-right-content-title mb-2 py-5 text-center">
                                28,853
                            </p>
                            <p className="our-tools-right-content-text whitespace-nowrap">
                                AI Videos Created
                            </p>
                        </div>
                        <div className="credibility-grid-card flex flex-col rounded px-8 pb-6 pt-8 text-center">
                            <img
                                src="/svg/home/profile.svg"
                                alt="default profile avatar icon"
                                width="63px"
                                height="63px"
                                className="mb-8 self-center"
                            />
                            <p className="our-tools-right-content-title mb-2 py-5 text-center">
                                103,041
                            </p>
                            <p className="our-tools-right-content-text">Sign Ups</p>
                        </div>
                        <div className="credibility-grid-card flex flex-col rounded px-8 pb-6 pt-8 text-center">
                            <img
                                src="/svg/home/bot.svg"
                                alt="Shine AI robot head icon"
                                width="80px"
                                height="57px"
                                className="mb-8 self-center"
                            />
                            <p className="our-tools-right-content-title mb-2 py-5 text-center">
                                14,873
                            </p>
                            <p className="our-tools-right-content-text">Happy Clients</p>
                        </div>
                        <div className="credibility-grid-card flex flex-col rounded px-8 pb-6 pt-8 text-center">
                            <img
                                src="/images/home/Ideas-created.png"
                                alt="ellipsis icon"
                                width="61px"
                                height="61px"
                                className="mb-8 self-center"
                            />
                            <p className="our-tools-right-content-title mb-2 py-5 text-center">
                                28,853
                            </p>
                            <p className="our-tools-right-content-text">Ideas Created</p>
                        </div>
                    </div>

                    <div className="credibility-right-container pb-24 lg:py-10 lg:pl-20">
                        <div className="credibility-right-content-container">
                            <div className="credibility-right-content-header relative z-20 flex flex-col items-center text-center lg:items-start lg:text-start">
                                <h4 className="global-header-text-3 mb-4 xl:mb-12">
                                    Credibility
                                </h4>
                                <h3 className="credibility-custom-header mb-6 max-w-[320px]">
                                    Our Numbers Walk the Talk
                                </h3>
                                <p className="global-header-text-3 mb-5 max-w-[360px] xl:mb-6">
                                    A number of users have witnessed massive changes in their
                                    following, engagements and earnings as they embarked on this
                                    new journey using Shinefy tools.
                                </p>
                                <a
                                    href="https://realchasereiner.kartra.com/page/shinefyai2"
                                    rel="noreferrer"
                                    // target="_blank"
                                    className="global-primary-btn mb-2 flex w-10/12 items-center justify-center px-5 py-4 md:w-6/12 lg:w-auto"
                                >
                                    Start Creating Today
                                </a>
                            </div>

                            <div className="absolute left-0 top-0 z-10 h-full w-full ">
                                <img
                                    src="/images/home/Planets/pink-moon.png"
                                    alt="Shine Ai Training Video thumbnail"
                                    width="136px"
                                    height="138px"
                                    className="absolute left-[-3.8rem] top-[-3.7rem]"
                                />

                                <img
                                    src="/images/home/Planets/chrome-moon-2.png"
                                    alt="Shine Ai Training Video thumbnail"
                                    // width="136px"
                                    // height="138px"
                                    className="absolute left-[5rem] top-[-1rem]"
                                />

                                <img
                                    src="/images/home/Planets/purple-saturn-2.png"
                                    alt="Shine Ai Training Video thumbnail"
                                    // width="334px"
                                    // height="218px"
                                    className="absolute left-[20rem] top-[7.5rem] md:left-[38rem] lg:left-[25.5rem]"
                                />

                                <img
                                    src="/images/home/Planets/purple-drwaf-planet.png"
                                    alt="Shine Ai Training Video thumbnail"
                                    width="65px"
                                    height="65px"
                                    className="absolute bottom-[-1rem] left-[2.5rem]"
                                />

                                <img
                                    src="/images/home/Planets/purple-moon-2.png"
                                    alt="Shine Ai Training Video thumbnail"
                                    // width="334px"
                                    // height="218px"
                                    className="absolute bottom-[-7rem] left-[17.5rem]"
                                />

                                <img
                                    src="/images/home/Planets/purple-drwaf-planet.png"
                                    alt="Shine Ai Training Video thumbnail"
                                    width="65px"
                                    height="65px"
                                    className="absolute bottom-[-7rem] left-[30rem]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* *** Subscribe for Freebies *** */}
            <section className="awesome-freebies-custom-bg relative">
                <div className="relative z-20 mx-[5%] flex h-full flex-col items-center justify-center pb-80 pt-96 md:mx-[10%] 2xl:mx-[20%]">
                    <h4 className="global-header-text-1 mb-8 text-center">
                        Subscribe for Awesome Freebies
                    </h4>
                    <h3 className="global-header-text-2 mb-8 max-w-[546px] text-center">
                        Get the latest updates on the use of AI Tools in business
                    </h3>

                    <p className="global-header-text-3 mb-7">A Limited-Time Offer</p>

                    <a
                        href="https://realchasereiner.kartra.com/page/shinefyai2"
                        type="button"
                        rel="noreferrer"
                        // target="_blank"
                        className="global-primary-btn flex justify-center px-24 py-4"
                    >
                        Sign Up
                    </a>

                    {/* *** Temporarily hidden because inputfield doesnt have functionality yet - JOHN 06/10/23 */}
                    {/* <div className="flex flex-col md:flex-row subscribe-for-freebies-form">
                        <input
                            type="text"
                            name="promo_code"
                            placeholder="enter your email here"
                            className="min-h-[50px] min-w-[280px] lg:min-w-[320px]"
                        />
                        <a
                            href="https://realchasereiner.kartra.com/page/shinefyai2"
                            type="button"
                            rel="noreferrer"
                            target="_blank"
                            className="global-primary-btn flex justify-center px-5 py-4"
                        >
                            Sign Up
                        </a>
                    </div> */}
                </div>

                <div className="absolute top-0 z-10 h-full w-full overflow-hidden xl:mx-[5%] xl:w-[90%] 2xl:mx-[15%] 2xl:w-[70%]">
                    <img
                        src="/images/home/Planets/purple-saturn-1.png"
                        alt="Shine Ai Training Video thumbnail"
                        // width="334px"
                        // height="218px"
                        className="absolute left-[-12rem] top-[8rem] lg:left-[-6rem] lg:top-[11rem] xl:left-[0rem] 2xl:left-[4rem]"
                    />

                    <img
                        src="/images/home/Planets/purple-drwaf-planet.png"
                        alt="Shine Ai Training Video thumbnail"
                        // width="18px"
                        // height="18px"
                        className="absolute right-[6rem] top-[3rem] lg:right-[14rem] lg:top-[6rem] xl:right-[21.5rem]"
                    />

                    <img
                        src="/images/home/Planets/pink-moon.png"
                        alt="Shine Ai Training Video thumbnail"
                        // width="334px"
                        // height="218px"
                        className="absolute right-[-8rem] top-[4rem] lg:right-[-2rem] xl:right-[7rem]"
                    />

                    <img
                        src="/images/home/Planets/chrome-moon-1.png"
                        alt="Shine Ai Training Video thumbnail"
                        // width="334px"
                        // height="218px"
                        className="absolute right-[2rem] top-[26rem] xl:right-[7.5rem]"
                    />

                    <img
                        src="/images/home/Planets/purple-moon-1.png"
                        alt="Shine Ai Training Video thumbnail"
                        // width="334px"
                        // height="218px"
                        className="absolute bottom-[6.5rem] left-[49.5%]"
                    />
                </div>
            </section>

            {/* *** Testimonials *** */}
            <section className="testimonial-section my-28 px-[10%] xl:px-[19%]">
                <div className="mb-10 flex flex-col items-center">
                    <h4 className="global-header-text-1 mb-5">Content Creator Reviews</h4>
                    <h3 className="global-header-text-2 mb-5 max-w-[220px] text-center md:max-w-[520px]">
                        Hear it from our Users
                    </h3>
                </div>

                <div className="relative">
                    <Swiper
                        // slidesPerView={4}
                        // spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1440: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                            1700: {
                                slidesPerView: 4,
                                spaceBetween: 8,
                            },
                        }}
                        modules={[Autoplay]}
                        className="testimonial-carousel-container z-30"
                    >
                        <SwiperSlide>
                            <div className="testimonial-card flex w-[80%] flex-col px-10 pb-12 text-center md:w-[60%] lg:w-auto">
                                <img
                                    src="/images/home/TestimonialHeads/testimonial-head-1.png"
                                    alt="tetimonial 1 profile"
                                    height="150"
                                    className="testimonial-card-profile-img"
                                />
                                <p className="mt-5 text-white">VincentK</p>
                                <p className="mt-1 text-white">Content Creator</p>
                                <div className="mt-5 flex flex-row justify-center">
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                </div>
                                <p className="mt-5 text-white">
                                    &quot;One of the biggest barriers was content creation. This
                                    tool is amazing brother. I’m genuinely thrilled to help market
                                    it.&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-card flex w-[80%] flex-col px-10 pb-12 text-center md:w-[60%] lg:w-auto">
                                <img
                                    src="/images/home/TestimonialHeads/testimonial-head-2.png"
                                    alt="tetimonial 2 profile"
                                    height="150"
                                    className="testimonial-card-profile-img"
                                />
                                <p className="mt-5 text-white">Alchemist</p>
                                <p className="mt-1 text-white">Reels Creator</p>
                                <div className="mt-5 flex flex-row justify-center">
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                </div>
                                <p className="mt-5 text-white">
                                    &quot;JUST CHECKED MY FACEBOOK ANALYTICS THE PAST 28 DAYS AND
                                    GOT 16K VIEWS!!!&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-card flex w-[80%] flex-col px-10 pb-12 text-center md:w-[60%] lg:w-auto">
                                <img
                                    src="/images/home/TestimonialHeads/testimonial-head-3.png"
                                    alt="tetimonial 3 profile"
                                    height="150"
                                    className="testimonial-card-profile-img"
                                />
                                <p className="mt-5 text-white">Chance Reynolds</p>
                                <p className="mt-1 text-white">Reels Creator</p>
                                <div className="mt-5 flex flex-row justify-center">
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                </div>
                                <p className="mt-5 text-white">
                                    &quot;It’s a totally faceless way to make amazing videos. I’m
                                    using them to sell affiliate physical products on TikTok, and
                                    they’re working!&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-card flex w-[80%] flex-col px-10 pb-12 text-center md:w-[60%] lg:w-auto">
                                <img
                                    src="/images/home/TestimonialHeads/testimonial-head-4.png"
                                    alt="tetimonial 4 profile"
                                    height="150"
                                    className="testimonial-card-profile-img"
                                />
                                <p className="mt-5 text-white">Easy Internet Mktng</p>
                                <p className="mt-1 text-white">Reels Creator</p>
                                <div className="mt-5 flex flex-row justify-center">
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                </div>
                                <p className="mt-5 text-white">
                                    &quot;I MADE TWO SALES ON THE FIRST OF THIS MONTH AND ANOTHER
                                    ONE THIS MORNING.&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-card flex w-[80%] flex-col px-10 pb-12 text-center md:w-[60%] lg:w-auto">
                                <img
                                    src="/images/home/TestimonialHeads/testimonial-head-5.png"
                                    alt="tetimonial 5 profile"
                                    height="150"
                                    className="testimonial-card-profile-img"
                                />
                                <p className="mt-5 text-white">ComedyMarketer</p>
                                <p className="mt-1 text-white">Youtube Shorts Creator</p>
                                <div className="mt-5 flex flex-row justify-center">
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                </div>
                                <p className="mt-5 text-white">
                                    &quot;I HAD THE TRIAL OF SHINE RANKER YESTERDAY AND LOVE IT,
                                    I&apos;M BLOWN AWAY BY THE QUALITY.&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-card flex w-[80%] flex-col px-10 pb-12 text-center md:w-[60%] lg:w-auto">
                                <img
                                    src="/images/home/TestimonialHeads/testimonial-head-6.png"
                                    alt="tetimonial 6 profile"
                                    height="150"
                                    className="testimonial-card-profile-img"
                                />
                                <p className="mt-5 text-white">Tommy Seilheimer</p>
                                <p className="mt-1 text-white">Content Creator & Manager</p>
                                <div className="mt-5 flex flex-row justify-center">
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                </div>
                                <p className="mt-5 text-white">
                                    &quot;I USED IT FOR A CLIENT TODAY AND I CLOSE AT $100K A
                                    YEAR!&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-card flex w-[80%] flex-col px-10 pb-12 text-center md:w-[60%] lg:w-auto">
                                <img
                                    src="/images/home/TestimonialHeads/testimonial-head-7.png"
                                    alt="tetimonial 7 profile"
                                    height="150"
                                    className="testimonial-card-profile-img"
                                />
                                <p className="mt-5 text-white">Lisa Phillips</p>
                                <p className="mt-1 text-white">TikTok Video Creator</p>
                                <div className="mt-5 flex flex-row justify-center">
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                </div>
                                <p className="mt-5 text-white">
                                    &quot;I POSTED MY FIRST FEW VIDEOS MADE WITH SHINE RANKER. ONE
                                    OF THEM GOT 843 VIEWS!!&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-card flex w-[80%] flex-col px-10 pb-12 text-center md:w-[60%] lg:w-auto">
                                <img
                                    src="/images/home/TestimonialHeads/testimonial-head-8.png"
                                    alt="tetimonial 8 profile"
                                    height="150"
                                    className="testimonial-card-profile-img"
                                />
                                <p className="mt-5 text-white">Anthony Kell</p>
                                <p className="mt-1 text-white">Content Creator & Manager</p>
                                <div className="mt-5 flex flex-row justify-center">
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                                </div>
                                <p className="mt-5 text-white">
                                    &quot;Gosh, it used to take me a couple of hours to create
                                    something like this. I’m totally stoked now.&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="absolute left-0 top-0 flex h-full w-full justify-between">
                        <div className="testimonial-side-shadow-left z-40 w-[10%]"></div>
                        <div className="testimonial-side-shadow-right z-40 w-[10%]"></div>
                    </div>
                </div>
            </section>

            {/* *** Social links section *** */}
            <section className="z-20 bg-gradient-to-b from-[#07061c] to-[#100826] px-[5%] xl:px-[18%]">
                <div className="grid grid-cols-1 space-x-0 py-12 lg:grid-cols-2 lg:space-x-28 lg:py-24 xl:space-x-6">
                    <div className="mb-12 px-4 text-center md:px-0 lg:mb-0 lg:text-start">
                        <h2 className="global-header-text-1 mb-5">
                            Follow us on our socials
                        </h2>
                        <h1 className="global-header-text-2 mb-5 md:mb-4">
                            Let’s Get Connected!
                        </h1>
                        <p className="global-header-text-3">Strong bonds make a team</p>
                    </div>
                    <div className="flex justify-center gap-2 md:gap-6 xl:gap-8">
                        <SocialLinksButtons />
                    </div>
                </div>
            </section>

            {/* *** Join Us section *** */}
            {/* <section className="join-us-section-container z-10 pb-20 pt-32">
                <div className="join-us-content-container flex flex-row justify-center">
                    <div
                        className="z-10 mr-[-5rem] mt-[-2rem] hidden self-center lg:block"
                        ref={footerAnimationContainer}
                    />

                    <div className="z-20 flex items-center px-4 md:px-0">
                        <div className="join-us-right-container w-full px-10 pb-8 pt-6 lg:max-w-[370px]">
                            <p className="home-card-header-small mb-5">Join us today!</p>
                            <h3 className="global-header-text-2 mb-5">
                                Start Creating <br />
                                binge-worthy <br />
                                AI reels
                            </h3>
                            <p className="home-card-header-content mb-3">
                                Grow your audience and view count in <br /> as fast as 7 days.
                            </p>
                            <form className="">
                                <input
                                    type="text"
                                    name="user_email"
                                    placeholder="Your Email"
                                    className="home-input-left-placeholder mb-3 w-full"
                                />
                                <input
                                    type="password"
                                    name="user_password"
                                    placeholder="Your Password"
                                    className="home-input-left-placeholder mb-3 w-full"
                                />
                                <div className="mb-3 flex flex-col gap-4 lg:flex-row">
                                    <a
                                        href="https://app.shinefy.com/register"
                                        rel="noreferrer"
                                        className="global-primary-btn w-full py-3 text-center"
                                    >
                                        Create an account
                                    </a>
                                    <a
                                        href="https://app.shinefy.com"
                                        rel="noreferrer"
                                        className="home-outlined-btn flex items-center justify-center whitespace-nowrap px-4"
                                    >
                                        Log in
                                    </a>
                                </div>
                                <a href="/pricing" className="home-link">
                                    Pricing Plan
                                    <i className="fa-solid fa-chevron-right ml-3 mt-1 text-white"></i>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}

            <FooterPage />
        </>
    );
}
