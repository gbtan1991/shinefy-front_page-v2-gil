"use client";

import { useState, useEffect, useRef } from "react";

import { useRouter } from "next/navigation";
import MonthlyPlan from "./ThrivecartEmbed/MonthlyPlan";
import AnnualPlan from "./ThrivecartEmbed/AnnualPlan";

export default function PricingPlanSection() {
    const router = useRouter();

    const [monthlyThrivecartModalIsShown, setmonthlyThrivecartModalIsShown] = useState(false);
    const [annualThrivecartModalIsShown, setannualThrivecartModalIsShown] = useState(false);
    const [lightThrivecartModalIsShown, setLightThrivecartModalIsShown] = useState(false);
    const [selectedPricingPlan, setSelectedPricingPlan] = useState("light-pricing");

    const monthlyThrivecartEmbedModal = useRef();
    const annualThrivecartEmbedModal = useRef();
    const lightThrivecartEmbedModal = useRef();

    const handlePricingPlanChange = (option) => {
        setSelectedPricingPlan(option);
    };

    const handleShowMonthlyThrivecartModal = () => {
        window.open("https://chasereiner.thrivecart.com/monthly-shinefy-subscription/", '_blank', 'noopener,noreferrer');
        // monthlyThrivecartEmbedModal.current.showModal();
        // setmonthlyThrivecartModalIsShown(true);
    };

    const handleHideMonthlyThrivecartModal = () => {
        monthlyThrivecartEmbedModal.current.close();
        setmonthlyThrivecartModalIsShown(false);
    };

    const handleShowLightThrivecartModal = () => {
        window.open("https://realchasereiner.kartra.com/page/shinefyai2/", '_blank', 'noopener,noreferrer');
        // lightThrivecartEmbedModal.current.showModal();
        // setLightThrivecartModalIsShown(true);
    };

    const handleHideLightThrivecartModal = () => {
        lightThrivecartEmbedModal.current.close();
        setLightThrivecartModalIsShown(false);
    };

    const handleShowAnnualThrivecartModal = () => {
        window.open("https://chasereiner.thrivecart.com/yearly-shinefy-subscription/", '_blank', 'noopener,noreferrer');
        // annualThrivecartEmbedModal.current.showModal();
        // setannualThrivecartModalIsShown(true);
    };

    const handleHideAnnualThrivecartModal = () => {
        annualThrivecartEmbedModal.current.close();
        setannualThrivecartModalIsShown(false);
    };

    return (
        <>
            <div className="">
                <h4 className="mb-8 max-w-[230px] text-2xl font-bold text-[#7BDCDE]">
                    The Ultimate Content Creator Package
                </h4>
                <div className="">
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">
                            {selectedPricingPlan === "light-pricing" ? "50 credits per month" : "250 credits per month"}
                        </p>
                    </div>

                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">
                            Can Purchase Credits
                        </p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">
                            AI Chat
                        </p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">
                            Video Generator
                        </p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">
                            Video Transcriber
                        </p>
                    </div>
                    {/* <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">Unlimited Leads</p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">Unlimited AI Keywords</p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">Unlimited AI Chat</p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">
                            Unlimited Video Clipping
                        </p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">AI Video Creation</p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">Project Dashboard</p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">Keyword Research</p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">Traffic Checker</p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">Shine Audit</p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">Content Editor</p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">Leads List & Widget</p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">AI Keywords</p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">AI Chat</p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">AI Video Tools</p>
                    </div>
                    <div className="mb-3 flex gap-2">
                        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                        <p className="pricing-plan-checklist-text">AI Video Clipper</p>
                    </div> */}
                </div>
            </div>

            <div className="mt-10 w-full md:mt-0 md:w-auto">

                <div
                    onClick={() => handlePricingPlanChange("light-pricing")}
                    className={`relative mb-14 flex flex-col items-end justify-end gap-x-8 rounded-md px-6 py-4 md:flex-row xl:gap-x-14 ${selectedPricingPlan == "light-pricing"
                        ? "active-pricing-plan-cards-container"
                        : "unactive-pricing-plan-cards-container"
                        }`}
                >
                    <div className="flex w-full flex-col py-3 pl-3 md:w-[60%] lg:w-[65%]">
                        <p className="pricing-plan-card-text-3 mb-1">Shinefy light</p>
                        <p className="pricing-plan-card-text-2 mb-4">Get Started</p>
                        <p className="pricing-plan-card-text-1 mb-4">
                            $1<span className="text-lg font-normal">for 30 days</span>
                        </p>
                        <p className="pricing-plan-card-text-3 mb-6">Billed $27 Monthly</p>
                        <p className="pricing-plan-card-text-3 max-w-[200px]">
                            Get Started with Shinefy Light All you need for scaling your content.
                        </p>
                    </div>

                    <i className="fa-solid fa-circle-check absolute right-6 top-4 text-[#F1F1F1]"></i>

                    <div className="w-full md:w-[40%] lg:w-[35%]">
                        <button
                            onClick={handleShowLightThrivecartModal}
                            className="pricing-plan-card-btn flex w-full items-center justify-center whitespace-nowrap px-5 py-4"
                        >
                            Choose Plan
                        </button>

                        {/* *** Replaced with Thrivecart embed - JOHN 10/10/23 *** */}
                        {/* <a
                            href="https://app.shinefy.com"
                            rel="noreferrer"
                            target="_blank"
                            className="pricing-plan-card-btn flex w-full items-center justify-center whitespace-nowrap px-5 py-4"
                        >
                            Choose Plan
                        </a> */}
                    </div>
                </div>

                <div
                    onClick={() => handlePricingPlanChange("monthly-pricing")}
                    className={`relative mb-14 flex flex-col items-end justify-end gap-x-8 rounded-md px-6 py-4 md:flex-row xl:gap-x-14 ${selectedPricingPlan == "monthly-pricing"
                        ? "active-pricing-plan-cards-container"
                        : "unactive-pricing-plan-cards-container"
                        }`}
                >
                    <div className="flex w-full flex-col py-3 pl-3 md:w-[60%] lg:w-[65%]">
                        <p className="pricing-plan-card-text-3 mb-1">Shinefy Starter</p>
                        <p className="pricing-plan-card-text-2 mb-4">Take it Slow</p>
                        <p className="pricing-plan-card-text-1 mb-4">$99</p>
                        <p className="pricing-plan-card-text-3 mb-6">Billed Monthly</p>
                        <p className="pricing-plan-card-text-3 max-w-[200px]">
                            Everything you need to get started scaling your content
                        </p>
                    </div>

                    <i className="fa-solid fa-circle-check absolute right-6 top-4 text-[#F1F1F1]"></i>

                    <div className="w-full md:w-[40%] lg:w-[35%]">
                        <button
                            onClick={handleShowMonthlyThrivecartModal}
                            className="pricing-plan-card-btn flex w-full items-center justify-center whitespace-nowrap px-5 py-4"
                        >
                            Choose Plan
                        </button>

                        {/* *** Replaced with Thrivecart embed - JOHN 10/10/23 *** */}
                        {/* <a
                            href="https://app.shinefy.com"
                            rel="noreferrer"
                            target="_blank"
                            className="pricing-plan-card-btn flex w-full items-center justify-center whitespace-nowrap px-5 py-4"
                        >
                            Choose Plan
                        </a> */}
                    </div>
                </div>

                <div
                    onClick={() => handlePricingPlanChange("annual-pricing")}
                    className={`relative mb-4 flex flex-col items-end justify-end gap-x-8 rounded-md px-6 py-4 md:flex-row xl:gap-x-14 ${selectedPricingPlan == "annual-pricing"
                        ? "active-pricing-plan-cards-container"
                        : "unactive-pricing-plan-cards-container"
                        }`}
                >
                    <div className="flex w-full flex-col py-3 pl-3 md:w-[60%] lg:w-[65%]">
                        <p className="pricing-plan-card-text-3 mb-1 md:whitespace-nowrap">
                            Create Content Uninterrupted
                        </p>
                        <p className="pricing-plan-card-text-2 mb-4">Go Big!</p>
                        <p className="pricing-plan-card-text-1 mb-4">$499</p>
                        <p className="pricing-plan-card-text-3 mb-6">
                            Billed annually, 43% Savings!
                        </p>
                        <p className="pricing-plan-card-text-3 max-w-[220px]">
                            Experience Shinefy without limits and empower your channel
                            consistently all with a sweet discount!
                        </p>
                    </div>

                    <i className="fa-solid fa-circle-check absolute right-6 top-4 text-[#F1F1F1]"></i>

                    <div className="w-full md:w-[40%] lg:w-[35%]">
                        <button
                            onClick={handleShowAnnualThrivecartModal}
                            className="pricing-plan-card-btn flex w-full items-center justify-center whitespace-nowrap px-5 py-4"
                        >
                            Choose Plan
                        </button>

                        {/* *** Replaced with Thrivecart embed - JOHN 10/10/23 *** */}
                        {/* <a
                            href="https://chasereiner.thrivecart.com/seo-pro-automated-pack/"
                            rel="noreferrer"
                            target="_blank"
                            className="pricing-plan-card-btn flex w-full items-center justify-center whitespace-nowrap px-5 py-4"
                        >
                            Choose Plan
                        </a> */}
                    </div>
                </div>
            </div>

            <dialog
                ref={monthlyThrivecartEmbedModal}
                className={` ${monthlyThrivecartModalIsShown ? "" : "hidden"} thrivecart-modal mt-[10vh] h-[90vh] w-full bg-[white] md:mt-[24vh] md:h-[82vh]`}
            >
                <div className="flex w-full justify-end">
                    <button
                        onClick={handleHideMonthlyThrivecartModal}
                        className="bg-white global-outlined-btn-3 mb-16 mr-6 mt-10 rounded border px-5 py-3 md:mb-12 md:mr-8 lg:mb-0 xl:absolute xl:right-10 xl:top-3"
                    >
                        Cancel
                    </button>
                </div>

                {/* <MonthlyPlan /> */}
                <iframe src="https://chasereiner.thrivecart.com/monthly-shinefy-subscription/" width="100%" height="100%" />
            </dialog>

            <dialog
                ref={annualThrivecartEmbedModal}
                className={` ${annualThrivecartModalIsShown ? "" : "hidden"} thrivecart-modal mt-[22vh] h-[82vh] w-full bg-[#f6f4ff]`}
            >
                <div className="flex w-full justify-end">
                    <button
                        onClick={handleHideAnnualThrivecartModal}
                        className="bg-white global-outlined-btn-3 mb-16 mr-6 mt-10 rounded border px-5 py-3 md:mb-12 md:mr-8 lg:mb-0 xl:absolute xl:right-10 xl:top-3"
                    >
                        Cancel
                    </button>
                </div>

                {/* <AnnualPlan /> */}
                <iframe src="https://chasereiner.thrivecart.com/yearly-shinefy-subscription/" width="100%" height="100%" />
            </dialog>

            {/* <dialog
                ref={lightThrivecartEmbedModal}
                className={` ${lightThrivecartModalIsShown ? "" : "hidden"} thrivecart-modal mt-[22vh] h-[82vh] w-full bg-[#f6f4ff]`}
            >
                <div className="flex w-full justify-end">
                    <button
                        onClick={handleHideLightThrivecartModal}
                        className="bg-white global-outlined-btn-3 mb-16 mr-6 mt-10 rounded border px-5 py-3 md:mb-12 md:mr-8 lg:mb-0 xl:absolute xl:right-10 xl:top-3"
                    >
                        Cancel
                    </button>
                </div>

                <iframe src="https://chasereiner.thrivecart.com/shinefy-light/" width="100%" height="100%" />
            </dialog> */}
        </>
    );
}
