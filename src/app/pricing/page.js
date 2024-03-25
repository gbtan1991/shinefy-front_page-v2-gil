import ContactInfo from "@/components/Contacts/ContactInfo";
import FooterPage from "@/components/Footer/Footer";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";
import OneTimeDeal from "@/components/OneTimeDeal/page";
import PricingPlanSection from "@/app/pricing/components/PricingPlanSection";

import "./Pricing.css";

export default function Pricing() {
  return (
    <>
      <header className="global-header-section-bg min-h-[38rem] px-[5%] pt-[15rem] xl:px-[18%]">
        <div className="flex flex-col items-center justify-center">
          <h2 className="global-header-text-1 mb-6">Pricing</h2>
          <h1 className="global-header-text-2 mb-10 max-w-[44rem] text-center">
            Get access to AI and SEO loaded tools and to more than 400+
            affiliate programs and sites
          </h1>
          <p className="global-header-text-3 max-w-[520px] text-center">
            Turn ordinary content into viral opportunities
          </p>
        </div>
      </header>

      <section className="pricing-plan-section-custom-bg px-[5%] py-16 xl:px-[20%]">
        <div className="flex flex-col justify-center gap-x-32 gap-y-32 md:flex-row md:gap-y-0">
          <div className="flex flex-col items-center gap-x-10 gap-y-5 lg:flex-row">
            <img
              src="/svg/pricing/stars.svg"
              alt="ai face icon"
              width="130px"
            />
            <div className="flex max-w-[14rem] flex-col justify-between text-center lg:min-h-[12rem] lg:text-start">
              <h5 className="global-header-text-2 mb-4 md:mt-4 lg:mb-0">
                103,000 people
              </h5>
              <p className="font-karla text-[20px] leading-[120%] text-white">
                transforming with Shinefy everyday
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-x-14 gap-y-5 lg:flex-row">
            <img
              src="/svg/pricing/videos.svg"
              alt="ai face icon"
              width="100px"
            />
            <div className="flex max-w-[14rem] flex-col justify-between text-center lg:min-h-[12rem] lg:text-start">
              <h5 className="global-header-text-2 mb-4 lg:mb-0">
                Thousands of Free Videose
              </h5>
              <p className="font-karla text-[20px] leading-[120%] text-white">
                transforming with Shinefy everyday
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[5%] py-12 xl:px-[20%]">
        <div className="flex flex-col items-center justify-center gap-x-10 pb-[50px] md:flex-row lg:gap-x-20">
          <PricingPlanSection />
        </div>
      </section>

      <OneTimeDeal />

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />
    </>
  );
}
